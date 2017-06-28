str = "";
i = 0;
while (i < 100) {
	i++;
	
	if (Math.random() == 1) {
		v = "x";
		val = 1;
	} else {
		v = "y";
		val = 2;
	}

	str = str + v + "=" + val + "+" + val + ";";
	
}

eval(str);