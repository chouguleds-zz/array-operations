function isArray(arr) {

	if (arr.constructor === Array)
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

/*exports.sum = function(arr) {
	var result=0;
	for(var i=0;i<arr.length;i++)
		result+=arr[i];
	
	return result;
}*/