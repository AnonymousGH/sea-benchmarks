
if (Math.random() == 1)
	str = "if";
else
	str = "while";

if (Math.random() == 1)
	guard = "(true)";
else
	guard = "(false)";


x = 0;
eval(str + guard + "{x = x + 1;}")
