# Protocol

## 프로토콜이란?

- 특정 역할을 하기 위한 메소드, 프로퍼티, 기타 요구 사항 등의 청사진

---

### 프로토콜의 사용

- 구조체, 클래스, 열거형은 프로토콜을 채택해서 특정 기능을 실행하기 위한 프로토콜의 요구사항을 실제로 구현할 수 있다.
- 프로토콜은 정의를 하고 제시를 할 뿐 스스로 기능을 구현하지는 않는다. (조건만 정의)
- 하나의 타입으로 사용되기 때문에 아래와 같이 타입 사용이 허용되는 모든 곳에 프로토콜을 사용할 수 있다.

---

- 함수, 메소드, 이니셜라이저의 파라미터 타입 혹은 리턴 타입

- 상수, 변수, 프로퍼티의 타입

- 배열, 딕셔너리의 원소타입

```swift
protocol Student {
  var height: Double { get set }
  var name: String { get }
  static var schoolNumber: Int { get set }
}

struct SomeStructure: Student {
    // structure definition goes here
}

```
