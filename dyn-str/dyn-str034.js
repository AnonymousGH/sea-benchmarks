str = "";
i = 0;

function f() {
	return 1;
}

function g() {
	return 2;
}


while (i < 100) {
	i++;
	
	if (Math.random() == 1) 
		v = "f";
	else 
		v = "g";

	str = str + "x=" + v + "() +" + v + "();";	
}

eval(str);