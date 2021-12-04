const fs = require('fs');

try {
    const instructions = fs.readFileSync('./input.txt', 'utf8').toString().split("\n");

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    instructions.filter(Boolean).forEach(instruction => {
        const [_, direction, value] = instruction.match(/^([a-z]+) (\d+)/);

        switch (direction) {
            case 'up':
                aim = aim - parseInt(value, 10);
                break;

            case 'down':
                aim = aim + parseInt(value, 10);
                break;

            case 'forward':
                horizontal = horizontal + parseInt(value, 10);
                depth = aim === 0 ? depth : depth + (aim * parseInt(value, 10));
                break;
        }
    });

    console.log({ horizontal, depth, finalValue: horizontal * depth });

  } catch (err) {
    console.error(err);
  }
