# for 문 조건 주는 방법

```swift

var myArray: [int] = [0,1,2,3,4,5,6,7,8,9,10]

//foreach
for item in myArray {
  print("item: \(item)")
}

for item in myArray where item %2 != 0 {
  print("홀수: \(item)")
}

for index in 0..<5 {  // index 값을 사용하지 않으면  index -> _
  print("index: \(index)")
}
```
