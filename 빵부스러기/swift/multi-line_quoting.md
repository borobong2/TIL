# 멀 라인 쿼우팅 (Multi-Line Quoting)

> 파이썬!

- 세 개의 따옴표를 겹친 """~""" 를 이용하여 여러 줄의 문자열을 간편하게 입력하는 방법

```swift
let query = """
  SELECT member_id, member_name, memeber_level, nick_name
    From member
  Where login_id = ? And password =?
"""
```
