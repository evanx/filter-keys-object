
module.exports = (object, filterKeyValue) => Object.keys(object).filter(
    key => filterKeyValue(key, object[key])
)
