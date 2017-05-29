## Functions

<dl>
<dt><a href="#isNumberString">isNumberString()</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if string is a valid number, false otherwise.</p>
</dd>
<dt><a href="#titleize">titleize()</a> ⇒ <code>string</code></dt>
<dd><p>Returns the string with upcased words and space delimited</p>
</dd>
<dt><a href="#titleizeWord">titleizeWord()</a> ⇒ <code>string</code></dt>
<dd><p>Returns the string all lowercase with the first character upcased</p>
</dd>
</dl>

<a name="isNumberString"></a>

## isNumberString() ⇒ <code>boolean</code>
Returns true if string is a valid number, false otherwise.

**Kind**: global function  
**Params**: <code>string</code> string - String to check if number  
**Example**  
```js
isNumberString('123')
//=> true
```
**Example**  
```js
isNumberString('w0ah')
//=> false
```
<a name="titleize"></a>

## titleize() ⇒ <code>string</code>
Returns the string with upcased words and space delimited

**Kind**: global function  
**Params**: <code>string</code> string - The string to be titleized  
**Example**  
```js
titleize('super_duper_snake_case')
//=> 'Super Duper Snake Case'
```
**Example**  
```js
titleize('crazyCamelCase')
//=> 'Crazy Camel Case'
```
**Example**  
```js
titleize('normal spaces and stuff')
//=> 'Normal Spaces And Stuff'
```
<a name="titleizeWord"></a>

## titleizeWord() ⇒ <code>string</code>
Returns the string all lowercase with the first character upcased

**Kind**: global function  
**Params**: <code>string</code> word - The word to upcase  
**Example**  
```js
titleizeWord('woah')
//=> 'Woah'
```
**Example**  
```js
titleizeWord('WOAH')
//=> 'Woah'
```
