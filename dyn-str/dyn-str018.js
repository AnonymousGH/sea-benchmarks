a = 1;
str = "";

while (a < 100) {
	if (Math.random() == 1)
		str = str + "a--;";
	else
		str = str + "a++;";
		
	eval(str);
}

eval(str);