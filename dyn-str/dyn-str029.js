str = "";
i = 0;
x=0;

while (i < 100) {
	i++;
	
	if (Math.random() == 1) 
		val = 1;
	else 
		val = 2;

	str = str + "x=x+" + val + ";";
	
}

eval(str);