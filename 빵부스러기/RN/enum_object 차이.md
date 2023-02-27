# enum vs object

### Object와 enum의 차이

- object 는 코드내에서 새로운 속성을 자유롭게 추가할 수 있지만, enum 은 선언할때 이후에 변경할 수 없습니다.
- object 의 속성값은 JS가 허용하는 모든 타입이 올 수 있지만, enum 의 속성값으로는 문자열 혹은 숫자만 허용됩니다.

타입을 사용할때 일반 스트링 보다는 Enum을 활용하는게 유지보수에 좋다.

ex)

```
개선 전
if(day === 'Mon') {
...
}
개선 후
if(day === day.MON) {
...
}
```
