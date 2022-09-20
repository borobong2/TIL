bind(this)

출처: https://bohyeon-n.github.io/deploy/javascript/this.html

```javascript
const account = {
	username: "bohyeon",
	balance: 10000,
	getBalance: function () {
		innerFunc = function () {
			console.log(this === window); // true
			return `${this.username}님의 잔액은 ${this.balance}입니다.`;
		};
		console.log(innerFunc());
	},
};
account.getBalance(); //undefined님의 잔액은 undefined입니다.
```

```javascript
const account = {
	username: "bohyeon",
	balance: 10000,
	getBalance: function () {
		innerFunc = function () {
			console.log(this === window); // false
			return `${this.username}님의 잔액은 ${this.balance}입니다.`;
		}.bind(this);
		console.log(innerFunc());
	},
};
account.getBalance(); //bohyeon님의 잔액은 10000입니다.
```

바깥 스코프에서 this 의 값을 계승받습니다. 즉 this 는 메소드를 호출한 객체를 가리키지 않고 상위 컨텍스트인 전역 객체, window 를 가리키게 됩니다.

##Summary
객체의 메소드로는 화살표 함수보다 function 문법 함수를 사용해야 한다는 것만 유의한다면, 화살표 함수를 사용하여 좀 더 직관적이고 편리하게 this 를 사용할 수 있습니다.

function 문법에서 this 는 함수가 어떻게 실행되는가에 따라서 동적으로 바뀌게 됩니다.

화살표 함수의 경우 화살표 함수가 정의된 곳의 문맥에 의해서 this 가 정의됩니다.

this 가 예상한 대로 동작하지 않는다면 함수의 실행 환경을 생각해보아야 합니다.

##Q.bind 사용 유무로 인하여 스코프(?) 범위를 확장가능(?)
