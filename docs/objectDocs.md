## Functions

<dl>
<dt><a href="#equivalent">equivalent()</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if objects are equivalent, false otherwise
Equivlanet means that every value at every level is equal in both objects</p>
</dd>
<dt><a href="#groupBy">groupBy()</a> ⇒ <code>object</code></dt>
<dd><p>Returns an object of the elements grouped by the function</p>
</dd>
<dt><a href="#merge">merge()</a> ⇒ <code>object</code></dt>
<dd><p>Merges two objects into one new object
object2 will overwrite matching keys in object1</p>
</dd>
</dl>

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
