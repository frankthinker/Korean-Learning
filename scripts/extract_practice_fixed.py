#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
韩语练习题提取脚本 - 修复版本
- 从practiceDatabase.js中精确提取每个语法点
- 调整缩进为2空格，格式与beg_001.js保持一致
"""

import os
import re

# 定义所有初级语法点
BEGINNER_GRAMMARS = [
    {'id': 'beg_005', 'start': 542, 'end': 673},
    {'id': 'beg_006', 'start': 675, 'end': 771},
    {'id': 'beg_007', 'start': 773, 'end': 874},
    {'id': 'beg_008', 'start': 876, 'end': 972},
    {'id': 'beg_009', 'start': 974, 'end': 1070},
]

INTERMEDIATE_GRAMMARS = [
    {'id': 'int_001', 'start': 1075, 'end': 1180},
    {'id': 'int_002', 'start': 1181, 'end': 1286},
    {'id': 'int_003', 'start': 1287, 'end': 1392},
    {'id': 'int_004', 'start': 1393, 'end': 1498},
    {'id': 'int_005', 'start': 1499, 'end': 1604},
    {'id': 'int_006', 'start': 1605, 'end': 1710},
    {'id': 'int_007', 'start': 1711, 'end': 1816},
    {'id': 'int_008', 'start': 1817, 'end': 1922},
    {'id': 'int_009', 'start': 1923, 'end': 2054},
    {'id': 'int_010', 'start': 2055, 'end': 2183},
    {'id': 'int_011', 'start': 2184, 'end': 2309},
    {'id': 'int_012', 'start': 2310, 'end': 2435},
    {'id': 'int_013', 'start': 2436, 'end': 2437},
    {'id': 'int_014', 'start': 2438, 'end': 2439},
    {'id': 'int_015', 'start': 2440, 'end': 2441},
    {'id': 'int_016', 'start': 2442, 'end': 2443},
    {'id': 'int_017', 'start': 2444, 'end': 2445},
    {'id': 'int_018', 'start': 2446, 'end': 2437},
]

ADVANCED_GRAMMARS = [
    {'id': 'adv_001', 'start': 2440, 'end': 2541},
    {'id': 'adv_002', 'start': 2542, 'end': 2643},
    {'id': 'adv_003', 'start': 2644, 'end': 2705},
    {'id': 'adv_004', 'start': 2706, 'end': 2774},
    {'id': 'adv_005', 'start': 2775, 'end': 2843},
    {'id': 'adv_006', 'start': 2844, 'end': 2911},
    {'id': 'adv_007', 'start': 2912, 'end': 2979},
    {'id': 'adv_008', 'start': 2980, 'end': 3047},
    {'id': 'adv_009', 'start': 3048, 'end': 3115},
    {'id': 'adv_010', 'start': 3116, 'end': 3183},
    {'id': 'adv_011', 'start': 3184, 'end': 3185},
    {'id': 'adv_012', 'start': 3186, 'end': 3187},
    {'id': 'adv_013', 'start': 3188, 'end': 3189},
    {'id': 'adv_014', 'start': 3190, 'end': 3191},
    {'id': 'adv_015', 'start': 3192, 'end': 3193},
    {'id': 'adv_016', 'start': 3194, 'end': 3195},
    {'id': 'adv_017', 'start': 3196, 'end': 3197},
]


def extract_grammar_point(file_path, start_line, end_line):
    """从原始文件中提取特定行范围的内容"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 提取指定范围的行（行号是1-based的）
    extracted_lines = lines[start_line - 1:end_line]
    
    return extracted_lines


