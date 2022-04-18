# Array.reduce()

## 기본 정리

- 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

```javascrpit
arr.reduce(callback[, initialValue])
```

- callback : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 가짐
  - accumulator : 누산기. 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값임
  - currentValue : 처리할 현재 요소
  - currentIndex (Optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
  - array (Optional) : reduce()를 호출한 배열
- initialValue (Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류 발생

## 사용방법

> reduce()에는 누산기가 포함되어 있기 때문에, 배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이하다.
> 가장 기본적인 예제로는 모든 배열의 합을 구하는 경우가 있다.

```javascript
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0);
console.log(result); // 15

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 10);
console.log(result2); // 25
```

> 위의 예제에서 initialValue 값을 0으로 두었기 때문에 acc의 초기값은 0이 되고, 배열의 첫 번째 요소부터 acc에 자신의 값인 cur을 더해간다.
> reduce()를 실행하고 난 뒤, 최종적으로 반환되는 값은 0 + 1 + 2 + 3 + 4 + 5 인 15이다.
> 만약 initialValue 값을 10으로 둔다면, acc의 초기값은 10이 되고, 배열의 첫 번째 요소부터 acc에 자신의 값인 cur을 더해가므로
> 최종적으로 반환되는 값은 10 + 1 + 2 + 3 + 4 + 5 인 25가 된다.

> initialValue에는 배열이 들어갈 수도 있다.
> 주어지는 배열에서 음수와 양수의 개수를 카운트해서 출력하는 경우를 생각해보자.

```javascript
const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const result = numbers.reduce(
  (acc, cur, idx) => {
    if (cur < 0) {
      // 처리할 현재 요소가 음수일 경우
      acc[0]++;
    } else if (cur > 0) {
      // 처리할 현재 요소가 양수일 경우
      acc[1]++;
    }
    return acc;
  },
  [0, 0]
);
console.log(result); // [4, 5]
```

> 음수와 양수의 개수를 각각 카운트하기 위해 initialValue를 [0,0]로 설정했다. initialValue[0]에는 음수의 개수를, initialValue[1]에는 양수의 개수를 카운트한다고 하자.
> 첫 번째 호출 시, acc의 값은 initialValue의 값으로 설정되므로 초기 acc 값은 [0,0]이다.
> 배열 numbers의 모든 요소에 대해 reduce() 함수를 실행한 결과는 다음과 같다.

| idx |  cur  |  acc   |
| :-: | :---: | :----: |
|  0  |   2   | [0, 1] |
|  1  |  -5   | [1, 1] |
|  2  | -123  | [2, 1] |
|  3  |  59   | [2, 2] |
|  4  | -5480 | [3, 2] |
|  5  |  24   | [3, 3] |
|  6  |   0   | [3, 3] |
|  7  |  -69  | [4, 3] |
|  8  |  349  | [4, 4] |
|  9  |   3   | [4, 5] |
