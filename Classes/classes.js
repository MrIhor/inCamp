class Task {
  constructor({ id, title, done, dueDate, desc }) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.done = done;
    this.dueDate = dueDate;
  }

  toString() {
    let complete = this.done ? '[x]' : '[ ]';
    return console.log(`${this.id}. ${complete} ${this.title}`);
  }

  // toggle() {
  //   return (this.done = this.done === true ? false : true);
  // }

  isOverdue() {
    let currentDate = new Date();
    if (currentDate - this.dueDate < 0) {
      return false
    } else {
      return true
    }
  }
}

let stringTask = new Task({ id: 1, title: 'Some task' });
console.log(stringTask.toString());

// let toggleTask = new Task();
// taskTitle.toggle();
// console.log(taskTitle.done);

let now = new Date();
let yesterday = new Date();
yesterday.setDate(now.getDate() - 1);

let overdueTask = new Task({ dueDate: yesterday });
console.log(overdueTask.isOverdue());