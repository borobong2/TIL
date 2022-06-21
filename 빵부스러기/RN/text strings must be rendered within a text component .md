# text strings must be rendered within a text component 오류

## 22.06.21 오류 발견

### 삼항 연산자

```javascript
const [openModal, setOpenModal] = useState(false);

return (
    <View>
        {openModal ? (
            // 모달창
            ) :
            (
            ''
            //빈 값
            )
        }
    </View>
)

```

이러한 경우에 위와 같은 오류가 발생하였다.

아직 원인은 정확하게 파악되지 않았지만, 1. RN에서는 삼항연산자 조건으로 상태값만 넣지 않는다. (openModal ? -> X, openModal ===true ? -> O) 2. 조건에 string 값이 아닌 다른 값을 넣으면 오류가 난다(? 정확하지 않으나 그런 글을 봄) 3.

?
