a = 1;
b = 1;

str = "";

while (a < 100) {
	if (Math.random() == 1)
		str = str + "b--;";
	else
		str = str + "a++;";
		
	eval(str);
}

eval(str);