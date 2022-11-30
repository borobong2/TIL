# switch case

```swift
typealias NameeAge = (name: String, age: Int)

let tupleValue: NameAge = ("yagom", 99)

switch tupleValue {
  case ("yagom", 50):
    print("정확히 맞추셨습니다")
  case ("yagom", let age):
    print("이름만 맞았습니다")
  case (let name, 99)
    print("나이만 맞았습니다")
  default:
    print("누구 찾으세요?")
}

```
