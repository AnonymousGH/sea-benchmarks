
if (Math.random() == 1)
	str = "if";
else
	str = "while";


x = 0;
eval(str + "(true){x = x + 1;}")
