#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更好的练习数据提取脚本
- 精确提取完整的语法点内容
- 保持原有格式和内容不变
"""

import re
import os

def extract_complete_grammar_point(file_path, target_grammar_id):
    """提取完整的语法点内容"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到beginner部分
    beginner_start = content.find('beginner: {')
    if beginner_start == -1:
        return None
    
    # 找到下一个部分或文件结尾
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
    
    # 找到目标语法点的开始位置
    grammar_start_pattern = f'{target_grammar_id}: \\['
    grammar_start = beginner_content.find(grammar_start_pattern)
    if grammar_start == -1:
        return None
    
    # 从语法点开始位置向后查找，直到找到结束括号
    # 需要正确处理嵌套的括号
    start_pos = grammar_start + len(grammar_start_pattern)
    
    # 找到匹配的右括号
    bracket_count = 1  # 已经有一个左括号
    pos = start_pos
    
    while bracket_count > 0 and pos < len(beginner_content):
        if beginner_content[pos] == '[':
            bracket_count += 1
        elif beginner_content[pos] == ']':
            bracket_count -= 1
        pos += 1
    
    if bracket_count != 0:
        return None  # 括号不匹配
    
    # 提取完整内容
    grammar_content = beginner_content[grammar_start:pos]
    return grammar_content

def convert_to_export_format(grammar_id, original_content):
    """转换为导出格式"""
    # 提取注释
    comment_match = re.search(r'\/\/(.*)', original_content)
    comment = comment_match.group(1).strip() if comment_match else grammar_id
    
    # 替换语法点定义为导出格式
    # 匹配类似 "beg_001: [ // 注释" 的模式
    pattern = rf'{grammar_id}: \['
    export_content = re.sub(pattern, f"// {comment} 练习题\nexport const practice_{grammar_id} = [", original_content, 1)
    
    return export_content

def create_practice_file(grammar_id, content, output_dir):
    """创建练习文件"""
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 写入文件
    file_path = os.path.join(output_dir, f"{grammar_id}.js")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # 检查文件大小
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = len(f.readlines())
    
    print(f"✅ 已创建文件: {file_path} ({lines} 行)")

def create_index_file(grammar_ids, output_dir):
    """创建索引文件"""
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
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
    print("🚀 开始更好的练习数据提取...")
    
    # 输入文件路径
    input_file = "src/data/practiceDatabase.js"
    
    # 输出目录
    output_dir = "src/data/practice/beginner"
    
    # 定义所有初级语法点
    grammar_ids = [
        'beg_001', 'beg_002', 'beg_003', 'beg_004', 
        'beg_005', 'beg_006', 'beg_007', 'beg_008', 'beg_009'
    ]
    
    print(f"📊 处理 {len(grammar_ids)} 个语法点")
    
    # 为每个语法点创建文件
    created_files = []
    for grammar_id in grammar_ids:
        print(f"📝 提取语法点 {grammar_id}...")
        content = extract_complete_grammar_point(input_file, grammar_id)
        
        if content:
            # 转换为导出格式
            export_content = convert_to_export_format(grammar_id, content)
            
            # 创建文件
            create_practice_file(grammar_id, export_content, output_dir)
            created_files.append(grammar_id)
        else:
            print(f"❌ 未找到语法点 {grammar_id}")
    
    # 创建索引文件
    if created_files:
        create_index_file(created_files, output_dir)
    
    print(f"🎉 更好的提取完成！成功创建 {len(created_files)} 个文件")

if __name__ == "__main__":
    main()