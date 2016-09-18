
function f(x:number):void {
    var b:string[];//用来存放每一行的内容的数组
    for(var i:number =0;i<x;i++){
        var a:number = x-i-1;//某一行前面的空格数
       b[i] = " "; 
       var num:number = (i+1)*2-1;//某一行*的数量
       for(var j:number =0;j<num;j++){
           b[i] = b[i] + "*";
       }
       console.log(b[i]);
    }

    }

f(3);