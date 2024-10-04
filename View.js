const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  constructor() {
    this.cat = 0;
    this.chek = true;
    this.points = 0;
    this.arrValue = [1, 2, 3];
  }

  run() {
    function get() {
      const arrObj = Object.keys(controller.data);
      return `Выбери одну из категорий:   
        ${this.arrValue[0]}. ${arrObj[0]}
        ${this.arrValue[1]}. ${arrObj[1]}
        ${this.arrValue[2]}. ${arrObj[2]}`;
    }

    rl.question(get(), (answer) => {
      this.cat = answer;
      rl.close();
    });

    while (this.chek) {
      const question = controller.sendQuestion(this.cat);
      if (typeof question === 'number') {
        this.chek = false;
        this.points = question;
        console.log(`Кол-во очков: ${question}`);
        break;
      }
      rl.question(`${Object.keys(question)}`, (answer) => {
        const reaction = controller.sendReaction(question, answer);
        console.log(reaction);
        rl.close;
      });
    }
  }
}

module.export = View;
