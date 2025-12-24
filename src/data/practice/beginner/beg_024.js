export const practice_beg_024 = {
  grammarId: 'beg_024',
  level: 'beginner',
  title: '-(으)로 方向/手段助词',
  subtitle: '区分方向、工具、材料等不同含义',
  tags: ['助词', '方向', '工具'],
  questions: [
    {
      id: 'beg_024_001',
      type: 'multiple-choice',
      question: '학교___ 걸어서 가요.',
      options: [
        { text: '로', correct: true },
        { text: '에게', correct: false },
        { text: '에서', correct: false },
        { text: '으로부터', correct: false }
      ],
      explanation: '“학교로 가요”表示朝学校方向移动；“에게/에서/으로부터”分别是给、在、从，不表达方向。',
      source: 'Codex 扩展初级题库'
    },
    {
      id: 'beg_024_002',
      type: 'multiple-choice',
      question: '젓가락___ 비빔밥을 먹어요.',
      options: [
        { text: '으로', correct: true },
        { text: '하고', correct: false },
        { text: '만큼', correct: false },
        { text: '이라서', correct: false }
      ],
      explanation: '表示工具要用“젓가락으로”；其他助词分别表示并列、程度比较、原因，意义不同。',
      source: 'Codex 扩展初级题库'
    },
    {
      id: 'beg_024_003',
      type: 'multiple-choice',
      question: '버스___ 출근하면 20분밖에 안 걸려요.',
      options: [
        { text: '로', correct: true },
        { text: '으로서', correct: false },
        { text: '와', correct: false },
        { text: '뿐', correct: false }
      ],
      explanation: '交通方式用“-로”表示“坐公交”；其他选项含义分别为身份、并列、只有，与题意不符。',
      source: 'Codex 扩展初级题库'
    },
    {
      id: 'beg_024_004',
      type: 'multiple-choice',
      question: '종이___ 배를 만들었어요.',
      options: [
        { text: '로', correct: true },
        { text: '에', correct: false },
        { text: '에게서', correct: false },
        { text: '보다', correct: false }
      ],
      explanation: '表示材料需用“-로”: “종이로 만들다”；其他助词不表示材料。',
      source: 'Codex 扩展初级题库'
    },
    {
      id: 'beg_024_005',
      type: 'multiple-choice',
      question: '서울에서 부산___ KTX를 타고 갔어요.',
      options: [
        { text: '으로', correct: true },
        { text: '마다', correct: false },
        { text: '처럼', correct: false },
        { text: '만큼', correct: false }
      ],
      explanation: '“부산으로”指向目的地；“마다/처럼/만큼”分别表示频率、比喻、程度，不传递方向意义。',
      source: 'Codex 扩展初级题库'
    },
    {
      id: 'beg_024_006',
      type: 'multiple-choice',
      question: '다음 중 -(으)로 사용이 틀린 문장은?',
      options: [
        { text: '오른쪽으로 가세요.', correct: false },
        { text: '연필로 적으세요.', correct: false },
        { text: '눈물으로 웃었어요.', correct: true },
        { text: '도서관으로 공부하러 가요.', correct: false }
      ],
      explanation: '“눈물으로 웃었어요”语义矛盾且“눈물로”通常作材料，无法修饰“웃다”，因此使用不当；其他句子分别表示方向、工具、目的地，均正确。',
      source: 'Codex 扩展初级题库'
    }
  ]
}
