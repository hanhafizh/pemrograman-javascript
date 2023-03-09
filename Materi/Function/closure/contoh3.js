let counter = 0;

const add = () => {
  return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
 */