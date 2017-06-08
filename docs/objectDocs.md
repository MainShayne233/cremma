## Functions

<dl>
<dt><a href="#diff">diff(object1, object2)</a> ⇒ <code>array.&lt;object&gt;</code></dt>
<dd><p>Returns an array of objects, where each object describes a difference between the two objects</p>
</dd>
<dt><a href="#dig">dig()</a></dt>
<dd><p>Returns the value stored in the object where the nested keys point to</p>
</dd>
<dt><a href="#digAndPut">digAndPut(object, keys, value)</a> ⇒ <code>object</code></dt>
<dd><p>Returns the object with the value put where the keys point to</p>
</dd>
<dt><a href="#equivalent">equivalent()</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if objects are equivalent, false otherwise
Equivlanet means that every value at every level is equal in both objects</p>
</dd>
<dt><a href="#groupBy">groupBy()</a> ⇒ <code>object</code></dt>
<dd><p>Returns an object of the elements grouped by the function</p>
</dd>
<dt><a href="#keyPaths">keyPaths()</a> ⇒ <code>object</code></dt>
<dd><p>Returns the keypaths for the object</p>
</dd>
<dt><a href="#merge">merge()</a> ⇒ <code>object</code></dt>
<dd><p>Merges two objects into one new object
object2 will overwrite matching keys in object1</p>
</dd>
<dt><a href="#numberKeyedObjectToArray">numberKeyedObjectToArray()</a> ⇒ <code>array</code></dt>
<dd><p>Returns the object as an array</p>
</dd>
</dl>

<a name="diff"></a>

## diff(object1, object2) ⇒ <code>array.&lt;object&gt;</code>
Returns an array of objects, where each object describes a difference between the two objects

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object1 | <code>object</code> | First object to diff |
| object2 | <code>object</code> | Second object to diff |

**Example**  
```js
diff({name: 'john'}, {name: 'simon'})
//=> [ {key: 'name', firstValue: 'john', secondValue: 'simon'} ]
```
<a name="dig"></a>

## dig()
Returns the value stored in the object where the nested keys point to

**Kind**: global function  
**Params**: <code>object</code> object - Object with value to dig out  
**Params**: <code>array</code> - nestedKeys - Can be array or '.' delimited string  
**Example**  
```js
dig({a: {b: {c: 'd'}}}, ['a', 'b', 'c'])
//=> 'd'
```
**Example**  
```js
dig({a: {b: {c: 'd'}}}, 'a.b.c')
//=> 'd'
```
<a name="digAndPut"></a>

## digAndPut(object, keys, value) ⇒ <code>object</code>
Returns the object with the value put where the keys point to

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The reference object |
| keys | <code>array.&lt;string&gt;</code> | The keys that point to the location to put the value |
| value |  | The value to put into the new object |

**Example**  
```js
digAndPut({a: {b: 'c'}}, ['a', 'b'], 'd')
//=> {a: {b: 'd'}}
```
**Example**  
```js
digAndPut({a: {b: 'c'}}, 'a.b', 'd')
//=> {a: {b: 'd'}}
```
<a name="equivalent"></a>

## equivalent() ⇒ <code>boolean</code>
Returns true if objects are equivalent, false otherwise
Equivlanet means that every value at every level is equal in both objects

**Kind**: global function  
**Params**: <code>object</code> object1 - First object  
**Params**: <code>object</code> object2 - Second object  
**Example**  
```js
equivalent({hi: {how: 'are you'}}, {hi: {how: 'are you'}})
//=> true
```
**Example**  
```js
equivalent({hi: {how: 'are you'}}, {hi: {how: 'art thou?'}})
//=> false
```
<a name="groupBy"></a>

## groupBy() ⇒ <code>object</code>
Returns an object of the elements grouped by the function

**Kind**: global function  
**Params**: <code>array</code> elements - the elements to be grouped  
**Params**: <code>function</code> fun - the function who's return value will be the key in the return object  
**Example**  
```js
groupBy([1, 1, 2, 3, 5, 8, 11], (val) => val % 2 ? 'odd' : 'even' )
//=> {odd: [1, 1, 3, 5, 11], even: [2, 8]}
```
<a name="keyPaths"></a>

## keyPaths() ⇒ <code>object</code>
Returns the keypaths for the object

**Kind**: global function  
**Params**: <code>object</code> object - The object to get the keys from  
**Example**  
```js
keyPaths( { a: { b: ['c'] } } )
//=> [ ['a'], ['a', 'b'], ['a', 'b', '0']  ]
```
<a name="merge"></a>

## merge() ⇒ <code>object</code>
Merges two objects into one new object
object2 will overwrite matching keys in object1

**Kind**: global function  
**Params**: <code>object</code> object1 - First Object  
**Params**: <code>object</code> object2 - Second Object  
**Example**  
```js
merge({woah: 'we', seeya: 'soon'}, {done: 'merged', seeya: 'later'})
//=> {woah: 'we', done: 'merged', seeya: 'later'}
```
<a name="numberKeyedObjectToArray"></a>

## numberKeyedObjectToArray() ⇒ <code>array</code>
Returns the object as an array

**Kind**: global function  
**Params**: <code>object</code> object - Object with numbers as keys  
**Example**  
```js
numberKeyedObjectToArray({1: 'one', 2: 'two'})
//=> [ , 'one', 'two' ]
```