def adjust_indentation(lines):
    """调整缩进：原文4空格→2空格，移除第一行的语法点标记以及最后的空行和逗号"""
    output_lines = []
    
    for i, line in enumerate(lines):
        # 第一行包含 'beg_008: [' 的形式，需要跳过
        if i == 0:
            continue
        
        # 序数候一行是需要移除的 '],' 污染
        if i == len(lines) - 2 and line.strip() == '],':  # 序数候一行是‘],’（可能有孔洟）
            continue
        
        # 最后一行是空行，跳过
        if i == len(lines) - 1:
            continue
        
        # 调整缩进：原文 4 空格 → 2 空格
        if line.startswith('      '):  # 6空格变4空格
            output_lines.append('    ' + line[6:])
        elif line.startswith('    '):  # 4空格变2空格
            output_lines.append('  ' + line[4:])
        elif line.startswith('  '):   # 2空格保持
            output_lines.append(line)
        else:
            output_lines.append(line)
    
    return output_lines


def process_extracted_content(lines, grammar_id):
    """处理提取的内容，转换为独立文件格式"""
    # 第一行是语法点定义，需要提取注释
    first_line = lines[0]
    
    # 提取注释部分
    comment_match = re.search(r'//\s*(.*)', first_line)
    comment = comment_match.group(1).strip() if comment_match else grammar_id
    
    # 调整缩进
    adjusted_lines = adjust_indentation(lines)
    
    # 构建新文件内容
    output_lines = []
    output_lines.append(f"// {comment} 练习题\n")
    output_lines.append(f"export const practice_{grammar_id} = [\n")
    
    # 添加调整后的内容行
    for line in adjusted_lines:
        output_lines.append(line)
    
    # 添加结束符
    output_lines.append("];\n")
    
    return output_lines


def write_practice_file(grammar_id, content_lines, level):
    """将内容写入文件"""
    output_dir = f"src/data/practice/{level}"
    os.makedirs(output_dir, exist_ok=True)
    
    file_path = os.path.join(output_dir, f"{grammar_id}.js")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(content_lines)
    
    return file_path


def main():
    input_file = "src/data/practiceDatabase.js"
    
    print("🚀 开始提取练习题（修复缩进）...\n")
    
    # 处理初级语法
    print("📚 初级语法点 (beg_005-beg_009):")
    for grammar in BEGINNER_GRAMMARS:
        grammar_id = grammar['id']
        start = grammar['start']
        end = grammar['end']
        
        # 提取内容
        lines = extract_grammar_point(input_file, start, end)
        
        # 处理内容
        content_lines = process_extracted_content(lines, grammar_id)
        
        # 写入文件
        file_path = write_practice_file(grammar_id, content_lines, 'beginner')
        
        # 计算题目数量
        question_count = sum(1 for line in content_lines if "id: '" in line and "_" in line)
        print(f"  ✅ {grammar_id}: {question_count} 道题 → {file_path}")
    
    print()
    print("📚 中级语法点 (int_001-int_018):")
    for grammar in INTERMEDIATE_GRAMMARS:
        grammar_id = grammar['id']
        start = grammar['start']
        end = grammar['end']
        
        # 提取内容
        lines = extract_grammar_point(input_file, start, end)
        
        # 处理内容
        content_lines = process_extracted_content(lines, grammar_id)
        
        # 写入文件
        file_path = write_practice_file(grammar_id, content_lines, 'intermediate')
        
        # 计算题目数量
        question_count = sum(1 for line in content_lines if "id: '" in line and "_" in line)
        print(f"  ✅ {grammar_id}: {question_count} 道题 → {file_path}")
    
    print()
    print("📚 高级语法点 (adv_001-adv_017):")
    for grammar in ADVANCED_GRAMMARS:
        grammar_id = grammar['id']
        start = grammar['start']
        end = grammar['end']
        
        # 提取内容
        lines = extract_grammar_point(input_file, start, end)
        
        # 处理内容
        content_lines = process_extracted_content(lines, grammar_id)
        
        # 写入文件
        file_path = write_practice_file(grammar_id, content_lines, 'advanced')
        
        # 计算题目数量
        question_count = sum(1 for line in content_lines if "id: '" in line and "_" in line)
        print(f"  ✅ {grammar_id}: {question_count} 道题 → {file_path}")
    
    print()
    print("🎉 全部提取完成！")


if __name__ == "__main__":
    main()
