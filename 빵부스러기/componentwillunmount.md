컴포넌트가 unmount가 무조건적으로 일어나지 않는다!

want: 모달이 꺼졌을때 토스트 메시지 함수 실행되게 하려고 함
situation: unmount가 안됨?
reason: 모달을 isVisible이라는 함수로 키고 없앴지만, 모달이 포함된 컴퍼넌트를 isVisible로 감싸지 않아 안없어짐?

+220921

```javascript
isVisible && (<Modal isVisible={isVisible}>)
```

이런 식으로 하면 isVisible이 바뀜과 동시에 사라짐
isVisible 변수를 다르게 써야함

```javascript
visible && (<Modal isVisible={isVisible}>)
```
