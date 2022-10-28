#[js] 자릿수 정해주기

##padStart !

- ex) 5 -> 05 이런식으로 표기하고 싶을떄?
  num.pad.Start(2, ‘0’); // 05

###예시

```javascript
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

###참고 링크 -https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
