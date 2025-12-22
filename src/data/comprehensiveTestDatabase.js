/**
 * 종합 테스트 문제 - 여러 문법점에 걸친 종합 문제
 */
export const comprehensiveTestDatabase = {
  beginner: [
    {
      id: 'comp_beg_001',
      type: 'passage-comprehension',
      title: '초급 종합 테스트1',
      passage: '안녕하세요. 나는 한국인입니다. 나는 서울에서 살고 있습니다. 매일 아침에 학교에 갑니다. 학교에서 한국말을 배웁니다.',
      questions: [
        {
          question: '나는 어디에 삽니까?',
          options: ['서울', '부산', '대구'],
          correct: 0,
          grammarFocus: 'beg_002'
        },
        {
          question: '나는 하루에 몇 번 학교에 갑니까?',
          options: ['매일', '일주일에 한 번', '한 달에 한 번'],
          correct: 0,
          grammarFocus: 'beg_001'
        }
      ]
    },
    {
      id: 'comp_beg_002',
      type: 'dialogue',
      title: '초급 종합 테스트2 - 일상 대화',
      dialogue: [
        { speaker: 'A', text: '안녕하세요. 저는 학생입니다.' },
        { speaker: 'B', text: '만나서 반갑습니다.' },
        { speaker: 'A', text: '저는 매일 학교에 갑니다.' }
      ],
      questions: [
        {
          question: 'A는 무엇인가요?',
          options: ['학생', '선생님', '의사'],
          correct: 0,
          grammarFocus: 'beg_004'
        }
      ]
    }
  ],

  intermediate: [
    {
      id: 'comp_int_001',
      type: 'passage-comprehension',
      title: '중급 종합 테스트1',
      passage: '제가 학교에 가는 중이었을 때 친구를 만났어요. 아무리 바빠도 친구와 이야기하기는 좋았어요. 그 친구는 미국에 가려고 했는데 아직도 한국에 있어요.',
      questions: [
        {
          question: '나는 언제 친구를 만났어요?',
          options: ['학교 가는 중에', '학교에 도착한 후', '집에서'],
          correct: 0,
          grammarFocus: 'int_011'
        },
        {
          question: '문장에서 -아도는 어떤 의미입니까?',
          options: ['대조', '원인', '결과'],
          correct: 0,
          grammarFocus: 'int_010'
        }
      ]
    }
  ],

  advanced: [
    {
      id: 'comp_adv_001',
      type: 'passage-comprehension',
      title: '고급 종합 테스트1',
      passage: '외국에 나가기는커녕 서울도 못 가본 사람들이 있다. 그들은 경제적으로 어렵기도 했지만, 또한 용기를 내지 못했다. 하지만 그들도 꿈을 꾸기는 한다.',
      questions: [
        {
          question: '문장의 주인공은 누구의 상황을 설명합니까?',
          options: ['못 여행간 사람들', '부자들', '공무원들'],
          correct: 0,
          grammarFocus: 'adv_010'
        }
      ]
    }
  ]
}
export default comprehensiveTestDatabase
