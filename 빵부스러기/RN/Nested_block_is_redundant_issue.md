# [warning]Nested block is redundant no-lone-blocks

- 이슈

<image src="https://user-images.githubusercontent.com/69666944/214807927-bb3e8c4b-e277-4951-bb02-c900d67830b6.png" width="500" height="200"/>

```javascript
const navToSummary = (impression?: string) => {
  {
    impression ? caseA() : caseB();
  }
};
```

- 해결 방법
  : 중복된 괄호{} 제거

```javascript
const navToSummary = (impression?: string) => {
  impression ? caseA() : caseB();
};
```
