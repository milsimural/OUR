const fs = require('fs');

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

    const data = [[nighthawks], [otter], [raccoon]];

    const transformedData = {};
    const animals = ['ястребы', 'выдры', 'еноты'];

    animals.forEach((animal, index) => {
      const entries = data[index][0]
        .trim()
        .split('\n\n')
        .map((entry) => {
          const parts = entry.split('\n');
          return { вопрос: parts[0], ответ: parts[1] || 'ответ' };
        });
      transformedData[animal] = entries;
    });
    this.data = transformedData;
  }
}

module.export = Model;
