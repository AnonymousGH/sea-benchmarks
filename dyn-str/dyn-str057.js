str = "if(true){";

x = 0;

if (Math.random() == 1)
	str = str + "if()";
else
	str = str + "x=5;";

first = str.substr(0, 9);

result = first + "x=7;}";

eval(result);