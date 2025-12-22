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
from pathlib import Path

def find_free_port(start_port=5176):
    """查找可用的端口"""
    port = start_port
    while True:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(('localhost', port))
                return port
            except OSError:
                port += 1
                if port > start_port + 100:  # 防止无限循环
                    raise Exception("无法找到可用端口")

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
    
    # 构建Vite配置（动态设置端口）
    vite_config = f"""
import {{ defineConfig }} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({{
  plugins: [react()],
  server: {{
    port: {port},
    open: false  // 我们手动打开浏览器
  }}
}})
    """.strip()
    
    # 写入临时配置文件
    config_path = Path(__file__).parent.parent / 'vite.config.js'
    with open(config_path, 'w', encoding='utf-8') as f:
        f.write(vite_config)
    
    # 启动Vite服务器
    process = subprocess.Popen(
        ['npx', 'vite'],
        cwd=Path(__file__).parent.parent,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    
    return process

def wait_for_server(port, timeout=30):
    """等待服务器启动"""
    start_time = time.time()
    while time.time() - start_time < timeout:
        if is_port_in_use(port):
            # 端口被占用即认为服务器已启动
            return True
        time.sleep(1)
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
    try:
        process = start_vite_server(port)
        print(f"🔄 正在启动服务器...")
        
        # 等待服务器启动
        if wait_for_server(port):
            url = f"http://localhost:{port}"
            print(f"✅ 服务器启动成功!")
            print(f"🌐 访问地址: {url}")
            
            # 自动打开浏览器
            print("🖥️  正在打开浏览器...")
            webbrowser.open(url)
            
            print("\n💡 提示:")
            print("   - 服务器已在后台运行")
            print("   - 按 Ctrl+C 停止服务器")
            print("   - 代码修改后会自动热更新")
            
            # 等待用户中断
            try:
                process.wait()
            except KeyboardInterrupt:
                print("\n🛑 正在停止服务器...")
                process.terminate()
                process.wait()
                print("✅ 服务器已停止")
        else:
            print("❌ 服务器启动超时")
            process.terminate()
            sys.exit(1)
            
    except Exception as e:
        print(f"❌ 启动服务器时出错: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()