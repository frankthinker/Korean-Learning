#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自动拆分练习数据库脚本
- 解析practiceDatabase.js文件
- 为每个语法点创建独立的练习文件
- 保持原有结构和内容不变
"""

import re
import os
import json

def parse_practice_database(file_path):
    """解析练习数据库文件，提取各个语法点的练习题"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 使用正则表达式匹配语法点块
    # 匹配类似 beg_001: [ ... ] 的结构
    pattern = r'(\w+_\d+):\s*\[\s*(.*?)\s*\]'
    
    # 找到所有语法点
    matches = re.findall(pattern, content, re.DOTALL)
    
    grammar_points = {}
    for match in matches:
        grammar_id = match[0]
        exercises_content = match[1]
        
        # 解析练习题数组
        exercises = parse_exercises(exercises_content)
        grammar_points[grammar_id] = exercises
    
    return grammar_points

def parse_exercises(content):
    """解析练习题内容"""
    exercises = []
    
    # 匹配单个练习题对象
    exercise_pattern = r'\{\s*id:\s*\'([^\']+)\'[^}]*type:\s*\'([^\']+)\'[^}]*question:\s*\'([^\']+)\'[^}]*options:\s*\[(.*?)\][^}]*explanation:\s*\'([^\']+)\'[^}]*source:\s*\'([^\']+)\'[^}]*\}'
    
    exercise_matches = re.findall(exercise_pattern, content, re.DOTALL)
    
    for match in exercise_matches:
        exercise = {
            'id': match[0],
            'type': match[1],
            'question': match[2],
            'options': parse_options(match[3]),
            'explanation': match[4],
            'source': match[5]
        }
        exercises.append(exercise)
    
    return exercises

def parse_options(options_content):
    """解析选项内容"""
    options = []
    
    # 匹配选项对象
    option_pattern = r'\{\s*text:\s*\'([^\']+)\'[^}]*correct:\s*(true|false)\s*\}'
    option_matches = re.findall(option_pattern, options_content, re.DOTALL)
    
    for match in option_matches:
        option = {
            'text': match[0],
            'correct': match[1] == 'true'
        }
        options.append(option)
    
    return options

def create_practice_file(grammar_id, exercises, output_dir, level):
    """为语法点创建独立的练习文件"""
    # 创建文件内容
    file_content = f"// {grammar_id} 练习题\n"
    file_content += "export const practice_" + grammar_id + " = [\n"
    
    for exercise in exercises:
        file_content += "  {\n"
        file_content += f"    id: '{exercise['id']}',\n"
        file_content += f"    type: '{exercise['type']}',\n"
        file_content += f"    question: '{exercise['question']}',\n"
        file_content += "    options: [\n"
        
        for option in exercise['options']:
            file_content += f"      {{ text: '{option['text']}', correct: {'true' if option['correct'] else 'false'} }},\n"
        
        file_content += "    ],\n"
        file_content += f"    explanation: '{exercise['explanation']}',\n"
        file_content += f"    source: '{exercise['source']}'\n"
        file_content += "  },\n"
    
    file_content += "];\n"
    
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 写入文件
    file_path = os.path.join(output_dir, f"{grammar_id}.js")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(file_content)
    
    print(f"✅ 已创建文件: {file_path}")

def create_index_file(grammar_ids, output_dir, level):
    """创建索引文件"""
    index_content = "// 初级语法练习题索引文件\n"
    
    # 添加导入语句
    for grammar_id in grammar_ids:
        index_content += f"import {{ practice_{grammar_id} }} from './{grammar_id}.js';\n"
    
    index_content += "\n"
    index_content += "export const beginnerPracticeDatabase = {\n"
    
    # 添加导出语句
    for grammar_id in grammar_ids:
        index_content += f"  {grammar_id}: practice_{grammar_id},\n"
    
    index_content += "};\n"
    
    # 写入索引文件
    index_path = os.path.join(output_dir, "index.js")
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"✅ 已创建索引文件: {index_path}")

def main():
    print("🚀 开始拆分练习数据库...")
    
    # 输入文件路径
    input_file = "src/data/practiceDatabase.js"
    
    # 输出目录
    output_base_dir = "src/data/practice"
    
    # 解析练习数据库
    print("🔍 正在解析练习数据库...")
    grammar_points = parse_practice_database(input_file)
    
    print(f"📊 找到 {len(grammar_points)} 个语法点")
    
    # 为每个语法点创建文件
    grammar_ids = []
    for grammar_id, exercises in grammar_points.items():
        print(f"📝 处理语法点 {grammar_id} ({len(exercises)} 道题)")
        grammar_ids.append(grammar_id)
        
        # 确定级别（根据ID前缀）
        if grammar_id.startswith('beg'):
            level = 'beginner'
        elif grammar_id.startswith('int'):
            level = 'intermediate'
        elif grammar_id.startswith('adv'):
            level = 'advanced'
        else:
            level = 'beginner'  # 默认为初级
        
        # 创建输出目录
        output_dir = os.path.join(output_base_dir, level)
        
        # 创建练习文件
        create_practice_file(grammar_id, exercises, output_dir, level)
    
    # 创建索引文件
    if grammar_ids:
        output_dir = os.path.join(output_base_dir, 'beginner')
        create_index_file(grammar_ids, output_dir, 'beginner')
    
    print("🎉 拆分完成！")

if __name__ == "__main__":
    main()