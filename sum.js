/* eslint-disable max-classes-per-file */
const readline = require('readline');
const fs = require('fs');
const prompt = require('prompt-sync')();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  constructor() {
    this.cat = 0;
    this.check = true;
    this.points = 0;
    this.arrValue = [1, 2, 3];
  }

  run() {
    const arrObj = Object.keys(controller.data);
    const getN = `Выбери одну из категорий:
          ${this.arrValue[0]}. ${arrObj[0]}
          ${this.arrValue[1]}. ${arrObj[1]}
          ${this.arrValue[2]}. ${arrObj[2]}\n\n`;

    this.cat = prompt(getN);

    const runLoop = () => {
      while (this.check) {
        const question = controller.sendQuestion(this.cat);
        console.log(`quest: ${question}`);

        if (typeof question === 'number') {
          this.check = false;
          this.points = question;
          console.log(`Кол-во очков: ${question}`);
          rl.close();
          break;
          // return;
        }

        rl.question(`${Object.keys(question)}: `, (answer) => {
          const reaction = controller.sendReaction(question, answer);
          console.log(reaction);
          runLoop();
        });

        // return;
      }

      // rl.close();
    };

    runLoop();
  }
}

class Controller {
  constructor(data) {
    this.data = data;
    this.questionNum = 0;
  }

  sendQuestion(category) {
    console.log(`ястребы${this.data.ястребы.length}`);
    console.log(`еноты${this.data.еноты.length}`);
    console.log(`выдры${this.data.выдры.length}`);
    console.log(this.data.ястребы);
    if (category == 1) {
      if (this.questionNum >= this.data.ястребы.length) {
        return model.getPoints();
      }
      const result = this.data.ястребы[this.questionNum];
      this.questionNum++;
      return result;
    }
    if (category == 2) {
      if (this.questionNum >= this.data.еноты.length) {
        return model.getPoints();
      }
      const result = this.data.еноты[this.questionNum];
      this.questionNum++;
      return result;
    }
    if (category == 3) {
      if (this.questionNum >= this.data.выдры.length) {
        return model.getPoints();
      }
      const result = this.data.выдры[this.questionNum];
      this.questionNum++;
      return result;
    }
  }

  sendReaction(questAnswObj, userAnswer) {
    if (Object.values(questAnswObj).toString() === userAnswer) {
      model.addPoints();
      return '👍';
    }
    return '👎';
  }
}

class Model {
  constructor() {
    this.data = [];
    this.points = 0;
  }

  addPoints() {
    this.points += 1;
  }

  getPoints() {
    return this.points;
  }

  createData() {
    const nighthawks = fs.readFileSync(`./topics/nighthawk_flashcard_data.txt`, 'utf8');
    const otter = fs.readFileSync(`./topics/otter_flashcard_data.txt`, 'utf8');
    const raccoon = fs.readFileSync(`./topics/raccoon_flashcard_data.txt`, 'utf8');

    function prepareData(rawData) {
      const rawArr = rawData.split('\r\n');
      const objArr = [];
      for (let i = 0; i < rawArr.lenght; i += 3) {
        const obj = { [rawArr[i]]: rawArr[i + 1] };
        console.log(obj);
        objArr.push(obj);
      }
      console.log(`objArr: ${objArr}`);
      return objArr;
    }

    const arrN = prepareData(nighthawks);
    const arrO = prepareData(otter);
    const arrR = prepareData(raccoon);

    const transformedData = {
      ястребы: arrN,
      выдры: arrO,
      еноты: arrR,
    };

    // const data = [[nighthawks], [otter], [raccoon]];

    // const transformedData = {};
    // const animals = ['ястребы', 'выдры', 'еноты'];

    // animals.forEach((animal, index) => {
    //   const entries = data[index][0]
    //     .trim()
    //     .split('\n\n')
    //     .map((entry) => {
    //       const parts = entry.split('\n');
    //       return { вопрос: parts[0], ответ: parts[1] || 'ответ' };
    //     });
    //   transformedData[animal] = entries;
    // });
    this.data = transformedData;
  }
}

const model = new Model();
model.createData();
const controller = new Controller(model.data);
const view = new View();

// Запуск приложения
view.run();
