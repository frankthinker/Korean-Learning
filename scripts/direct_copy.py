#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
直接复制练习数据脚本
- 直接从原始文件中提取指定行范围的内容
- 确保内容完整性
"""

import os

def copy_grammar_section(file_path, start_line, end_line, output_file, grammar_id, comment):
    """直接复制语法点内容"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 提取指定行范围的内容
    section_lines = lines[start_line-1:end_line]  # 转换为0基索引
    
    # 创建输出内容
    output_lines = []
    output_lines.append(f"// {comment} 练习题\n")
    output_lines.append(f"export const practice_{grammar_id} = [\n")
    
    # 跳过原始的第一行（包含语法点定义和注释）
    for line in section_lines[1:]:
        output_lines.append(line)
    
    # 确保最后一行是正确的结束符
    if output_lines[-1].strip() != "];":
        output_lines.append("];\n")
    
    # 写入文件
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(output_lines)
    
    print(f"✅ 已创建文件: {output_file} ({len(output_lines)} 行)")

def main():
    print("🚀 开始直接复制练习数据...")
    
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
            'start': 196,
            'end': 247,
            'comment': '-를/을 (목적격 조사)'
        },
        {
            'id': 'beg_004',
            'start': 249,
            'end': 301,
            'comment': '-이/가 (주어 표시)'
        }
    ]
    
    print(f"📊 处理 {len(grammar_points)} 个语法点")
    
    # 为每个语法点创建文件
    for point in grammar_points:
        output_file = f"src/data/practice/beginner/{point['id']}.js"
        print(f"📝 复制语法点 {point['id']}...")
        copy_grammar_section(
            input_file, 
            point['start'], 
            point['end'], 
            output_file, 
            point['id'], 
            point['comment']
        )
    
    print("🎉 直接复制完成！")

if __name__ == "__main__":
    main()