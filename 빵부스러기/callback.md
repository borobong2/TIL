### 220915 오늘의 빵부스러기

callback() 함수

장점: 에러 핸들링

지금까지 살펴본 예시들은 스크립트 로딩이 실패하는 경우 등의 에러를 고려하지 않고 작성되었습니다. 그런데 스크립트 로딩이 실패할 가능성은 언제나 있습니다. 물론 콜백 함수는 이런 에러를 핸들링할 수 있어야 하죠.

```javascript
function loadScript(src, callback) {
	let script = document.createElement('script');
	script.src = src;

	script.onload = () => callback(null, script);
	script.onerror = () =>
		callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));

	document.head.append(script);
}
```

이제 loadScript는 스크립트 로딩에 성공하면 callback(null, script)을, 실패하면 callback(error)을 호출합니다.

개선된 loadScript의 사용법은 다음과 같습니다.

```javascript
loadScript('/my/script.js', function (error, script) {
	if (error) {
		// 에러 처리
	} else {
		// 스크립트 로딩이 성공적으로 끝남
	}
});
```

```javascript
loadScript('1.js', function (error, script) {
	if (error) {
		handleError(error);
	} else {
		// ...
		loadScript('2.js', function (error, script) {
			if (error) {
				handleError(error);
			} else {
				// ...
				loadScript('3.js', function (error, script) {
					if (error) {
						handleError(error);
					} else {
						// 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
					}
				});
			}
		});
	}
});
```

위 코드는 다음과 같이 동작합니다.

1.js를 로드합니다. 그 후 에러가 없으면,
2.js를 로드합니다. 그 후 에러가 없으면,
3.js를 로드합니다. 그 후 에러가 없으면 (\*)로 표시한 줄에서 또 다른 작업을 수행합니다.

안좋은 점:
콜백 지옥(callbackhell), 멸망의 피라미드(pyramid of doom)

참고: https://ko.javascript.info/callbacks
