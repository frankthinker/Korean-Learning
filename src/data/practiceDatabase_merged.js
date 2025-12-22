/**
 * 合并后的练习题库
 * 包含原始题目 + 所有补充题目
 */

import { practiceDatabase } from './practiceDatabase'
import { intermediateSupplementIntro } from './intermediate_supplement_intro'
import { intermediateSupplementPart1 } from './intermediate_supplement_1'
import { intermediateSupplementPart2 } from './intermediate_supplement_2'
import { intermediateSupplementPart3 } from './intermediate_supplement_3'
import { advancedSupplementPart1 } from './advanced_supplement_1'
import { advancedSupplementPart2 } from './advanced_supplement_2'

// 创建新的合并数据库
export const practiceDatabaseMerged = {
  beginner: practiceDatabase.beginner,
  intermediate: {
    // 使用补充题目替换原有题目
    int_001: intermediateSupplementIntro.int_001,
    int_002: intermediateSupplementIntro.int_002,
    int_003: intermediateSupplementIntro.int_003,
    int_010: intermediateSupplementPart1.int_010,
    int_011: intermediateSupplementPart1.int_011,
    int_012: intermediateSupplementPart1.int_012,
    int_013: intermediateSupplementPart2.int_013,
    int_014: intermediateSupplementPart2.int_014,
    int_015: intermediateSupplementPart2.int_015,
    int_016: intermediateSupplementPart3.int_016,
    int_017: intermediateSupplementPart3.int_017,
    int_018: intermediateSupplementPart3.int_018
  },
  advanced: {
    // 使用补充题目替换原有题目
    adv_010: advancedSupplementPart1.adv_010,
    adv_011: advancedSupplementPart1.adv_011,
    adv_012: advancedSupplementPart1.adv_012,
    adv_013: advancedSupplementPart1.adv_013,
    adv_014: advancedSupplementPart2.adv_014,
    adv_015: advancedSupplementPart2.adv_015,
    adv_016: advancedSupplementPart2.adv_016,
    adv_017: advancedSupplementPart2.adv_017
  }
}

export default practiceDatabaseMerged
