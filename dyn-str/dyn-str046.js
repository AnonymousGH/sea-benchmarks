str = "while(";

x = 101;
y = -101;

if (Math.random() == 1) 
	v = "x";
 else 
	v = "y";


str = str + v + ">100){" + v + "--;}"

eval(str)