maps and compacts at the same time.

By default compactMap filters out `null` and `undefined` but perserves falsy values.

Example 1:
```
compactMap([{foo: 0}, {foo: 'truthy'}, {foo: null}, {foo: undefined}], (value, index, coll) => value.foo)
```
returns:
```
[0, 'truthy']
```

Note that the compacting logic operates on the the return value from the mapping callback, not the original value in the source collection.

Example 2:
````
compactMap([undefined, null, false], (value, index, coll) => value + ' mapped')`
```
returns:
```
['undefined mapped', 'null mapped', 'false mapped']
```


To remove falsy values as well, pass in the options object: `{strict: true}`.

Example:
```
compactMap(
    [{foo: 0}, {foo: 'truthy'}, {foo: null}, {foo: undefined}],
    (value, index, coll) => value.foo,
    { strict: true }
)
```
returns:
`['truthy']`
