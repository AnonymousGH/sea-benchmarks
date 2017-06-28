str = "if(true){";

if (Math.random() == 1)
	str = str + "x=1;";
else
	str = str + "x=2;";

str = str + "}"

eval(str)