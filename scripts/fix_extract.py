#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复版练习数据提取脚本
- 正确提取所有语法点
- 修复格式问题
"""

import os

def extract_and_fix_grammar_point(file_path, start_line, end_line, output_file, grammar_id, comment):
    """提取并修复语法点"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 提取指定行范围的内容
    section_lines = lines[start_line-1:end_line]  # 转换为0基索引
    
    # 创建输出内容
    output_lines = []
    output_lines.append(f"// {comment} 练习题\n")
    output_lines.append(f"export const practice_{grammar_id} = [\n")
    
    # 处理内容行，确保格式正确
    for i, line in enumerate(section_lines):
        # 跳过第一行（原始语法点定义）
        if i == 0:
            continue
            
        # 跳过最后一行（原始结束符）
        if i == len(section_lines) - 1:
            continue
            
        # 添加行内容
        output_lines.append(line)
    
    # 确保正确结束
    output_lines.append("];\n")
    
    # 写入文件
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(output_lines)
    
    print(f"✅ 已创建文件: {output_file} ({len(output_lines)} 行)")

def main():
    print("🚀 开始修复版练习数据提取...")
    
    # 输入文件路径
    input_file = "src/data/practiceDatabase.js"
    
    # 定义所有初级语法点及其行范围和注释
    grammar_points = [
        {
            'id': 'beg_001',
            'start': 10,
            'end': 141,
            'comment': '-습니다/-습니까 (경어 진술형/의문형)'
        },
        {
            'id': 'beg_002',
            'start': 143,
            'end': 194,
            'comment': '-고 있다/-고 있어요 (현재 진행식)'
        },
        {
            'id': 'beg_003',
            'start': 276,
            'end': 409,
            'comment': '-를/을 (목적어 표시)'
        },
        {
            'id': 'beg_004',
            'start': 411,
            'end': 547,
            'comment': '-이/가 (주어 표시)'
        }
    ]
    
    print(f"📊 处理 {len(grammar_points)} 个语法点")
    
    # 为每个语法点创建文件
    for point in grammar_points:
        output_file = f"src/data/practice/beginner/{point['id']}.js"
        print(f"📝 提取语法点 {point['id']}...")
        extract_and_fix_grammar_point(
            input_file, 
            point['start'], 
            point['end'], 
            output_file, 
            point['id'], 
            point['comment']
        )
    
    print("🎉 修复版提取完成！")

if __name__ == "__main__":
    main()