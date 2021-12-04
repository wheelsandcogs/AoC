const fs = require('fs');

try {
    const numbers = fs.readFileSync('./input.txt', 'utf8').toString().split("\n");

    let previous;
    let answer = 0;

    numbers.forEach(num => {
        const current = parseInt(num, 10);
        if (previous && (current > previous)) {
            answer++;
        }
        previous = current;
    });

    console.log(answer);
  } catch (err) {
    console.error(err);
  }
