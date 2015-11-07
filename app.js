function isArray(arr) {

	if (arr.constructor === Array)
		return true;
	else
		return false;
}
function isFunction(fun) {

	if (typeof fun === "function") 
		return true;
	else
		return false;
}

exports.difference = function(arr1, arr2) {

	var array = {};
	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr2.length; i++) {
		array[arr2[i]] = arr2[i];
	}

	for (var i = 0; i < arr1.length; i++) {
		if (array[arr1[i]] === undefined)
			result.push(arr1[i])
	}
	return result;
}
exports.union = function(arr1, arr2) {

	var array = {};
	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr1.length; i++) {
		array[arr1[i]] = arr1[i];
		result.push(arr1[i])
	}

	for (var i = 0; i < arr2.length; i++) {
		if (array[arr2[i]] === undefined)
			result.push(arr2[i])
	}
	return result;
}

exports.intersection = function(arr1, arr2) {

	var array = {};
	if (!isArray(arr1) || !isArray(arr2)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr1.length; i++) {
		array[arr1[i]] = arr1[i];
	}

	for (var i = 0; i < arr2.length; i++) {
		if (array[arr2[i]] !== undefined)
			result.push(arr2[i])
	}
	return result;
}

exports.removeDuplicates = function(arr) {

	var array = {};
	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (array[arr[i]] === undefined) {
			array[arr[i]] = arr[i];
			result.push(arr[i])
		}
	}
	return result;
}

exports.filter = function(arr,condition) {

	if (!isArray(arr)) {

		throw new TypeError("Invalid argument, Please pass proper array argument");
	}

	if (!isFunction(condition)) {

		throw new TypeError("Invalid argument, Please pass proper function");
	}
	var result = [];
	for(var i=0;i<arr.length;i++)
	{
		if(condition(arr[i])){
			result.push(arr[i])
		} 
	}
	return result;
}

/*exports.sum = function(arr) {
	var result=0;
	for(var i=0;i<arr.length;i++)
		result+=arr[i];
	
	return result;
}*/