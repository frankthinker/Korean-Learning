#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简单直接的练习数据提取脚本
- 直接字符串处理
- 精确提取每个语法点的练习题
"""

import re
import os

def simple_extract_grammar_points(file_path):
    """简单提取语法点"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到beginner部分
    beginner_start = content.find('beginner: {')
    if beginner_start == -1:
        print("❌ 未找到初级语法部分")
        return {}
    
    # 找到下一个级别部分或文件结尾
    intermediate_start = content.find('intermediate:', beginner_start)
    advanced_start = content.find('advanced:', beginner_start)
    
    # 确定结束位置
    end_pos = len(content)
    if intermediate_start != -1:
        end_pos = min(end_pos, intermediate_start)
    if advanced_start != -1:
        end_pos = min(end_pos, advanced_start)
    
    # 提取初级部分
    beginner_content = content[beginner_start:end_pos]
    
    # 找到所有语法点
    grammar_points = {}
    
    # 使用更简单的模式匹配
    pattern = r'(\w+_\d+):\s*\[\s*\/\/([^\]]+?)\](?=\s*\w+_\d+:|\s*\}\s*,)'
    matches = re.findall(r'(\w+_\d+):\s*\[\s*(\/\/.*?)\](?=\s*\w+_\d+:|\s*\}\s*,)', beginner_content, re.DOTALL)
    
    for grammar_id, comment_and_content in matches:
        # 分离注释和内容
        full_section = '[' + comment_and_content + ']'
        grammar_points[grammar_id] = full_section
    
    return grammar_points

def extract_with_manual_parsing(file_path):
    """手动解析方法"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 找到beginner部分的开始和结束
    start_line = -1
    end_line = -1
    
    for i, line in enumerate(lines):
        if 'beginner: {' in line:
            start_line = i
            break
    
    if start_line == -1:
        print("❌ 未找到初级语法部分")
        return {}
    
    # 找到结束位置
    brace_count = 0
    for i in range(start_line, len(lines)):
        line_content = lines[i]
        brace_count += line_content.count('{')
        brace_count -= line_content.count('}')
        
        if 'intermediate:' in line_content or 'advanced:' in line_content:
            end_line = i
            break
            
        if brace_count == 0 and i > start_line:
            end_line = i + 1
            break
    
    if end_line == -1:
        end_line = len(lines)
    
    # 提取相关行
    relevant_lines = lines[start_line:end_line]
    
    # 重新组合内容
    content = ''.join(relevant_lines)
    
    # 手动查找语法点
    grammar_points = {}
    current_grammar_id = None
    current_content = []
    collecting = False
    bracket_count = 0
    
    for line in relevant_lines:
        # 查找语法点定义
        grammar_match = re.match(r'\s*(\w+_\d+):\s*\[', line)
        if grammar_match and not collecting:
            if current_grammar_id:
                # 保存之前的语法点
                grammar_points[current_grammar_id] = ''.join(current_content)
            
            current_grammar_id = grammar_match.group(1)
            current_content = [line]
            collecting = True
            bracket_count = 1
            continue
        
        if collecting:
            current_content.append(line)
            bracket_count += line.count('[')
            bracket_count += line.count('{')
            bracket_count -= line.count(']')
            bracket_count -= line.count('}')
            
            if bracket_count == 0:
                # 完成当前语法点收集
                grammar_points[current_grammar_id] = ''.join(current_content)
                current_grammar_id = None
                current_content = []
                collecting = False
    
    # 保存最后一个语法点
    if current_grammar_id:
        grammar_points[current_grammar_id] = ''.join(current_content)
    
    return grammar_points

def clean_grammar_content(content):
    """清理语法点内容"""
    # 移除语法点名称部分
    lines = content.split('\n')
    cleaned_lines = []
    
    for line in lines:
        if re.match(r'\s*\w+_\d+:\s*\[', line):
            # 保留语法点定义行，但移除注释部分以便重新构造
            cleaned_lines.append(re.sub(r'\s*\/\/.*$', '', line))
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def main():
    print("🚀 开始手动解析提取练习数据...")
    
    # 输入文件路径
    input_file = "src/data/practiceDatabase.js"
    
    # 提取语法点
    print("🔍 正在手动解析语法点...")
    grammar_points = extract_with_manual_parsing(input_file)
    
    print(f"📊 找到 {len(grammar_points)} 个语法点")
    
    # 显示找到的语法点
    for grammar_id, content in grammar_points.items():
        print(f"  - {grammar_id}")
    
    print("📝 注意：手动解析方法仍在开发中...")

if __name__ == "__main__":
    main()