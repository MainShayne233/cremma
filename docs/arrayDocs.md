## Functions

<dl>
<dt><a href="#dropAtIndex">dropAtIndex(array)</a> ⇒ <code>array</code></dt>
<dd><p>Returns the array with the element at the specified index dropped</p>
</dd>
<dt><a href="#equivalent">equivalent(array1, array2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if the arrays are equivalent, false otherwise (alias for object.equivalent)</p>
</dd>
<dt><a href="#last">last(array)</a></dt>
<dd><p>Returns the last element in an array</p>
</dd>
<dt><a href="#sort">sort(array, sortFunc)</a></dt>
<dd><p>Sort function that uses boolean return values from the sort function to determine sorting
Default sorting function is (x, y) =&gt; x &lt; y</p>
</dd>
</dl>

<a name="dropAtIndex"></a>

## dropAtIndex(array) ⇒ <code>array</code>
Returns the array with the element at the specified index dropped

**Kind**: global function  
**Params**: <code>number</code> index - the index of the element to be droppped  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | the array to have the element dropped from |

**Example**  
```js
dropAtIndex([1, 2, 3], 1)
//=> [1, 3]
```
<a name="equivalent"></a>

## equivalent(array1, array2) ⇒ <code>boolean</code>
Returns true if the arrays are equivalent, false otherwise (alias for object.equivalent)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array1 | <code>array</code> | The first array to to be compared |
| array2 | <code>array</code> | The second array to to be compared |

**Example**  
```js
equivalent([], [])
//=> true
```
**Example**  
```js
equivalent([ [1] ], [ [2] ])
//=> false
```
<a name="last"></a>

## last(array)
Returns the last element in an array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | The array to get the last value from |

**Example**  
```js
last([1,2,3])
//=> 3
```
**Example**  
```js
last([])
//=> undefined 
```
<a name="sort"></a>

## sort(array, sortFunc)
Sort function that uses boolean return values from the sort function to determine sorting
Default sorting function is (x, y) => x < y

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | The array to be sorted |
| sortFunc | <code>func</code> | The sorting function that returns a truthy value |

**Example**  
```js
sort([5,6,3,4,8,2,9,5])
//=> [2, 3, 4, 5, 5, 6, 8, 9]
```
**Example**  
```js
sort(['woah', 'but', 'strings', 'are', 'arrays', 'already', 'woah'])
//=> ['already', 'are', 'arrays', 'but', 'strings', 'woah', 'woah']
```
