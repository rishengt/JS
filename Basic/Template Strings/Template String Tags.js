function h1(strings, ...values) {
    var body = "";
    for(var i = 0; i<strings.length; i++){
        body += strings[i] + (values[i]|| "");
    }
    return `<h1>${body}</h1>`;
}

var name = "TRS";
var place = "world";
console.log(h1`hello ${place} my name is ${name}`); //<h1>hello world my name is TRS</h1>