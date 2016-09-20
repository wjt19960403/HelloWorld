
function f(x:number):void {
    //var b:string[]= new Array() ;//用来存放每一行的内容的数组
    var floor:string;
   // b[0] = " ";
    for(var i:number =0;i<x;i++){
       // var a:number = x-i-1;//某一行前面的空格数
       floor = "";
       var kong = x-i-1;
       for(var j:number = 0;j<kong;j++){
           floor += " ";
       }
       var xing = i*2+1;
       for(var k:number =0;k<xing;k++){
           floor += "*";
       }

       //var num:number = (i+1)*2-1;//某一行*的数量
       /* /for(var j:number =0;j<num;j++){
           b[i] = b[i] + "*";
       }*/
       console.log(floor);
    }

    }

f(5);//测试为5的时候