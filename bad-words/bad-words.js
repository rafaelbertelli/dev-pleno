const Filter = require('bad-words');
const filter = new Filter();
// const filter = new Filter({ placeHolder: '#' });

filter.addWords(['some', 'bad', 'word', 'cuzao', 'palavra']);
filter.removeWords('palavra');

console.log(filter.clean("Don't be an ash0le"));
console.log(filter.clean("Don't be an assh0le"));
console.log(filter.clean("some bad word"));
console.log(filter.clean("alguma má palavra cuzao ou cuzão"));