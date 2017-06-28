a = 0

b = 0


if (Math.random() == 1)
	str = "eval(\"a=a+1;\");";
else
	str = "eval(\"b=b+1;\");";

eval(str);