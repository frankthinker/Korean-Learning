#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自动启动开发服务器的脚本
- 自动检测可用端口
- 启动Vite开发服务器
- 自动打开浏览器
"""

import subprocess
import sys
import time
import webbrowser
import socket
import os
from pathlib import Path

def find_free_port(start_port=5176, max_attempts=100):
    """在指定范围内查找可用的端口"""
    # 首先尝试默认端口
    if not is_port_in_use(start_port):
        return start_port
    
    # 在范围内查找可用端口
    for i in range(max_attempts):
        port = start_port + 1 + i
        if port > 65535:  # 端口号上限
            break
        if not is_port_in_use(port):
            return port
    
    # 如果没找到，尝试较小的端口
    for i in range(1, min(start_port, max_attempts)):
        port = start_port - i
        if port < 1024:  # 避免系统保留端口
            break
        if not is_port_in_use(port):
            return port
    
    raise Exception(f"无法在范围 [{max(1024, start_port-max_attempts)}-{min(65535, start_port+max_attempts)}] 内找到可用端口")

def is_port_in_use(port):
    """检查端口是否被占用"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind(('localhost', port))
            return False
        except OSError:
            return True

def start_vite_server(port):
    """启动Vite开发服务器"""
    print(f"正在启动开发服务器，使用端口: {port}")
    
    # 启动Vite服务器，通过环境变量传递端口
    try:
        env = os.environ.copy()
        env['PORT'] = str(port)
        
        process = subprocess.Popen(
            ['npx', 'vite'],
            cwd=Path(__file__).parent.parent,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            env=env
        )
        return process
    except Exception as e:
        print(f"❌ 启动Vite服务器失败: {e}")
        raise

def wait_for_server(port, timeout=30):
    """等待服务器启动并验证响应"""
    start_time = time.time()
    while time.time() - start_time < timeout:
        if is_port_in_use(port):
            # 端口被占用后，尝试验证服务器是否真正响应
            try:
                import urllib.request
                response = urllib.request.urlopen(f'http://localhost:{port}', timeout=2)
                # 检查是否返回有效的HTML内容
                content = response.read().decode('utf-8', errors='ignore')
                if '<html' in content.lower() or '<!doctype' in content.lower():
                    return True
            except Exception as e:
                # 继续等待
                pass
        time.sleep(0.5)
    return False

def main():
    print("🚀 韩语语法学习平台 - 开发服务器启动工具")
    print("=" * 50)
    
    # 查找可用端口
    try:
        port = find_free_port(5176)
        print(f"✅ 找到可用端口: {port}")
    except Exception as e:
        print(f"❌ 无法找到可用端口: {e}")
        sys.exit(1)
    
    # 启动服务器
    process = None
    try:
        process = start_vite_server(port)
        print(f"🔄 正在启动服务器...")
        
        # 等待服务器启动
        print("⏳ 等待服务器响应...")
        if wait_for_server(port, timeout=45):  # 增加超时时间
            url = f"http://localhost:{port}"
            print(f"✅ 服务器启动成功!")
            print(f"🌐 访问地址: {url}")
            
            # 自动打开浏览器
            print("🖥️  正在打开浏览器...")
            try:
                webbrowser.open(url)
                print("✅ 浏览器已打开")
            except Exception as e:
                print(f"⚠️  浏览器打开失败: {e}")
                print(f"📋 请手动访问: {url}")
            
            print("\n💡 提示:")
            print("   - 服务器已在后台运行")
            print("   - 按 Ctrl+C 停止服务器")
            print("   - 代码修改后会自动热更新")
            
            # 监控服务器状态
            try:
                # 检查进程是否仍在运行
                if process.poll() is not None:
                    print("\n⚠️  服务器进程已退出")
                    stderr_output = process.stderr.read()
                    if stderr_output:
                        print(f"错误信息: {stderr_output}")
                    sys.exit(1)
                
                # 等待用户中断
                process.wait()
            except KeyboardInterrupt:
                print("\n🛑 正在停止服务器...")
                process.terminate()
                try:
                    process.wait(timeout=10)  # 等待最多10秒
                except subprocess.TimeoutExpired:
                    process.kill()  # 强制杀死进程
                    process.wait()
                print("✅ 服务器已停止")
        else:
            print("❌ 服务器启动超时")
            if process:
                # 尝试获取错误信息
                try:
                    stderr_output = process.stderr.read()
                    if stderr_output:
                        print(f"错误信息: {stderr_output}")
                except:
                    pass
                process.terminate()
            sys.exit(1)
            
    except Exception as e:
        print(f"❌ 启动服务器时出错: {e}")
        # 尝试终止进程
        if process:
            try:
                process.terminate()
                process.wait(timeout=5)
            except:
                try:
                    process.kill()
                except:
                    pass
        sys.exit(1)

if __name__ == "__main__":
    main()