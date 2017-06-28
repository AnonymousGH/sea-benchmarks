str = "if(";
x = 0;

if (Math.random() == 1)
	str = str + "true)";
else
	str = str + "false)";
		
str = str + "{x = 1;}";
eval(str);
