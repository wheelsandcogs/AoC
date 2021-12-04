const fs = require('fs');

try {
    const instructions = fs.readFileSync('./input.txt', 'utf8').toString().split("\n");

    let horizontal = 0;
    let depth = 0;

    instructions.filter(Boolean).forEach(instruction => {
        const [_, direction, value] = instruction.match(/^([a-z]+) (\d+)/);

        switch (direction) {
            case 'up':
                depth = depth - parseInt(value, 10);
                break;

            case 'down':
                depth = depth + parseInt(value, 10);
                break;

            case 'forward':
                horizontal = horizontal + parseInt(value, 10);
                break;
        }
    });

    console.log({ horizontal, depth });

  } catch (err) {
    console.error(err);
  }
