# vim

## !유의 사항: vscode vim을 사용하는 것으로 실제로는 다를 수 있음

#### 추가 셋팅

```javascript
"vim.easymotion": true,
  "vim.incsearch": true,
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.hlsearch": true,
  "vim.insertModeKeyBindings": [
    {
      "before": ["j", "j"],
      "after": ["<Esc>"]
    }
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "d"],
      "after": ["d", "d"]
    },
    {
      "before": ["<C-n>"],
      "commands": [":nohl"]
    },
    {
      "before": ["K"],
      "commands": ["lineBreakInsert"],
      "silent": true
    }
  ],
  "vim.leader": "<space>",
  "vim.handleKeys": {
    "<C-a>": false,
    // "<C-f>": false
	},
```

### 입력모드 들어가기

- i (현재 커서 앞으로)
- a (현재 커서 뒤로)
- I (현재 커서가 있는 줄 맨 앞으로)
- A (현재 커서가 있는 줄 맨 뒤로)
- o (다음줄)

### 페이지 이동

- :page (해당 페이지 이동)
- gg (현재 페이지 맨 위로 이동)
- G (현재 페이지 맨 뒤로 이동)
- ctrl + e (한 줄 아래로)
- ctrl + y (한 줄 위로)

### 현재 줄에서 이동

- ^ (현재 줄 맨 앞으로 이동)
- $ (현재 줄 맨 뒤로 이동)

### 현재 커서가 있는 줄에서 글자 찾기

1. f 누르고 찾고 싶은 단어 입력
2. 계속 찾고 싶으면 ;

### 지우기

- x (한글자 지우기기
- dw (현재 커서부터 단어의 끝까지 지우기)
- d (선택된 visual line 삭제)
- dd (한개의 라인 지우기)
- 숫자 + dd (원하는 숫자만큼 라인 지우기)
- D (현재 커서의 뒤편 모두 삭제)

### 작업 취소

- u (가장 최근에 사용한 명령 취소)
- ctrl + r (재작업)

### 비주얼 모드

- v (일반 비주얼 모드)
- x 삭제
- y 복사
- V (줄단위 비주얼 모드)
- ctrl+v (비주얼 블럭 모드)
- gg + V(v) + G (ctrl + a 전체 선택기능)

### 단어 선택하기

- v + i + w (현재 커서가 있는 단어 선택)
- v + i + ( (현재 괄호 있는 단어 선택)
- v + i + ' (현재 ''안에 있는 단어 선택)
- y + i + w ('(', ") (현재 커서, 괄호, 따옴표 안에 있는 단어 복사)
- c + i + w (현재 단어 커서에 있는 단어 삭제함과 동시에 입력모드로 진입)

### 단어 바꾸기

- :%s/변경할 단어/변경 된 단어/c(g) (c: 한개씩 변경, g: 한번에 반경)
  경

### 화면 분할

- : + v + s (화면 수평 분할)
- : + s + p (화면 수직 분할)
- ctrl + w + 원하는 방향키 (화면 커서 )
- : + enew (왼쪽에 빈 화면 생김)

### 찾기

- f + 문자 (해당 문자열 같은 줄에서 찾음)

### 작업 자동화

- q + 버튼 (녹화 하기) 보통 qq 누름 (q라는 키에 작동 녹화)
- @ + 버튼 (해당 작업 실행)
- @@ (이전 작업 반복)
- 횟수 + @@ (여러번 녹화 반복)
