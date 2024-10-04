const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class View {
    run() {
        rl.question('Выберите категорию вопроса: ', (answer) => {
            controller.(answer);
        
            rl.close();
        });
    }
}