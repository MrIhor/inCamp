function wordFrequency(string) {
  let splitString = string.replace(/[.,]/g, '').toLowerCase().split(/\s/);

  return console.log(splitString.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {}));
}

wordFrequency('Я я я, мне мне мне хочется, чтобы ты была моей');