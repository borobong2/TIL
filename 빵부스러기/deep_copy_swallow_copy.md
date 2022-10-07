배열 복사

```javascript
const list = [1, 2, 3];
const [data, setData] = useState([]);
setData(list);
```

추측1 list === data 달라야 한다 (주솟값이 다르므로)

1. 이뮤터블(변경 불가) 뮤터블(변경 가능)

배열의 값만 비교할 수 있는 것 equal?
