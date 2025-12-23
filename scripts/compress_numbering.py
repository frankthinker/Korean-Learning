#!/usr/bin/env python3
"""
压缩中级语法点编号 int_010-018 → int_004-012
保持 int_001-003 不变
"""

import os
import re
import shutil

def compress_intermediate_numbering():
    """重新编号中级语法点"""
    
    intermediate_dir = '/Users/shunhu/Documents/Codes/korean-grammar-learning/src/data/practice/intermediate'
    
    # 映射关系：老编号 → 新编号
    mapping = {
        'int_010': 'int_004',
        'int_011': 'int_005',
        'int_012': 'int_006',
        'int_013': 'int_007',
        'int_014': 'int_008',
        'int_015': 'int_009',
        'int_016': 'int_010',
        'int_017': 'int_011',
        'int_018': 'int_012',
    }
    
    print("📋 中级语法点重新编号计划:")
    print("=" * 50)
    for old_id, new_id in mapping.items():
        print(f"  {old_id} → {new_id}")
    print("=" * 50)
    
    # 第一步：重命名文件
    print("\n📁 Step 1: 重命名文件...")
    for old_id, new_id in mapping.items():
        old_file = os.path.join(intermediate_dir, f'{old_id}.js')
        new_file = os.path.join(intermediate_dir, f'{new_id}.js')
        
        if os.path.exists(old_file):
            # 先读取文件内容
            with open(old_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 更新内容中的编号
            content = content.replace(f'practice_{old_id}', f'practice_{new_id}')
            # 更新题目ID (int_010_001 → int_004_001 等)
            content = re.sub(
                rf"'({old_id})_(\d+)'",
                f"'{new_id}_\\2'",
                content
            )
            # 更新题目ID中的 id: 形式
            content = re.sub(
                rf"id:\s*['\"]({old_id})_(\d+)['\"]",
                f"id: '{new_id}_\\2'",
                content
            )
            
            # 写入新文件
            with open(new_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # 删除旧文件
            os.remove(old_file)
            print(f"  ✅ {old_id}.js → {new_id}.js")
        else:
            print(f"  ❌ 文件不存在: {old_id}.js")
    
    # 第二步：更新 index.js
    print("\n📄 Step 2: 更新 index.js...")
    index_file = os.path.join(intermediate_dir, 'index.js')
    
    with open(index_file, 'r', encoding='utf-8') as f:
        index_content = f.read()
    
    # 更新导入语句
    for old_id, new_id in mapping.items():
        index_content = index_content.replace(
            f"from './{old_id}.js'",
            f"from './{new_id}.js'"
        )
        index_content = index_content.replace(
            f"import {{ practice_{old_id} }}",
            f"import {{ practice_{new_id} }}"
        )
        index_content = index_content.replace(
            f"  {old_id}: practice_{old_id},",
            f"  {new_id}: practice_{new_id},"
        )
    
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"  ✅ 更新 index.js")
    
    # 第三步：检查需要更新的其他文件
    print("\n🔍 Step 3: 检查其他引用...")
    
    # 检查 BrowseView.jsx 中是否有硬编码的 int_010 等
    possible_files = [
        '/Users/shunhu/Documents/Codes/korean-grammar-learning/src/views/BrowseView.jsx',
        '/Users/shunhu/Documents/Codes/korean-grammar-learning/src/components/Sidebar.jsx',
        '/Users/shunhu/Documents/Codes/korean-grammar-learning/src/data/practice/index.js',
    ]
    
    for file_path in possible_files:
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            for old_id, new_id in mapping.items():
                # 只替换有意义的引用（避免替换注释或字符串中的巧合匹配）
                content = re.sub(
                    rf"\b{old_id}\b",
                    new_id,
                    content
                )
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  ✅ 更新 {os.path.basename(file_path)}")
            else:
                print(f"  ℹ️  {os.path.basename(file_path)} - 无需更改")
    
    print("\n✨ 重新编号完成！")
    print("\n📊 新编号结果:")
    print("  中级: int_001 - int_012（共12个）")

if __name__ == '__main__':
    compress_intermediate_numbering()
