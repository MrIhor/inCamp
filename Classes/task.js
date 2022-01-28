function printTask(index, { title, done, desc, dueDate }) {
  let mas = [];
  let description = '';

  for (value in arguments[1]) {
    if (value == 'done') {
      let complete = arguments[1][value] ? '[x]' : '[ ]';
      mas.push(complete);
    } else if (value == 'dueDate') {
      const date = new Date(arguments[1][value]);
      mas.push(`(${date.toDateString().split(' ').slice(1, 3).join(' ')})`);
    } else if (value == 'desc') {
      description = arguments[1][value];
    } else {
      mas.push(arguments[1][value]);
    }
  }

  console.log(`${index}. ` + mas.join(' ') + `\n   ${description}`);
}


