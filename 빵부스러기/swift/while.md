# while

```swift

var names: [String] = ["John", "Jenny", "Joe", "yagom"];

while names.isEmpty == false {
  print("Good Bye \(names.removeFirst())")
  // removeFirst()는 요소를 삭제함과 동시에 삭제한 요소를 반환합니다.
}


repeat {
  print("Good Bye \(names.removeFirst())")
} while names.isEmpty == false

// Good Bye John
// Good Bye Jenny
// Good Bye Joe
// Good Bye yagom
```
