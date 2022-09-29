즉시 실행함수

이때까지 사용한 나의 함수 사용방법

```javascript
const press = () => {
  setLavel(true);
}
<Button
onPress={() => {press()}}
```

개선 방법

```javascript
const press = () => {
  setLavel(true);
}
<Button
onPress={press}
```

이렇게 하면 온프레스를 누를때마다 즉시 실행됨! 이게 렌더링 될때 문제도 되지 않고 좋음
