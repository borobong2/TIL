# json.Parse()

- 사용한 곳: json 파일 형식의 데이터가 필요한데, 값이 전달될때 string으로 되는 경우

- 사용법: json.Parse(string)

```javascript
예시;
const getData = (data: string) => {
  console.log(data);
  // data = '{"id":1}' 로 출력
  // 만약 id를 사용하고 싶다면
  // json.Parse를 사용하여 string을 json으로 변환해준다.
  const id = JSON.parse(data).id;
};
```
