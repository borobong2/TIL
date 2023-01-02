# sinon

sinon.spy()

```javascript
import sinon from 'sinon';
let spy = sinon.spy(console, 'log');
```

### when i use spy?

- 이름에서 알 수 있듯이 spy는 함수 호출에 대한 정보를 얻는 데 사용 됩니다. 예를 들어, spy는 함수가 얼마나 많이 호출되었는지, 각각 어떤 인자를 가지고 호출되었는지, 어떤 값을 리턴하는지, 어떤 에러를 던지는지 등을 정의할 수 있습니다.

### how to use spy

- spy는 테스트의 목적이 어떤 일이 발생했는지(어떤함수가 호출되었는지)를 확인할 때 사용하기에 적합한 선택입니다. Sinon의 assertion과 결합하여 여러 가지 결과를 확인할 수 있습니다.
