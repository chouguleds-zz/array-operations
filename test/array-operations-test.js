var array = require("../app.js");
var assert = require("assert");

describe('Array-Operations', function() {

	describe('#sum()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.sum({});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return sum of the array for correct input', function() {
			assert.equal(6, array.sum([1, 2, 3]));
			assert.equal(0, array.sum([-3, -2, 5]));
		});


		it('should return 0 for the empty array', function() {
			assert.equal(0, array.sum([]));
		});

		it('should concat strings for the string array', function() {
			assert.equal("deepakchougule", array.sum(["deepak", "chougule"]));
		});

		it('should concat [Object] [Object] strings for the object array', function() {
			assert.equal("[object Object][object Object]", array.sum([{}, {}]));
		});

	});

	describe('#min()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.min({});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return min element from the array for correct input', function() {
			assert.equal(1, array.min([1, 2, 3, 4, 5]));
			assert.equal(-10, array.min([-3, -2, , -10, 3, 5]));
		});


		it('should return undefined for the empty array', function() {
			assert.equal(undefined, array.min([]));
		});

		it('should return min string for the string array', function() {
			assert.equal("Deepak", array.min(["deepak", "jigar", "onkar", "mudit", "Deepak"]));
		});

	});

	describe('#max()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.max({});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return max element from the array for correct input', function() {
			assert.equal(5, array.max([1, 2, 3, 4, 5]));
			assert.equal(5, array.max([-3, -2, , -10, 3, 5]));
		});


		it('should return undefined for the empty array', function() {
			assert.equal(undefined, array.max([]));
		});

		it('should return max string for the string array', function() {
			assert.equal("onkar", array.max(["deepak", "jigar", "onkar", "mudit", "Deepak"]));
		});

	});

	describe('#average()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.average({});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return average of the array for correct input', function() {
			assert.equal(2, array.average([1, 2, 3]));
			assert.equal(0, array.average([-3, -2, 5]));
			assert.equal(3.3333333333333335, array.average([3, 2, 5]));
		});


		it('should return 0 for the empty array', function() {
			assert.equal(0, array.average([]));
		});

		it('should throw error for non-number array', function() {
			assert.throws(function() {
				array.average([1, "deepak"]);
			}, /Array contains Non-numbers/);

		});

	});

	describe('#areEqual()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.areEqual({}, {});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return true if two array are equal', function() {
			assert.equal(true, array.areEqual([], []));
			assert.equal(true, array.areEqual([1, 2, 3], [1, 2, 3]));
			assert.equal(true, array.areEqual(["A", "b", 1], ["A", "b", 1]));
			assert.equal(true, array.areEqual(["a", "b", "c"], ["a", "b", "c"]));
		});

		it('should return false if two array are not equal', function() {
			assert.equal(false, array.areEqual([1, 2, 3], [1, 3, 2]));
			assert.equal(false, array.areEqual(["A", "b", 0], ["A", "b", 1]));
			assert.equal(false, array.areEqual(["a", "c", "b"], ["a", "b", "c"]));
		});


	});

	describe('#areDistinct()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.areDistinct({}, {});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return false if two array are equal', function() {
			assert.equal(false, array.areDistinct([], []));
			assert.equal(false, array.areDistinct([1, 2, 3], [1, 2, 3]));
			assert.equal(false, array.areDistinct(["A", "b", 1], ["A", "b", 1]));
			assert.equal(false, array.areDistinct(["a", "b", "c"], ["a", "b", "c"]));
		});

		it('should return true if two array are not equal', function() {
			assert.equal(true, array.areDistinct([1, 2, 3], [1, 3, 2]));
			assert.equal(true, array.areDistinct(["A", "b", 0], ["A", "b", 1]));
			assert.equal(true, array.areDistinct(["a", "c", "b"], ["a", "b", "c"]));
		});


	});

	describe('#forEachPerform()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.forEachPerform({}, function(item) {});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should throw type error for invalid function argument', function() {
			assert.throws(function() {
				array.forEachPerform([], {});
			}, /Invalid argument, Please pass proper function/);

		});


		it('should return array with each element performed given operation', function() {
			assert.deepEqual([2, 4, 6, 8], array.forEachPerform([1, 2, 3, 4], function(item) {
				return item * 2
			}));
			assert.deepEqual([2, 3, 4], array.forEachPerform([1, 2, 3], function(item) {
				return ++item
			}));
			assert.deepEqual(["A ok", "b ok", "c ok"], array.forEachPerform(["A", "b", "c"], function(item) {
				return (item + " ok")
			}));
			assert.deepEqual([], array.forEachPerform([], function(item) {
				return (item + " ok")
			}));
		});

	});

	describe('#filter()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.filter({}, function(item) {});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should throw type error for invalid function argument', function() {
			assert.throws(function() {
				array.filter([], {});
			}, /Invalid argument, Please pass proper function/);

		});


		it('should return array with each element sutisfying given condition', function() {
			assert.deepEqual([2, 4], array.filter([1, 2, 3, 4], function(item) {
				return item % 2 === 0
			}));
			assert.deepEqual(["a", "b"], array.filter(["a", 1, 2, "b"], function(item) {
				return typeof item === "string"
			}));

			assert.deepEqual([], array.filter([], function(item) {
				return item % 2 === 0;
			}));
		});

	});

	describe('#removeDuplicates()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.removeDuplicates({});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return array with unique element', function() {
			assert.deepEqual([1, 2, 3, 4], array.removeDuplicates([1, 2, 1, 2, 3, 4]));
			assert.deepEqual(["a", "b", "c"], array.removeDuplicates(["a", "b", "a", "b", "c"]));
			assert.deepEqual(["a", 1, 2, "b"], array.removeDuplicates(["a", 1, 2, "b", 1, 2]));
			assert.deepEqual([], array.removeDuplicates([]));
		});

	});

	describe('#intersection()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.intersection({}, {});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return intersection of two array', function() {
			assert.deepEqual([], array.intersection([], []));
			assert.deepEqual([4, 5], array.intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
			assert.deepEqual(["b", 1], array.intersection(["A", "b", 1], ["b", 1, 2]));
			assert.deepEqual(["c"], array.intersection(["a", "b", "c"], ["c", "d", "e"]));
			assert.deepEqual([1, 2, 3, 4], array.intersection([1, 2, 2, 3, 1, 2, 4], [1, 2, 3, 4, 5, 1]));
		});

	});

	describe('#union()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.union({}, {});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return union of two array', function() {
			assert.deepEqual([], array.union([], []));
			assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8], array.union([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
			assert.deepEqual(["A", "b", 1, 2], array.union(["A", "b", 1], ["b", 1, 2]));
			assert.deepEqual(["a", "b", "c", "d", "e"], array.union(["a", "b", "c"], ["c", "d", "e"]));
			assert.deepEqual([1, 2, 3, 4, 5], array.union([1, 2, 2, 3, 1, 2, 4], [1, 2, 3, 4, 5, 1]));
		});

	});

	describe('#difference()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.difference({}, {});
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return union of two array', function() {
			assert.deepEqual([], array.difference([], []));
			assert.deepEqual([], array.difference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
			assert.deepEqual(["A"], array.difference(["A", "b", 1], ["b", 1, 2]));
			assert.deepEqual(["a", "b"], array.difference(["a", "b", "c"], ["c", "d", "e"]));
		});

	});
	describe('#flatten()', function() {

		it('should throw type error for invalid array argument', function() {
			assert.throws(function() {
				array.flatten({});
			}, /Invalid argument, Please pass proper array argument/);

			assert.throws(function() {
				array.flatten({}, 2);
			}, /Invalid argument, Please pass proper array argument/);

		});

		it('should return flatten array for proper input', function() {

			assert.deepEqual([1, 2, 3, 4, 5, 6, 10, 7, 8], array.flatten([1, 2, [3, 4, [5, 6], 10], 7, 8]));
			assert.deepEqual([1, 2, 3, 4, {
				name: 'array'
			}, 6, 7, 8, 9], array.flatten([1, [2, [3, [4, {
				name: "array"
			}, 6], 7], 8], 9]));
		});
		it('should return flatten array for proper input for proper depth', function() {

			assert.deepEqual([1, 2, 3, 4, 5, 6, 10, 7, 8], array.flatten([1, 2, [3, 4, [5, 6], 10], 7, 8], 2));
			assert.deepEqual([1, 2, 3, [4, {
				name: 'array'
			}, 6], 7, 8, 9], array.flatten([1, [2, [3, [4, {
				name: "array"
			}, 6], 7], 8], 9], 2));
		});

	});

});