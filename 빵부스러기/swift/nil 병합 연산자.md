# 연산자

```swift
//nil 병합 연산자
A ?? B // A 가 nil이 아니면 A를 반환하고, A가 nil이면 B를 반환합니다.

// 옵셔널 강제 추출 연산자
O! // O의 값을 강제로 추출합니다.

var num1: Int? = 1
var num2: Int = num1!

print(num1, num2)
// Optional(1) 1

var num1: Int? = nil
var num2: Int = num1!

print(num1, num2)
// Optional(1)

```
