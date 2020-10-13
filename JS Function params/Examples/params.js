var a = 1;
var func = function (a) {
    this.a = 2;
}
func(a);
console.log(a);//变不成2因为a是primitive type；pass by value

var b = {a: 1};
var func2 = function (b) {
    b.a = 2;
}
func2(b);
console.log(b.a);//这里就变成2了因为b是object，pass by reference

var c = {a:1}
var func3 = function (c) {
    c = {a:2};
}
func3(c);
console.log(c.a);//还是1因为虽然能改变c的属性但是改变不了c的reference