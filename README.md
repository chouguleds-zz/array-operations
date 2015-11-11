# array-operations
`array-operations` is a JavaScript module which provides **`fastest`** functions for frequent array manipulation operations. These functions are tested against millions of elements in array and these are probably the fastest array manipulation functions present.
## Installation
```javascript
npm install array-operations
```
## Usage
```javascript
var array=require("array-operations");
```


**`min(arr);`**

Return minimum element present in the given array.
```javascript
array.min ([1, -2, 3, -4, 5]); //-4
array.min (["a", "b", "c", "A"]); //A
```

**`max(arr);`**

Return maximum element present in the given array.
```javascript
array.max ([1, -2, 3, -4, 5]); //5
array.max (["a", "b", "c", "A"]); //c
```

**`sum(arr);`**

Return sum of all the elements present in the given array.
```javascript
array.sum ([1, 2, 3, 4, 5]); //15
array.sum (["array", "-", "operations"]); //array-operations
```

**`average(arr);`**

Return average of all the elements present in the given array.
```javascript
array.average ([1, 2, 3, 4, 5]); //3
```

**`difference(arr1, arr2);`**

Return the difference of the given two array.
```javascript
array.difference ([1, 2, 3, 4, 5], [4, 5]); //[1, 2, 3]
array.difference (["hello", "user", 3, 4, 5], ["user", 4]); // ["hello", 3, 5]
```

**`union(arr1, arr2);`**

Return the union of the given two array.
```javascript
array.union ([1, 2, 3, 4, 5], [4, 5, 6, 7]); //[1, 2, 3, 4, 5, 6, 7]
array.union (["hello", "user", 3, 4, 5], [4, 5, "day"]); // ["hello", "user", 3, 4, 5,"day"]
```

**`intersection(arr1, arr2);`**

Return the intersection of the given two array.
```javascript
array.intersection ([1, 2, 3, 4, 5], [4, 5, 6, 7]); //[4, 5]
array.intersection (["hello", "user", 3], ["user", "day"]); // ["user"]
```

**`removeDuplicates(arr);`**

Return the array with unique elements.
```javascript
array.removeDuplicates ([1, 2, 2, 1, 3, 3, 4, 5]); //[1, 2, 3, 4, 5]
array.removeDuplicates (["hello", "user", "hello", 3, 3, 4]); // ["hello", "user", 3, 4]
```

**`filter(arr, function(item){
return (Boolean condition);
});`**

Filter the given array with provided Boolean condition and returns the array containing all elements satisfying given Boolean condition.
```javascript
array.filter ([1, 2, 3, 4, 5, 6], function(item){
	return (item%2===0);
}); //[2, 4, 6]

array.filter (["hello", "new", "user"], function(item){
	return (item<"new");
}); // ["hello"]
```

**`forEachPerform(arr, function(item){
return (action on every element of array);
});`**

Performs the given action on every element in the given array and returns the array containing all elements performed given action.
```javascript 
array.forEachPerform ([1, 2, 3, 4, 5], function(item){
	return (item*2);
}); //[2, 4, 6, 8, 10]

array.forEachPerform (["hello", "new", "user"], function(item){
	return (item+" ok");
}); //["hello ok", "new ok", "user ok"]
```

**`areEqual(arr1, arr2);`**

Return true if the given two array are exactly same else return false.
```javascript
array.areEqual ([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); //true
array.areEqual (["hello", "user", 3], ["hello", "user", 3]); // true
array.areEqual (["hello", "user", 3], ["hello", "user", 4]); // false
```

**`areDistinct(arr1, arr2);`**

Return true if the given two array are not exactly same else return false.
```javascript
array.areDistinct ([1, 2, 3, 4, 5], [1, 3, 2, 4, 5]); //true
array.areDistinct (["hello", "user", 3], ["hello", "user", 4]); // true
array.areDistinct (["hello", "user", 3], ["hello", "user", 3]); // false
```
