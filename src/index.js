import isNullLike from 'null-like'


const isFalsy = (value) => !value

const defaultConfig = { strict: false }

export default (collection, callback, config = defaultConfig) => {
    const compactTest = config.strict ?
        isFalsy :
        isNullLike

    return collection.reduce((memo, value, index, collection) => {
        const result = callback(value, index, collection)
        if (!compactTest(result)) memo.push(result)
        return memo
    }, [])
}
