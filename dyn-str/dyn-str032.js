str = "";
i = 0;

x = "";
y = "";

while (i < 100) {
	i++;

	if (Math.random() == 1) 
		val = "\"hello\"";
	else 
		val = "\"world\"";;
	
	if (Math.random() == 1) 
		v = "x";
	else 
		v = "y";

	str = str + v + "=" + v + "+" + val + ";";
	
}

eval(str);