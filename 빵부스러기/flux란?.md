# Flux?

> Flux 란 애플리케이션의 데이터 흐름을 관리하는 패턴을 말한다. 중요한 것은 데이터의 흐름이 단방향으로 흐른다는 것이다.

> 사용자가 뷰와 상호작용할 때 뷰는 애플리케이션의 데이터와 비즈니스로직을 가지고 있는 스토어들에게 액션을 디스패처를 통해 전파한다. 그러면 스토어는 액션을 통해 데이터를 변경하고 데이터를 변경한 것이 뷰에게 반영이 된다.

## 왜 Flux를 사용하는가?

- 예측가능성을 높여준다.
- 데이터의 일관성을 유지하기 쉽게 만들어준다.
- 버그를 발견하기 쉽게 해준다.
- 테스트를 쉽게 해준다.

## Flux의 구조

- Dispatcher
- Store
- Action
- View

## Dispatcher

> Dispatcher는 액션들을 받아서 해당 해당 디스패처를 등록한 Store에게 전달하는 역할을 한다. 모든 Store는 모든 액션을 받는다. 한 애플리케이션은 싱글턴 Dispatcher를 가지고 있어야 한다

## Dispatcher를 왜 사용해야 하는가?

> 애플리케이션이 커지면서 Store끼리 의존성이 생길 수 있다. 만약에 Store A가 Store B가 업데이트가 된 이후에 뭔가를 처리해야 하는 경우가 있다. 이런 경우에 Dispatcher가 waitFor()같은 메서드를 통해 중재를 해준다.

## Store

> 스토어는 애플리케이션의 데이터를 가지고 가지고 있다. 스토어는 액션들을 받기 위해서 애플리케이션의 디스패처를 등록한다. 스토어에 저장된 데이터는 오직 액션에 의해서만 변경이 되어야 한다. 그래서 공개적으로는 setter들은 존재하지 않고 오직 getter들만 있게 된다.
> 스토어는 받은 액션을 어떻게 처리할지를 결정합니다. 그리고 스토어의 데이터가 변할 때마다 change이벤트를 만들어야 한다. 이러한 스토어는 애플리케이션에 여러 개가 존재할 수 있다.

## Action

> 액션은 애플리케이션 내부의 API를 정의한다. 액션들은 애플리케이션과 어떻게 상호작용할지를 결정한다.
> 액션은 간단한 오브젝트인데 type이라는 필드와 데이터를 가지고 있다.
> 액션들은 의미를 드러내야 하고, 액션이 발생한 곳을 설명할 수 있어야 하지만 상세한 구현에 대해서는 묘사하지 않도록 구현해야 한다. 예를 들어 유저를 삭제할 경우 delete-user를 사용하는 것이 delete-user-id를 사용하는 것보다 더 낫다.

## View

> 스토어의 데이터는 뷰를 통해 보여진다. 뷰는 어떤 프레임워크를 사용하든 상관이 없다. 뷰가 스토어의 데이터를 사용할 때는 반드시 스토어의 change이벤트도 같이 구독해야 한다. 스토어가 이벤트를 발행할 때 뷰는 새로운 데이터를 받을 수 있고 다시 렌더링하게 된다. 만약에 컴포넌트가 스토어를 사용하지만 이벤트를 구독하지 않는다면 문제가 발생할 수 있다.
> 액션들은 주로 사용자가 뷰와 인터랙션 할때 뷰에서부터 발생한다.

## Flow of data

<img src="https://user-images.githubusercontent.com/69666944/166097489-d5f8ab93-42bb-4993-9d06-361567c770b6.png">

Flux의 각 역할을 하나의 다이어그램으로 푯하면 위와 같이 표현할 수 있다.

1. View는 Dispatcher에게 Action을 보낸다.
2. Dispatcher는 모든 Store에게 Action을 보낸다.
3. Store는 View에게 데이터를 전송한다.

출처 : https://hannut91.github.io/blogs/flux
