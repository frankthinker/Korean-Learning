#!/usr/bin/env python3
"""
最终提取脚本 - 从 practiceDatabase.js 生成所有中级和高级练习题文件
"""

import os
import re

def extract_grammar_sections(file_path):
    """提取 practiceDatabase.js 中的 intermediate 和 advanced 部分"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取 intermediate 部分
    inter_match = re.search(r'intermediate:\s*\{(.*?)\n\s*\},\s*\n\s*advanced:', content, re.DOTALL)
    inter_content = inter_match.group(1) if inter_match else ""
    
    # 提取 advanced 部分
    adv_match = re.search(r'advanced:\s*\{(.*?)\n\s*\};\s*$', content, re.DOTALL)
    adv_content = adv_match.group(1) if adv_match else ""
    
    return inter_content, adv_content

def extract_grammars(section_content, level_prefix):
    """从section提取所有语法点"""
    grammars = {}
    pattern = rf'({level_prefix}_\d{{3}}):\s*\[(.*?)\n\s*\],?'
    
    for match in re.finditer(pattern, section_content, re.DOTALL):
        grammar_id = match.group(1)
        content = match.group(2)
        grammars[grammar_id] = content
    
    return grammars

def create_practice_files(grammars, output_dir, level_prefix):
    """为每个语法点创建独立的 JS 文件"""
    os.makedirs(output_dir, exist_ok=True)
    
    for grammar_id in sorted(grammars.keys()):
        content = grammars[grammar_id]
        
        # 提取第一行注释
        first_line_match = re.search(r'//\s*(.+?)$', content, re.MULTILINE)
        comment = first_line_match.group(1).strip() if first_line_match else grammar_id
        
        # 构建文件内容
        file_content = f"// {comment} 练习题\nexport const practice_{grammar_id} = [\n{content}\n];\n"
        
        # 写入文件
        file_path = os.path.join(output_dir, f'{grammar_id}.js')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(file_content)
        
        # 统计题目数
        q_count = len(re.findall(r"id:\s*'", content))
        print(f"  ✅ {grammar_id}: {q_count} 题 → {file_path}")

def create_index_file(grammars, output_dir, level_prefix, export_name):
    """创建索引文件"""
    imports = []
    exports = []
    
    for grammar_id in sorted(grammars.keys()):
        imports.append(f"import {{ practice_{grammar_id} }} from './{grammar_id}.js';")
        exports.append(f"  {grammar_id}: practice_{grammar_id},")
    
    content = "// 语法练习题索引文件\n"
    content += "\n".join(imports)
    content += f"\n\nexport const {export_name} = {{\n"
    content += "\n".join(exports)
    content += "\n};\n"
    
    index_path = os.path.join(output_dir, 'index.js')
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✅ 索引文件 → {index_path}")

def main():
    db_file = '/Users/shunhu/Documents/Codes/korean-grammar-learning/src/data/practiceDatabase.js'
    base_dir = '/Users/shunhu/Documents/Codes/korean-grammar-learning/src/data/practice'
    
    print("🚀 开始提取练习题...\n")
    
    # 提取部分
    inter_content, adv_content = extract_grammar_sections(db_file)
    
    # 提取语法点
    print("📚 处理中级语法点...")
    inter_grammars = extract_grammars(inter_content, 'int')
    print(f"  找到 {len(inter_grammars)} 个中级语法点")
    inter_dir = os.path.join(base_dir, 'intermediate')
    create_practice_files(inter_grammars, inter_dir, 'int')
    create_index_file(inter_grammars, inter_dir, 'int', 'intermediatePracticeDatabase')
    
    print("\n📚 处理高级语法点...")
    adv_grammars = extract_grammars(adv_content, 'adv')
    print(f"  找到 {len(adv_grammars)} 个高级语法点")
    adv_dir = os.path.join(base_dir, 'advanced')
    create_practice_files(adv_grammars, adv_dir, 'adv')
    create_index_file(adv_grammars, adv_dir, 'adv', 'advancedPracticeDatabase')
    
    print("\n✨ 全部完成！")
    print(f"\n统计:")
    print(f"  中级: {len(inter_grammars)} 个语法点")
    print(f"  高级: {len(adv_grammars)} 个语法点")

if __name__ == '__main__':
    main()
