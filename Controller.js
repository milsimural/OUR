const Model = require('./Model');

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
    // this.score = 0;
  }

  sendQuestion(category = 1) {
    if (category === 1) {
      if (this.questionNum >= this.data.ястребы.length) {
        return Model.getPoints();
      }
      const result = this.data.ястребы[this.questionNum];
      this.questionNum++;
      return result;
    }
    if (category === 2) {
      if (this.questionNum >= this.data.еноты.length) {
        return Model.getPoints();
      }
      const result = this.data.еноты[this.questionNum];
      this.questionNum++;
      return result;
    }
    if (category === 3) {
      if (this.questionNum >= this.data.выдры.length) {
        return Model.getPoints();
      }
      const result = this.data.выдры[this.questionNum];
      this.questionNum++;
      return result;
    }
  }

  sendReaction(questAnswObj, userAnswer) {
    if (Object.values(questAnswObj).toString() === userAnswer) {
      Model.addPoints();
      return '👍';
    }
    return '👎';
  }
}

module.export = Controller;
