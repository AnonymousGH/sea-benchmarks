function f(a) {
	if (a == undefined)
		return -1;
	else
		return a;
}

function h(b) {
	if (b == undefined)
		return -2;
	else
		return b;
}

str = "x=";

if (Math.random() == 1)
	str = str + "f";
else
	str = str + "h";

if (Math.random() == 1)
	str = str + "();";
else
	str = str + "(5);";

eval(str);