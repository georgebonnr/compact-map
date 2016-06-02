import isNullLike from 'null-like'

export default (collection, callback) => collection.reduce((memo, value, index, collection) => {
    const result = callback(value, index, collection)
    if (!isNullLike(result)) memo.push(result)
    return memo
}, [])
