// 调试脚本 - 检查本地存储的错题数据
console.log("=== 错题数据调试 ===");

try {
  const wrongAnswers = JSON.parse(localStorage.getItem('korean_grammar_wrong_answers') || '[]');
  console.log("错题总数:", wrongAnswers.length);
  console.log("错题数据:", wrongAnswers);
  
  if (wrongAnswers.length > 0) {
    console.log("\n详细错题信息:");
    wrongAnswers.forEach((item, index) => {
      console.log(`\n错题 ${index + 1}:`);
      console.log("  问题ID:", item.questionId);
      console.log("  用户答案:", item.userAnswer);
      console.log("  正确答案:", item.correctAnswer);
      console.log("  解析:", item.explanation);
      console.log("  尝试次数:", item.attempts);
    });
  }
} catch (error) {
  console.error("读取错题数据出错:", error);
}

console.log("\n=== 收藏数据调试 ===");
try {
  const favorites = JSON.parse(localStorage.getItem('korean_grammar_favorites') || '[]');
  console.log("收藏总数:", favorites.length);
} catch (error) {
  console.error("读取收藏数据出错:", error);
}

console.log("\n=== 学习进度调试 ===");
try {
  const progress = JSON.parse(localStorage.getItem('korean_grammar_progress') || '{}');
  console.log("学习进度:", progress);
} catch (error) {
  console.error("读取学习进度出错:", error);
}