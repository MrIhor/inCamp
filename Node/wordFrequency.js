function wordFrequency(string) {
  let splitString = string.replace(/[.,]/g, '').toLowerCase().split(/\s/);

  return splitString.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
}

function mostFrequent(object) {
  let counter = 0;
  let mostFrequent;

  for (let key in object) {
    let wordCount = object[key];
    if (counter < wordCount) {
      counter = wordCount;
      mostFrequent = key;
    }
  }

  return console.log(mostFrequent);
}

mostFrequent(wordFrequency('Little red fox jumps over logs. Fox is red'));
var today = new Date();
var year = today.getUTCFullYear();
var month = today.getUTCMonth() + 1;
var time = today.getUTCHours();
var day = today.getUTCDate();

console.log(year, month, day, time, today);



