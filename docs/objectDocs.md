## Functions

<dl>
<dt><a href="#equivalent">equivalent()</a> ⇒ <code>object</code></dt>
<dd><p>Returns true if objects are equivalent, false otherwise
Equivlanet means that every value at every level is equal in both objects</p>
</dd>
<dt><a href="#merge">merge()</a> ⇒ <code>object</code></dt>
<dd><p>Merges two objects into one new object
object2 will overwrite matching keys in object1</p>
</dd>
</dl>

<a name="equivalent"></a>

## equivalent() ⇒ <code>object</code>
Returns true if objects are equivalent, false otherwise
Equivlanet means that every value at every level is equal in both objects

**Kind**: global function  
**Params**: <code>object</code> object1 - First object  
**Params**: <code>object</code> object2 - Second object  
**Example**  
```js
equivalent({hi: 'there'}, {hi: 'there'})
//=> true
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
merge({woah: 'we'}, {done: 'merged'})
//=> {woah: 'we', done: 'merged'}
```
