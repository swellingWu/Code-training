//=> 创建一个函数，返回乘以 50 并增加 6 的值。如果输入的值是字符串，它应该返回“错误”。
function problem(x) {
    return typeof x == 'string' ? 'Error' : (x * 50 + 6)
}
console.log("输入 16 的结果为" + problem(16));