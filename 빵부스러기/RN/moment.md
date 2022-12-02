# moment

```javascript
const now = moment();
const today = now.format("YYYY-MM-DD");
const newYearEventRespawn = this.props.LocalStore.newYearEventRespawn;
if (newyearEvent && !newYearEventRespawn) {
  this.props.LocalStore.setShowNewYearEventPopup(true);
}
if (moment(newYearEventRespawn).diff(moment(today), "Days") <= 0) {
  this.props.LocalStore.setShowNewYearEventPopup(true);
}
```
