# HTTP vs HTTPS 차이점

## 차이점

> 1. 암호화 유무 : HTTPS는 SSL 위에 HTTP를 얹어서 보안이 보장된 통신을 하는 프로토콜입니다. 이 통신 방식을 SSL 암호화 통신 이라고도 합니다. SSL 암호화 통신은 공개키 암호화 방식(비대칭키 암호화)이라는 알고리즘을 통해 구현됩니다.
> 2. 사용하는 포트가 다름 : HTTP 80, HTTPS 443
> 3. 속도: HTTPS 암호화/ 복호화 과정이 필요해 HTTP보다 속도가 느리다 (물론 최근에는 거의 차이를 못느낄 정도로 발전)
> 4. 추가 비용 : 인증서를 발급하고 유지하기 위한 추가 비용 발생

<img src="https://user-images.githubusercontent.com/69666944/164370087-7eef3392-e85e-4fe0-9beb-06c01c4207f2.png">

## url도 암호화?

> Yes!
> 웹 브라우저는 Public key를 사용해 url, http 데이터 대칭 암호화키를 이용해 암호화 & 전송

## [ 대칭키 암호화와 비대칭키 암호화 ]

> HTTPS는 대칭키 암호화 방식과 비대칭키 암호화 방식을 모두 사용하고 있다. 각각의 암호화 방식은 다음과 같다.
>
> - 대칭키 암호화
>   - 클라이언트와 서버가 동일한 키를 사용해 암호화/복호화를 진행함
>   - 키가 노출되면 매우 위험하지만 연산 속도가 빠름
> - 비대칭키 암호화
>   - 1개의 쌍으로 구성된 공개키와 개인키를 암호화/복호화 하는데 사용함
>   - 키가 노출되어도 비교적 안전하지만 연산 속도가 느림

## 암호화 방식

<img src="https://user-images.githubusercontent.com/69666944/164363257-332ff5ea-4340-4510-9edc-55f40c6de5a8.png">

> 비대칭키 암호화는 공개키/개인키 암호화 방식을 이용해 데이터를 암호화하고 있다. 공개키와 개인키는 서로를 위한 1쌍의 키이다.
>
> - 공개키: 모두에게 공개가능한 키
> - 개인키: 나만 가지고 알고 있어야 하는 키

> 암호화를 공개키로 하느냐 개인키로 하느냐에 따라 얻는 효과가 다른데, 공개키와 개인키로 암호화하면 각각 다음과 같은 효과를 얻을 수 있다.
>
> - 공개키 암호화: 공개키로 암호화를 하면 개인키로만 복호화할 수 있다. -> 개인키는 나만 가지고 있으므로, 나만 볼 수 있다.
> - 개인키 암호화: 개인키로 암호화하면 공개키로만 복호화할 수 있다. -> 공개키는 모두에게 공개되어 있으므로, 내가 인증한 정보임을 알려 신뢰성을 보장할 수 있다.

## 대칭키 vs 비대칭키

<img src="https://user-images.githubusercontent.com/69666944/164698576-17439b0c-295f-4587-93e8-270b9497e80b.png">

<img src="https://user-images.githubusercontent.com/69666944/164698612-3cbf091f-df7a-4498-ab37-1086d33320c3.png">

## 순서

> 1. 웹브라우저는 SSL로 암호화된 페이지를 웹서버에게 요청한다(https://)
> 2. 웹서버는 Public key를 인증서와 함께 브라우저에게 전송
> 3. 웹브라우저는 인증서가 인증된기관(CA or trusted root)로 부터 서명된 것인지 확인하고 인증서가 유효한지 확인한다
> 4. 웹브라우저는 Public key를 사용해 url, http 데이터 대칭 암호화키를 이용해 암호화 &전송
> 5. 웹서버는 Private key를 이용해 URL, http데이터를 복호화
> 6. 웹서버는 요청받은 url에 대한 응답 을 대칭 암호화 키를 이용해 브라우저로 전송
> 7. 웹브라우저는 대칭 암호키를 이용해 http데이터와 html문서를 복호화하고 화면에 정보를 뿌린다
