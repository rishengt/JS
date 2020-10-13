function sum(){
    var total = 0;
    for(var i = 0; i<arguments.length; i++){/**JS默认把参数都怼到一条类似array的arguments里面，arguments有array的某些性质但不全*/
        total += arguments[i];
    }
    return total;
}
console.log(sum(1,2,3));


function login(method) {
    /**这里slice不了因为arguments真的不是array
    var option = arguments.slice(1);
     */
    var options = Array.prototype.slice.call(arguments,0,3);
    console.log(method);//这里是按占位来log的，method只占了arguments的一位，所以只log了arguments[0];
    console.log(options);
}
login("Facebook",1,2,3,4,5);

//Rest Operator
function login2(webName,id,...arg){/**除去占位以后把rest的参数都怼到arg里面，所以叫rest operator。。。*/
    var options = arg.slice(0);
    console.log(webName);
    console.log(id);
    console.log(options);
}
login2("Facebook",1,2,3,4,5);