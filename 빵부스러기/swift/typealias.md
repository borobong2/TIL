# [swift] 타입 별칭

> typealias:
> 사용자가 임의로 만든 데이터 타입

```swift
typealias MyInt = Int
typealias MyDouble = Double
…

let a: MyInt = 100 // let a: Int = 100 과 동일

```

> 응용

```swift
typealias MyTuple = (name: String, age: Int, height: double)
...

let student1: MyTuple = ("bong", 30, 180)
...
```
