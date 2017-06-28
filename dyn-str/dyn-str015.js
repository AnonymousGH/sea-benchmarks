str = "x=\"Hello ";

if (Math.random() == 1)
	str = str + "world";
else
	str = str + " Mark";
str = str + "\";";

eval(str);