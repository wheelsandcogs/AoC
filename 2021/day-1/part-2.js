const fs = require('fs');

const sumArray = arr => arr.reduce((a, b) => a + b, 0);

try {
    const depths = fs.readFileSync('./input.txt', 'utf8').toString().split("\n");

    let i = 0;
    let prevWindow = [];
    let currWindow = [];
    let answer = 0;

    while (depths[i+2]) {
      currWindow = [
        parseInt(depths[i], 10),
        parseInt(depths[i+1], 10),
        parseInt(depths[i+2], 10)
      ];

      if (prevWindow.length && (sumArray(currWindow) > sumArray(prevWindow))) {
        answer++;
      }
      prevWindow = currWindow;
      i++;
    }

    console.log(answer);
  } catch (err) {
    console.error(err);
  }
