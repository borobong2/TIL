git 변경 전으로 바꾸기

알아본 이유: 테스트를 하거나, 임의로 변경한 다음에 원래대로 돌리고 싶을때가 있다.
그럴때 git lens를 이용하여 이전 버전을 찾아 돌리곤 했는데, 더 좋은 방법을 찾았다.

git checkout -- "변경할 파일명"

이렇게 하면 커밋하기 전 파일로 빠르게 복원된다!
