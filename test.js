
const filterKeys = require('./index');

console.log(filterKeys({
    include: true,
    exclude: true,
    prop: 'include'
}, (key, value) => {
    return key === 'include' || value === 'include'
}));
