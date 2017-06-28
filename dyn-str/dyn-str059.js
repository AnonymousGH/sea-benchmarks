x = 0;

if (Math.random() == 1)
	str = "while";
else
	str = "x=15;";

str = str + "x=7;";

str = str.substr(0, 3);

eval(str);
