// const Model = require('./Model');

// View => 1. выбранная категория, 2. ответ пользователя
// Model =>
// 1. вопрос по выбранной категории (+ сохранить id вопроса в переменную),
// 2. Реакция на ответ
// 3/ Очки в конце

class Controller {
  constructor(
    data = {
      ястребы: [{ 'Верно или нет?': 'Нет' }, { вопрос: 'ответ' }, { вопрос: 'ответ' }],
      еноты: [{ вопрос: 'ответ' }, { вопрос: 'ответ' }, { вопрос: 'ответ' }],
      выдры: [{ вопрос: 'ответ' }, { вопрос: 'ответ' }, { вопрос: 'ответ' }],
    },
  ) {
    this.data = data;
    this.questionNum = 0;
    this.score = 0;
    // this.askedQuestions = 0
  }

  // возвращаю всю дату по

  sendQuestion(category = 1) {
    if (category === 1) {
      if (this.questionNum >= this.data.ястребы.length) {
        return this.score;
      }
      const result = this.data.ястребы[this.questionNum];
      this.questionNum++;
      return result;
    }
    if (category === 2) {
      if (this.questionNum >= this.data.еноты.length) {
        return this.score;
      }
      const result = this.data.еноты[this.questionNum];
      this.questionNum++;
      return result;
    }
    if (category === 3) {
      if (this.questionNum >= this.data.выдры.length) {
        return this.score;
      }
      const result = this.data.выдры[this.questionNum];
      this.questionNum++;
      return result;
    }
  }

  sendReaction(questAnswObj, userAnswer) {
    if (Object.values(questAnswObj).toString() === userAnswer) {
      this.score++;
      return '👍';
    }
    return '👎';
  }

  //   saveQuestionId() {
  //     return (askedQuestions += 1);
  //   }

  //   getUserAnswerFromView() {}

  //   processAnswer() {}

  //   sendReaction; // [{в: о}, ответ пользователя ] // отправить реакцию

  //   sendScore;
}

console.log(Controller.sendQuestion(1));

module.export = Controller;
