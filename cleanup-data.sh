#!/bin/bash

# Data文件夹清理脚本
# 用途: 删除archive文件夹中的已归档文件
# 使用前请确保项目运行正常且无需回滚

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DATA_DIR="$SCRIPT_DIR/src/data"

echo "================================================"
echo "韩语语法学习项目 - Data文件夹清理脚本"
echo "================================================"
echo ""

# 检查archive文件夹
if [ ! -d "$DATA_DIR/archive" ]; then
    echo "❌ archive文件夹不存在"
    exit 1
fi

# 显示即将删除的文件
echo "📋 以下文件将被删除:"
echo ""
ls -lh "$DATA_DIR/archive" | tail -n +2 | awk '{print "  - " $9 " (" $5 ")"}'
echo ""

# 计算文件大小
TOTAL_SIZE=$(du -sh "$DATA_DIR/archive" | cut -f1)
echo "📊 总大小: $TOTAL_SIZE"
echo ""

# 确认删除
read -p "⚠️  确定要删除这些文件吗? (输入 'yes' 确认): " CONFIRM

if [ "$CONFIRM" = "yes" ]; then
    echo ""
    echo "🗑️  正在删除archive文件夹..."
    rm -rf "$DATA_DIR/archive"
    echo "✅ 删除成功!"
    echo ""
    echo "当前data文件夹内容:"
    ls -lh "$DATA_DIR"/*.js 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
    echo ""
    echo "✨ 清理完成!"
else
    echo ""
    echo "❌ 取消删除操作"
fi

echo ""
echo "================================================"

