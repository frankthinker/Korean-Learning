const { practiceDatabase } = require('./src/data/practiceDatabase.js');
const intermediate = practiceDatabase.intermediate;

Object.keys(intermediate).forEach(key => {
  const questions = intermediate[key];
  console.log(key + ':', questions.length, 'questions');
  
  const fillBlanks = questions.filter(q => q.type === 'fill-blank');
  if (fillBlanks.length > 0) {
    console.log('  WARNING: Found', fillBlanks.length, 'fill-blank questions');
    fillBlanks.forEach(q => console.log('    -', q.id));
  }
  
  const multiChoice = questions.filter(q => q.type === 'multiple-choice');
  multiChoice.forEach(q => {
    if (!q.options || q.options.length === 0) {
      console.log('  ERROR:', q.id, 'missing options');
    }
  });
});
