const Controller = require('./Controller');
const Model = require('./Model');
const View = require('./View');

// Инициализация
const model = new Model();
model.createData();
const controller = new Controller(model.data);
const view = new View();

// Запуск приложения
// view.Run();

console.log(controller.sendQuestion(1));
