class Model {
  constructor() {
    this.data = {};
    this.points = 0;
  }

  addPoints() {
    this.points += 1;
  }

  getPoints() {
    return this.points;
  }
}

module.export = Model;
