// 本地存储管理 - 处理收藏、错题、学习进度等

const STORAGE_KEYS = {
  FAVORITES: 'korean_grammar_favorites',
  WRONG_ANSWERS: 'korean_grammar_wrong_answers',
  LEARNING_PROGRESS: 'korean_grammar_progress',
  USER_DATA: 'korean_grammar_user',
  DARK_MODE: 'korean_grammar_dark_mode'
};

export class StorageManager {
  // 收藏管理
  static getFavorites() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || '[]');
    } catch {
      return [];
    }
  }

  static addFavorite(grammarId, level) {
    const favorites = this.getFavorites();
    if (!favorites.find(f => f.id === grammarId && f.level === level)) {
      favorites.push({ id: grammarId, level, addedAt: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    }
  }

  static removeFavorite(grammarId, level) {
    const favorites = this.getFavorites();
    const filtered = favorites.filter(f => !(f.id === grammarId && f.level === level));
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(filtered));
  }

  static isFavorite(grammarId, level) {
    return this.getFavorites().some(f => f.id === grammarId && f.level === level);
  }

  // 错题管理
  static getWrongAnswers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS) || '[]');
    } catch {
      return [];
    }
  }

  static addWrongAnswer(questionId, grammarId, level, userAnswer, correctAnswer, explanation) {
    const wrongAnswers = this.getWrongAnswers();
    const existing = wrongAnswers.find(w => w.questionId === questionId && w.level === level);
    
    if (existing) {
      existing.attempts += 1;
      existing.lastAttempt = new Date().toISOString();
    } else {
      wrongAnswers.push({
        questionId,
        grammarId,
        level,
        userAnswer,
        correctAnswer,
        explanation,
        attempts: 1,
        addedAt: new Date().toISOString(),
        lastAttempt: new Date().toISOString()
      });
    }
    localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(wrongAnswers));
  }

  static removeWrongAnswer(questionId) {
    const wrongAnswers = this.getWrongAnswers();
    const filtered = wrongAnswers.filter(w => w.questionId !== questionId);
    localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(filtered));
  }

  static getWrongAnswersByLevel(level) {
    return this.getWrongAnswers().filter(w => w.level === level);
  }

  // 清空所有错题
  static clearWrongAnswers() {
    localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify([]));
  }

  // 清空指定级别的错题
  static clearWrongAnswersByLevel(level) {
    const wrongAnswers = this.getWrongAnswers();
    const filtered = wrongAnswers.filter(w => w.level !== level);
    localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(filtered));
  }

  // 学习进度管理
  static getLearningProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.LEARNING_PROGRESS) || '{}');
    } catch {
      return {};
    }
  }

  static markGrammarAsLearned(grammarId, level) {
    const progress = this.getLearningProgress();
    if (!progress[level]) {
      progress[level] = [];
    }
    if (!progress[level].includes(grammarId)) {
      progress[level].push(grammarId);
    }
    localStorage.setItem(STORAGE_KEYS.LEARNING_PROGRESS, JSON.stringify(progress));
  }

  static getLearnedCount(level) {
    const progress = this.getLearningProgress();
    return progress[level]?.length || 0;
  }

  static isGrammarLearned(grammarId, level) {
    const progress = this.getLearningProgress();
    return progress[level]?.includes(grammarId) || false;
  }

  // 用户数据
  static getUserData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DATA) || '{}');
    } catch {
      return {};
    }
  }

  static saveUserData(userData) {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  }

  static setCurrentLevel(level) {
    const userData = this.getUserData();
    userData.currentLevel = level;
    this.saveUserData(userData);
  }

  static getCurrentLevel() {
    return this.getUserData().currentLevel || 'beginner';
  }

  // 深色模式
  static isDarkMode() {
    return localStorage.getItem(STORAGE_KEYS.DARK_MODE) === 'true';
  }

  static setDarkMode(isDark) {
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, isDark ? 'true' : 'false');
  }

  // 清除所有数据
  static clearAllData() {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
}

export default StorageManager;
