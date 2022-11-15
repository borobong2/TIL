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
