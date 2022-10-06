# 오늘의 오류

<img src='https://user-images.githubusercontent.com/69666944/194286239-6d29facf-d120-48bb-8bf8-2c354eb1c352.png'>
<img src='https://user-images.githubusercontent.com/69666944/194286261-582451a2-2091-426f-8703-d5ab86aadb51.png'>

배열을 넘겨주는 작업에서 길이 오류?가 남

data는 boolean[] 형태였는데, 길이가 맞지 않다는 오류가 남

기존

```javascript
data = [true, true, true, true, true, true, true];
logREvent("error", {
  data: data,
});
```

변경후

```javascript
data = [true, true, true, true, true, true, true];
logREvent("error", {
  data: data.slice(0, 7),
});
```
