const p = (process.argv[2] === 'true');
const q = (process.argv[3] === 'true');

console.log('first arg', p);
console.log('second arg', q);

console.log(typeof (p));
console.log(typeof (q));

const result = p ? q : true;

console.log('result', result);
