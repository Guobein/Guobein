//toString
var ary = [1, [2, [3, [4, 5]]], 6];
console.log(ary.toString())
let newArr = ary.toString().split(',')
console.log(newArr)

//递归
var ary = [1, [2, [3, [4, 5]]], 6];
let newArr = [];
function even (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
		 	even(arr[i])
		} else {
		  	newArr.push(arr[i])
		}
	}
}
even(ary)
console.log(newArr)