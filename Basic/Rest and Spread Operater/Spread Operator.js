var ar1 = [4,5,6];
var ar2 = [1,2,3, ar1];
var ar3 = [1,2,3, ...ar1];
console.log(ar2);//[ 1, 2, 3, [ 4, 5, 6 ] ]
console.log(ar3);//[ 1, 2, 3, 4, 5, 6 ]
