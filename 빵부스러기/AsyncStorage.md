AsyncStorage란?

데이터를 핸드폰 로컬에 저장해서 사용하는 것!

사용방법?

```javascript
AsyncStorage.setItem("purchase");
AsyncStorage.getItem("purchase", "stringData");
```

외부에서 호출 하기

```javascript
const {purchase} = Local;
if(purchase.indexOf('puchase')~~
```

사용하는 이유?
네트워크 연결이 안되는 상황에서 필요한 데이터들을 핸드폰 자체에 저장해서 사용하기 위함

문제점?
아직 잘은 모르지만, 너무 남용하면 속도면에서 오래 걸림 (느려짐)
