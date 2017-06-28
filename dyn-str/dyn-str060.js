str = "if(true){";

if (Math.random() == 1)
	str = str + "while";
else
	str = str + "x=15;";

str = str + "x=7;}";

first = str.substr(0, 9);
second = str.substr(14, 5);

eval(first + second);

