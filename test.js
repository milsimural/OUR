const data = {
  ястребы: [{ 'Верно или нет?': 'Нет' }, { вопрос: 'ответ' }, { вопрос: 'ответ' }],
  еноты: [{ вопрос: 'ответ' }, { вопрос: 'ответ' }, { вопрос: 'ответ' }],
  выдры: [{ вопрос: 'ответ' }, { вопрос: 'ответ' }, { вопрос: 'ответ' }],
};

function sendQuestion(category = 1) {
  const questionNum = 0;
  if (category === 1) {
    return data.ястребы[questionNum];
  }
  // if (category === 2) {
  // }
  // if (category === 3) {
  // }

  return 'Введите 1, 2 или 3';
}

function sendReaction(questAnswObj, userAnswer) {
  if (Object.values(questAnswObj).toString() === userAnswer) {
    console.log(Object.values(questAnswObj));

    return '👍';
  }
  console.log(Object.values(questAnswObj).toString());
  console.log(userAnswer);
  return '👎';
}

console.log(sendQuestion(1));

console.log(sendReaction({ 'Верно или нет?': 'Нет' }, 'Нет'));
