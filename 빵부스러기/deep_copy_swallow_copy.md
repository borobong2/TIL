배열 복사

```javascript
const list = [1, 2, 3];
const [data, setData] = useState([]);
setData(list);
```

추측1 list === data 달라야 한다 (주솟값이 다르므로)

1. 이뮤터블(변경 불가) 뮤터블(변경 가능)

배열의 값만 비교할 수 있는 것 equal?

문제

```javascript
if (list === data) {
  console.log("같다!");
} else {
  console.log("다르다");
}
```

이경우에 data가 복사가 깊은 복사일 경우에만 같다
(주소까지 같은 경우)

고로 주소값이 달라지면 달라짐!

배열을 비교할 수 있는 방법은 ?

```javascript
import _ from "lodash"

_.isEqual(data, list) {

}
```
