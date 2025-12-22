#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成练习题索引文件脚本
- 自动生成各级别的索引文件
- 更新主索引文件
"""

import os
import glob

def generate_level_index(level, grammar_ids):
    """生成级别索引文件"""
    index_content = f"// {get_level_name(level)}语法练习题索引文件\n"
    
    # 添加导入语句
    for grammar_id in sorted(grammar_ids):
        index_content += f"import {{ practice_{grammar_id} }} from './{grammar_id}.js';\n"
    
    index_content += f"\nexport const {get_level_prefix(level)}PracticeDatabase = {{\n"
    
    # 添加导出语句
    for grammar_id in sorted(grammar_ids):
        index_content += f"  {grammar_id}: practice_{grammar_id},\n"
    
    index_content += "};\n"
    
    return index_content


def get_level_name(level):
    """获取级别名称"""
    level_map = {
        'beginner': '初级',
        'intermediate': '中级',
        'advanced': '高级'
    }
    return level_map.get(level, level)


def get_level_prefix(level):
    """获取级别前缀"""
    level_map = {
        'beginner': 'beginner',
        'intermediate': 'intermediate',
        'advanced': 'advanced'
    }
    return level_map.get(level, level)


def get_grammar_ids_from_files(level):
    """从目录中扫描所有语法点文件"""
    pattern = f"src/data/practice/{level}/*.js"
    files = glob.glob(pattern)
    
    grammar_ids = []
    for file in files:
        # 提取文件名（去掉.js）
        filename = os.path.basename(file)
        if filename != 'index.js':
            grammar_id = filename.replace('.js', '')
            grammar_ids.append(grammar_id)
    
    return sorted(grammar_ids)


def main():
    print("🚀 开始生成索引文件...\n")
    
    levels = ['beginner', 'intermediate', 'advanced']
    all_grammars = {}
    
    # 为每个级别生成索引
    for level in levels:
        print(f"📚 处理{get_level_name(level)}语法...")
        
        grammar_ids = get_grammar_ids_from_files(level)
        all_grammars[level] = grammar_ids
        
        # 生成索引文件内容
        index_content = generate_level_index(level, grammar_ids)
        
        # 写入索引文件
        output_path = f"src/data/practice/{level}/index.js"
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(index_content)
        
        print(f"  ✅ 已生成 {output_path}")
        print(f"  📊 共 {len(grammar_ids)} 个语法点")
        print()
    
    # 生成主索引文件
    print("📚 生成主索引文件...")
    main_index = "// 所有级别语法练习题主索引文件\n"
    
    # 添加导入语句
    for level in levels:
        prefix = get_level_prefix(level)
        main_index += f"import {{ {prefix}PracticeDatabase }} from './{level}/index.js';\n"
    
    main_index += "\nexport const practiceDatabase = {\n"
    
    # 添加导出语句
    for level in levels:
        prefix = get_level_prefix(level)
        main_index += f"  {prefix}: {prefix}PracticeDatabase,\n"
    
    main_index += "};\n"
    
    # 写入主索引文件
    main_index_path = "src/data/practice/index.js"
    with open(main_index_path, 'w', encoding='utf-8') as f:
        f.write(main_index)
    
    print(f"  ✅ 已生成 {main_index_path}")
    print()
    
    # 统计信息
    total_grammars = sum(len(ids) for ids in all_grammars.values())
    print(f"🎉 索引生成完成！")
    print(f"   初级: {len(all_grammars['beginner'])} 个语法点")
    print(f"   中级: {len(all_grammars['intermediate'])} 个语法点")
    print(f"   高级: {len(all_grammars['advanced'])} 个语法点")
    print(f"   总计: {total_grammars} 个语法点")


if __name__ == "__main__":
    main()
