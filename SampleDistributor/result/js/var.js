//1.面试：请问你对js 作用域怎么理解？
// 作用域： 变量的生存环境
// 1. 全局作用域  window
// 2. 函数作用域
// 3. 全局作用域包含函数作用域
// 4. 函数作用域它里面的变量可以访问到全局作用域中的变量
// ，但是反之不行
// 5. 变量提升， 赋值语句最后生效
// 6. 定义了一个变量，如果它没有被赋值，它是属于undefined
// 7. 函数里面的形参是属于函数作用域中的
// 8. 变量提升，但是有优先级关系, 函数>函数形参>普通变量
// 9. 延长作用域， 闭包
// 10. 闭包核心核心思想：函数调用时，在函数被声明的地方，通过作用域一层一层往外找
window.a = 1;
var a = 2; //全局作用域
function name(){
	var a; //函数作用域  
	alert(a); //undefined
	a = 4;
}

function name2(){
	//var a;
	alert(a); //undefined
	var a = 4;
}

function name3(a){
	//function a ()
	//a = 7; 
	//var a 
	var a = 5;
	alert(a); //函数
	var a= 5;
	function a(){

	}
}
//name3中的作用域变量
// 1.函数形参
// 2.自己定义的变量
name3(7)

//
var mame = 3;
function name5(name){
	var name = 4;
	function getname(){
		alert(name);
	}
	return getname
}
var ohername = name5('gongyifeng')
ohername('yifeng');

function getname(){
	alert(name);
}
getname();
var name = '7'
var obj = {
	name: 'gongyifeng',
	getName: function(){
		alert(this.name);
	}
}
obj.getName()

var otherName = obj.getName
// var otherName = function(){
// 	alert(this.name);
// }
otherName()