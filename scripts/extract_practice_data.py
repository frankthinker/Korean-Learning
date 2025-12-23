#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
精确提取练习数据脚本
- 精确解析practiceDatabase.js文件
- 为每个语法点创建独立的练习文件
- 保持原有结构和内容不变
"""

import re
import os

def extract_grammar_sections(file_path):
    """提取所有语法点块"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到beginner部分
    beginner_match = re.search(r'beginner:\s*{(.*?)(?=intermediate:|advanced:|\n\s*})', content, re.DOTALL)
    if not beginner_match:
        print("❌ 未找到初级语法部分")
        return {}
    
    beginner_content = beginner_match.group(1)
    
    # 找到所有语法点定义 (beg_001, beg_002, 等)
    grammar_pattern = r'(\w+_\d+):\s*\[\s*\/\/.*?\n(.*?)(?=\w+_\d+:|\n\s*\])'
    grammar_matches = re.findall(grammar_pattern, beginner_content, re.DOTALL)
    
    grammar_sections = {}
    for grammar_id, exercises_content in grammar_matches:
        # 清理练习内容
        exercises_content = exercises_content.strip()
        if exercises_content.endswith(','):
            exercises_content = exercises_content[:-1].strip()
        
        grammar_sections[grammar_id] = exercises_content
    
    return grammar_sections

def create_exercise_objects(exercises_content):
    """从练习内容创建练习对象列表"""
    # 使用更精确的匹配模式
    exercise_pattern = r'\{\s*id:\s*\'([^\']+)\'[^}]*type:\s*\'([^\']+)\'[^}]*question:\s*\'([^\']+)\'[^}]*options:\s*\[(.*?)\][^}]*explanation:\s*\'([^\']+)\'[^}]*source:\s*\'([^\']+)\'[^}]*\}'
    
    exercises = []
    exercise_matches = re.findall(exercise_pattern, exercises_content, re.DOTALL)
    
    for match in exercise_matches:
        options_content = match[3]
        # 解析选项
        options = []
        option_pattern = r'\{\s*text:\s*\'([^\']+)\'[^}]*correct:\s*(true|false)\s*\}'
        option_matches = re.findall(option_pattern, options_content, re.DOTALL)
        
        for opt_text, opt_correct in option_matches:
            options.append({
                'text': opt_text,
                'correct': opt_correct == 'true'
            })
        
        exercise = {
            'id': match[0],
            'type': match[1],
            'question': match[2],
            'options': options,
            'explanation': match[4],
            'source': match[5]
        }
        exercises.append(exercise)
    
    return exercises

def create_practice_file(grammar_id, exercises_content, output_dir):
    """为语法点创建练习文件"""
    # 创建文件头部注释
    comment_match = re.search(r'\/\/\s*(.*)', exercises_content)
    comment = comment_match.group(1) if comment_match else grammar_id
    
    # 解析练习对象
    exercises = create_exercise_objects(exercises_content)
    
    # 创建文件内容
    file_content = f"// {comment} 练习题\n"
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
        escaped_explanation = exercise['explanation'].replace("\\", "\\\\").replace("'", "\\'")
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

def create_index_file(grammar_ids, output_dir):
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
    print("🚀 开始精确提取练习数据...")
    
    # 输入文件路径
    input_file = "src/data/practiceDatabase.js"
    
    # 输出目录
    output_dir = "src/data/practice/beginner"
    
    # 提取语法点块
    print("🔍 正在提取语法点块...")
    grammar_sections = extract_grammar_sections(input_file)
    
    print(f"📊 找到 {len(grammar_sections)} 个语法点")
    
    # 为每个语法点创建文件
    grammar_ids = []
    for grammar_id, exercises_content in grammar_sections.items():
        print(f"📝 处理语法点 {grammar_id}")
        grammar_ids.append(grammar_id)
        
        # 创建练习文件
        create_practice_file(grammar_id, exercises_content, output_dir)
    
    # 创建索引文件
    if grammar_ids:
        create_index_file(grammar_ids, output_dir)
    
    print("🎉 精确提取完成！")

if __name__ == "__main__":
    main()