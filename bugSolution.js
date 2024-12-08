```javascript
// Correct usage of $in operator with an array containing null values.  Checks for null separately if needed.
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });
```