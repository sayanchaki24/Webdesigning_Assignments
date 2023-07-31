let nos=[1,2,3,4,5];

//shift method
console.log("The initial array is: ",nos);
let fno=nos.shift()
console.log("Array after shift: ", nos);
console.log("The no got shifted: ",fno);


//unshift
nos.unshift(10);
console.log("Array after unshift: ",nos);

let nums=[1,2,3,4,5];
console.log("Array is: ",nums);
nums.splice(1,3);           //index number, number of no. you want to remove
console.log("Array after splice: ",nums);

let lol=[1,2,3,4,5];
lol.splice(2,0,57);//index no. , no of element to replace, numbers to insert
console.log("Array after splice insertion", nums);







