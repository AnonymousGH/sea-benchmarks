str = "";

function f(a) {
	return 1;
}

function g(a) {
	return 2;
}


if (Math.random() == 1) {
	arg = 1;
	v = "f";
} else { 
	arg = 2;
	v = "g";
}

x = 0;
str = "if(" + v + "() > 1) x=1; ";	

eval(str);