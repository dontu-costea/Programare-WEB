let array = [{x: 1, y: 2}, {x:3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

let rightArray = [];

for (i of array) {
	if(Number.isInteger(i.x) && Number.isInteger(i.y)) {
		rightArray.push(i);
	}
}

console.log(rightArray);