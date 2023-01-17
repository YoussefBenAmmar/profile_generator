const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


rl.question('What\'s your name?', (answer) => {
  rl.question('How many times a week do you excercise?', (answer1) => {
    rl.question('What\'s your favorite sport to practice?', (answer2) => {
      rl.question('What\'s your favorite sport to watch?', (answer3) => {
  // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}, excercising ${answer1} times a week is good but you can do better, and try doing something other than ${answer3}, mayber ${answer2}`);

  rl.close();
      });
    });
  });
});