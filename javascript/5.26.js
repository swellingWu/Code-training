//- js高级程序设计 P113

//! 返回比较值
// function createComparisonFunction(propertyName) {
//     return function(object1,object2) {
//         var value1 = object1[propertyName];
//         var value2 = object2[propertyName];

//         if(value1 < value2) {
//             return -1;
//         } else if(value1 > value2) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }
// //' test
// var data = [{name: "Zachary",age: 28},{name: "Nicholas",age: 29}];

// data.sort(createComparisonFunction("name"));//- Nicholas
// console.log(data[0].name);

// data.sort(createComparisonFunction("age"));//- Zachary
// console.log(data[0].name);


//! 将函数作为参数传递
// function callSomeFunction(someFunction,someArgument) {
//     return someFunction(someArgument)
// }

// function add10(num) {
//     return num + 10;
// }
// var result1 = callSomeFunction(add10,10);
// console.log(result1);//- 20

// function getGreeting(name) {
//     return "Hello" + name
// }

// var result2 = callSomeFunction(getGreeting," Nicholas")
// console.log(result2)// Hello Nicholas

//! 输出数组最大项
// var array = ["320032001","320032002","320032003"]
// console.log(array[(array.length)-1])


//! 解耦递归算法
// function factorial(num,date) {
//     if(num <= 1) {
//         return 1;
//     } else {
//         //' return num * factorial(num -1)
//         return num * arguments.callee(num - 1)
//     }
// }
// // console.log("length "+factorial.length);//' 2 定义的参数属于 length

// var trueFactorial = factorial;
// factorial = function() {
//     return 0;
// }
// console.log(trueFactorial(5));//- 120 函数  trueFactorial 仍然有效，指向该函数自身
// console.log(factorial(5));//- 0


//! apply()
// function sum(num1,num2) {
//     return num1+num2
// }
// function callSim(num1,num2) {
//     //' return sum.apply(this,[num1,num2]]);
//     return sum.apply(this,arguments);
// }
// console.log("end is "+callSim(10,10));
//! call 比起 apply 需要将参数全部列举出来
// function callSim1(num1,num2) {
//     return sum.call(this.arguments,num1,num2)
// }
// console.log(callSim1(10,20));
//! 使用 apply 和 call 可以扩充函数的作用域
var color = "red"
var c = {color: "blue"}
function sayColor() {
    console.log("windows color is "+color);
}
sayColor();//' red
sayColor.call(this);//' red
console.log(c);//' blue
//- call 和 apply 可以访问 {} 的作用域