str = "";
i = 0;

function f(a) {
	return a;
}

function g(a) {
	return a*2;
}


while (i < 100) {
	i++;
	
	if (Math.random() == 1) {
		arg = 1;
		v = "f";
	} else { 
		arg = 2;
		v = "g";
	}
	
	str = str + "x=" + v + "(" + arg + ");";	
}

eval(str);