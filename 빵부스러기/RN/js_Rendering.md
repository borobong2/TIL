# rendering 이슈?

```javascript
//기존 -> 값이 리턴되기 전에 return 해버림
getWeeklySummary = async(item: any) => {

  let dailyCompletion = [];
  const logs = await this.props.LogStore.getWeeklyLogs();
  let temp = moment(fromDate);
  ...
  내용
  ...
  return dailyCompletion;

  };


// 수정 후 -> 정상 작동
getWeeklyLog = async () => {
    const logs = await this.props.LogStore.getWeeklyLogs();
    return logs;
  };

getWeeklySummary = (item: any) => {

  let dailyCompletion = [];
  const logs = this.getWeeklyLog(fromDate);
  ...
  내용
  ...
  return dailyCompletion;

  };


```
