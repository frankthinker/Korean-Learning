#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简化的开发服务器启动脚本
- 启动Vite开发服务器
- 自动打开浏览器
"""

import subprocess
import webbrowser
import time
import sys
import os

def main():
    print("🚀 启动韩语语法学习平台开发服务器...")
    
    # 设置环境变量指定端口
    port = "5176"
    os.environ["PORT"] = port
    
    # 构建URL
    url = f"http://localhost:{port}"
    
    # 启动Vite服务器（在后台运行）
    print(f"🔄 正在启动服务器 (端口 {port})...")
    
    try:
        # 启动服务器进程
        process = subprocess.Popen(
            ["npx", "vite"],
            cwd=os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        
        # 等待几秒让服务器启动
        print("⏳ 等待服务器启动...")
        time.sleep(3)
        
        # 打开浏览器
        print(f"🖥️  正在打开浏览器: {url}")
        webbrowser.open(url)
        
        print("✅ 服务器已启动，浏览器已打开！")
        print("💡 按 Ctrl+C 停止服务器")
        
        # 等待用户中断
        try:
            process.wait()
        except KeyboardInterrupt:
            print("\n🛑 正在停止服务器...")
            process.terminate()
            process.wait()
            print("✅ 服务器已停止")
            
    except Exception as e:
        print(f"❌ 启动失败: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()