//! 判断数是否为浮点数
function testEven(n) {
    return n % 2 == 0
    //' 为什么是 == 或者 ==== 之间有什么区别
    //- 当使用 == 时会进行数据类型的转换,0=false，而 === 会直接进行数据类型之间的比较 0!==false
}
if (testEven(0.5) == true) {
    console.log("正确的");
} else {
    console.log("错误的");
}