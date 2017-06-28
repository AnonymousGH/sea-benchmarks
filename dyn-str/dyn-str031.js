str = "";
i = 0;

x = 0;
y = 0;

while (i < 100) {
	i++;

	if (Math.random() == 1) 
		val = 1;
	else 
		val = 2;
	
	if (Math.random() == 1) 
		v = "x";
	else 
		v = "y";

	str = str + v + "=" + v + "+" + val + ";";
	
}

eval(str);