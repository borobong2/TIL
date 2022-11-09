# MVVM?

- Model + View + View Model

구조

- Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.
- View : 사용자에서 보여지는 UI 부분입니다.
- View Model : View를 표현하기 위해 만든 View를 위한 Model입니다. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분입니다.

동작
MVVM 패턴의 동작 순서는 아래와 같습니다.

- 사용자의 Action들은 View를 통해 들어오게 됩니다.
- View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달합니다.
- View Model은 Model에게 데이터를 요청합니다.
- Model은 View Model에게 요청받은 데이터를 응답합니다.
- View Model은 응답 받은 데이터를 가공하여 저장합니다.
- View는 View Model과 Data Binding하여 화면을 나타냅니다.

특징
MVVM 패턴은 Command 패턴과 Data Binding 두 가지 패턴을 사용하여 구현되었습니다.
Command 패턴과 Data Binding을 이용하여 View와 View Model 사이의 의존성을 없앴습니다.
View Model과 View는 1:n 관계입니다.

장점
MVVM 패턴은 View와 Model 사이의 의존성이 없습니다. 또한 Command 패턴과 Data Binding을 사용하여 View와 View Model 사이의 의존성 또한 없앤 디자인패턴입니다. 각각의 부분은 독립적이기 때문에 모듈화 하여 개발할 수 있습니다.

단점
MVVM 패턴의 단점은 View Model의 설계가 쉽지 않다는 점입니다.
