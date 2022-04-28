## state변경 시, 왜 setState, useState를 사용하나요?

> state는 컴포넌트 렌더링에 영향을 주는 데이터를 갖고 있는 객체인데, 이것을 업데이트 하기위해서는 setState, useState가 필요합니다. 직접 state를 수정하면 리액트는 render 함수를 호출하지 않아서 렌더링이 일어나지 않고 setState를 호출하여 state를 변경하면 리액트 엔진이 render 함수를 이용해서 렌더링을 실행하기 때문입니다.

## state란 ?

간단하게 말해서 state는 변수이다. 그렇다면 const, let, var가 있는데 왜 state라는 변수를 사용할까?

state는 일반 변수와 다르게 값이 변하면 렌더링이 일어난다. 즉, 값이 변하게 되면 연관있는 컴포넌트들이 다시 렌더링이되어 화면이 바뀌게 된다.

조금더 자세하게 설명하자면 state는 props와 같이 컴포넌트 렌더링에 영향을 주는 데이터를 갖고 있는 **객체**이고, **컴포넌트 안에서 관리**된다.

## setState란?

setState는 state를 변경할 때 사용하는 함수이다. 컴포넌트는 현재의 this.state와 setState를 비교해서 업데이트가 필요한 경우에만 render 함수를 호출하는데, state를 직접 수정하게 되면 리액트가 render 함수를 호출하지 않아 상태 변경이 일어나도 렌더링이 일어나지 않을 수 있다.

## setState의 동작

setState는 비동기적으로 동작한다.

```javascript
function App() {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
    console.log(state);
  };

  return (
    <div className="App">
      <button onClick={onClick}>+1</button>
      <p>현재 값 {state}</p>
    </div>
  );
}
```

위 코드는 state 값은 제대로 반영이 된다. 그러나 중간에 `console.log(state);` 의 경우 이전 state 값을 출력한다. 이것은 setState가 비동기이기 때문이다.

즉, React는 setState를 킵해뒀다가 다른 기타 코드들을 처리하고 브라우저 이벤트가 끝날 시점에 state를 일괄적으로 업데이트하게 된다.

## state 는 왜 비동기로 작동할까?

state는 값이 변경되면 리렌더링이 발생한다. 그런데 변경되는 state가 많을 경우 리렌더링이 계속 일어날테고 속도도 저하될것이다.

따라서 변경된 값들을 모아 한번에 업데이트를 진행하여 렌더링을 줄이고자 배치(Batch) 기능을 사용해 비동기로 작동한다고 볼 수 있다. 배치 업데이트는 16ms 주기이다.

## setState를 동기적으로 사용하기

클래스형은 함수를 전달하고 함수형은 useEffect를 사용하면 된다.

```javascript
//클래스형
updateState = () => {
  this.setState({ cnt: this.state.cnt + 1 }, () => {
    console.log(this.state.cnt);
  });
};

//함수형
const plusNum = () => {
  setCnt(cnt + 1);
};

useEffect(() => {
  console.log(cnt);
}, [cnt]);
```
