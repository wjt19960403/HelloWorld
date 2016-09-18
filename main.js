function f(x) {
    var b; //用来存放每一行的内容的数组
    for (var i = 0; i < x; i++) {
        var a = x - i - 1; //某一行前面的空格数
        b[i] = " ";
        var num = (i + 1) * 2 - 1; //某一行*的数量
        for (var j = 0; j < num; j++) {
            b[i] = b[i] + "*";
        }
        console.log(b[i]);
    }
}
f(3);
