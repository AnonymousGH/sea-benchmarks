o = {a: "f" , b: "g" , c: "h"};

function f() {
	return 5;
}

function g() {
	return 10;
}

function h() {
	return 15;
}

x = 0;
for (var i in o) 
	eval("x = x + " + o[i] + "();");