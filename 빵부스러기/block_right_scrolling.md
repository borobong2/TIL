어떻게 하면 오른쪽 스크롤 안되게 할 수 있을까?

in scrollView React-Native

1차 시도

```javascript
if (index > 3) {
  setIsClicked(false);
} else {
  setIsClicked(true);
}
<ScrollView scrollEnabled={isClicked}>...</ScrollView>;
```

문제점: isClicked 가 켜지는 시점에 페이지가 멈춰버림
-> 애매한 위치에 멈출때가 많았음

2차 시도
-> 1차 응용

```javascript
if (index > 3) {
  setIsClicked(false);
  scroll.current.scrollTo({
    x: wp("100%") * 3,
    y: 0,
    animated: true,
  });
} else {
  setIsClicked(true);
}

<ScrollView scrollEnabled={isClicked}>...</ScrollView>;
```

문제점: 다음 페이지로 넘어갈 때 다시 3번 페이지로 돌아오지만, 요구사항은 그냥 페이지 자체가 안보이는 것 이였음

3차 시도
페이지 렌더링

```javascript
switch (index) {
      case 0:
        setClickedBtn1(true);
        break;
      case 1:
        setClickedBtn2(true);
        break;
      case 2:
        setClickedBtn3(true);
        break;
      default:
        console.log('Somethign is wrong');
        break;
    }
<ScrollView>
...
{
  clickedBtn1 ? <Component1 /> : null;
}
{
  clickedBtn2 ? <Component2 /> : null;
}
{
  clickedBtn3 ? <Component3 /> : null;
}
</ScrollView>
```

아래와 같이 해결 완료!
