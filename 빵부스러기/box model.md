# CSS 박스 모델에 대해 얼마나 알고 있고 다른 박스 모델로 레이아웃을 렌더링 하는 방법을 설명해보세요.

> css 박스 모델이란 HTML 요소들을 감싸는 네모난 상자로 margin, border, padding, content로 구성된다.
> margin은 테두리 밖 여백으로 요소 사이의 간격을, border는 테두리, padding은 내용과 테두리 사이의 여백, content는 내용을 의미한다.

<img src="https://user-images.githubusercontent.com/69666944/165012592-f093f080-d297-4b9c-a3d9-5ae72287c208.png">

> 기본적으로 박스는 box-sizing: content-box 속성을 갖고 있다.
> 박스의 크기가 콘텐트 영역을 기준으로 정해지는 것을 의미한다.
> 만약 박스 모델의 크기 기준을 바꾸고 싶다면 boder-box 를 쓰면 테두리 기준으로 크기가 정해진다.

<img src="https://user-images.githubusercontent.com/69666944/165012596-794269e6-1188-4077-9e36-2ae5b3416261.png">

<img src="https://user-images.githubusercontent.com/69666944/165012600-c01414ef-9924-4941-ae93-6cccf72b8db3.png">

<img src="https://user-images.githubusercontent.com/69666944/165012605-2fa67056-5e40-42e2-885f-fc66ebc3f868.png">

https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing
https://ttum.tistory.com/9
