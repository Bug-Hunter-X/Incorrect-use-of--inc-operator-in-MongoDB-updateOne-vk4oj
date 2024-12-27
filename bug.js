```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: '1' } });
```