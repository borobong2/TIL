# map vs reduce

- 한 배열의 합을 구할때

reduce가 더 효율적임

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log(sum); // Output: 15
```

- 각배열에 대한 곱을 구할때?

map이 더 효율적

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue * 2);
  return accumulator;
}, []);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```
