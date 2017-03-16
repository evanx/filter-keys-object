# filter-keys-object

Filter the keys of an object.

```javascript
module.exports = (object, filterKeyValue) => Object.keys(object).filter(
    key => filterKeyValue(key, object[key])
)
```

<hr>

https://twitter.com/@evanxsummers
