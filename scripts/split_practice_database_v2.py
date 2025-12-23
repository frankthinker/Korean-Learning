#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自动拆分练习数据库脚本 (版本2)
- 使用更精确的解析方法
- 解析practiceDatabase.js文件
- 为每个语法点创建独立的练习文件
- 保持原有结构和内容不变
"""

import re
import os

def parse_practice_database(file_path):
    """解析练习数据库文件，提取各个语法点的练习题"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到所有语法点定义
    # 匹配类似 beg_001: [ // 注释 ... ] 的结构
    pattern = r'(\w+_\d+):\s*\[\s*\/\/.*?\n(.*?)\s*\]'
    
    # 使用更宽松的匹配模式
    grammar_blocks = re.findall(r'(\w+_\d+):\s*\[(.*?)\]', content, re.DOTALL)
    
    grammar_points = {}
    for grammar_id, exercises_block in grammar_blocks:
        # 提取练习题内容
        exercises = extract_exercises(exercises_block)
        grammar_points[grammar_id] = exercises
    
    return grammar_points

def extract_exercises(block_content):
    """从块内容中提取练习题"""
    exercises = []
    
    # 匹配整个练习题对象
    exercise_pattern = r'\{\s*id:\s*\'([^\']+)\'[^}]*type:\s*\'([^\']+)\'[^}]*question:\s*\'([^\']+)\'[^}]*options:\s*\[(.*?)\][^}]*explanation:\s*\'((?:[^\'\\\\]|\\\\.|\\\')*)\'[^}]*source:\s*\'([^\']+)\'[^}]*\}'
    
    exercise_matches = re.findall(exercise_pattern, block_content, re.DOTALL)
    
    for match in exercise_matches:
        exercise = {
            'id': match[0],
            'type': match[1],
            'question': match[2].replace('\\n', '\n'),
            'options': extract_options(match[3]),
            'explanation': match[4].replace('\\n', '\n').replace('\\\'', '\''),
            'source': match[5]
        }
        exercises.append(exercise)
    
    return exercises

def extract_options(options_block):
    """从选项块中提取选项"""
    options = []
    
    # 匹配选项对象
    option_pattern = r'\{\s*text:\s*\'([^\']+)\'[^}]*correct:\s*(true|false)\s*\}'
    option_matches = re.findall(option_pattern, options_block, re.DOTALL)
    
    for match in option_matches:
        option = {
            'text': match[0],
            'correct': match[1] == 'true'
        }
        options.append(option)
    
    return options

def create_practice_file(grammar_id, exercises, output_dir):
    """为语法点创建独立的练习文件"""
    # 创建文件内容
    file_content = f"// {grammar_id} 练习题\n"
    file_content += f"export const practice_{grammar_id} = [\n"
    
    for exercise in exercises:
        file_content += "  {\n"
        file_content += f"    id: '{exercise['id']}',\n"
        file_content += f"    type: '{exercise['type']}',\n"
        file_content += f"    question: '{exercise['question']}',\n"
        file_content += "    options: [\n"
        
        for option in exercise['options']:
            file_content += f"      {{ text: '{option['text']}', correct: {'true' if option['correct'] else 'false'} }},\n"
        
        file_content += "    ],\n"
        # 转义解释中的单引号
        escaped_explanation = exercise['explanation'].replace("'", "\\'")
        file_content += f"    explanation: '{escaped_explanation}',\n"
        file_content += f"    source: '{exercise['source']}'\n"
        file_content += "  },\n"
    
    file_content += "];\n"
    
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 写入文件
    file_path = os.path.join(output_dir, f"{grammar_id}.js")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(file_content)
    
    print(f"✅ 已创建文件: {file_path} (包含 {len(exercises)} 道题)")

def create_level_index_file(grammar_ids, output_dir, level):
    """创建级别的索引文件"""
    index_content = f"// {level}语法练习题索引文件\n"
    
    # 添加导入语句
    for grammar_id in grammar_ids:
        index_content += f"import {{ practice_{grammar_id} }} from './{grammar_id}.js';\n"
    
    index_content += "\n"
    index_content += f"export const {level}PracticeDatabase = {{\n"
    
    # 添加导出语句
    for grammar_id in grammar_ids:
        index_content += f"  {grammar_id}: practice_{grammar_id},\n"
    
    index_content += "};\n"
    
    # 写入索引文件
    index_path = os.path.join(output_dir, "index.js")
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"✅ 已创建索引文件: {index_path}")

def create_main_index_file(levels):
    """创建主索引文件"""
    index_content = "// 所有级别语法练习题主索引文件\n"
    
    # 添加导入语句
    for level in levels:
        index_content += f"import {{ {level}PracticeDatabase }} from './{level}/index.js';\n"
    
    index_content += "\n"
    index_content += "export const practiceDatabase = {\n"
    
    # 添加导出语句
    for level in levels:
        index_content += f"  {level}: {level}PracticeDatabase,\n"
    
    index_content += "};\n"
    
    # 写入主索引文件
    index_path = "src/data/practice/index.js"
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"✅ 已创建主索引文件: {index_path}")

def main():
    print("🚀 开始拆分练习数据库 (版本2)...")
    
    # 输入文件路径
    input_file = "src/data/practiceDatabase.js"
    
    # 输出目录
    output_base_dir = "src/data/practice"
    
    # 解析练习数据库
    print("🔍 正在解析练习数据库...")
    grammar_points = parse_practice_database(input_file)
    
    print(f"📊 找到 {len(grammar_points)} 个语法点")
    
    # 按级别分组
    level_groups = {'beginner': [], 'intermediate': [], 'advanced': []}
    
    # 为每个语法点创建文件
    for grammar_id, exercises in grammar_points.items():
        print(f"📝 处理语法点 {grammar_id} ({len(exercises)} 道题)")
        
        # 确定级别（根据ID前缀）
        if grammar_id.startswith('beg'):
            level = 'beginner'
        elif grammar_id.startswith('int'):
            level = 'intermediate'
        elif grammar_id.startswith('adv'):
            level = 'advanced'
        else:
            level = 'beginner'  # 默认为初级
        
        # 添加到级别组
        level_groups[level].append(grammar_id)
        
        # 创建输出目录
        output_dir = os.path.join(output_base_dir, level)
        
        # 创建练习文件
        create_practice_file(grammar_id, exercises, output_dir)
    
    # 为每个级别创建索引文件
    levels = []
    for level, grammar_ids in level_groups.items():
        if grammar_ids:
            levels.append(level)
            output_dir = os.path.join(output_base_dir, level)
            create_level_index_file(grammar_ids, output_dir, level)
    
    # 创建主索引文件
    if levels:
        create_main_index_file(levels)
    
    print("🎉 拆分完成！")

if __name__ == "__main__":
    main()