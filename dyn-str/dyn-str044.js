str = "if(true){";
x = 0;

if (Math.random() == 1)
	str = str + "while(x<100){";
else
	str = str + "while(x>100){";

if (Math.random() == 1) 
	str = str + "x++;}";
 else 
	str = str + "x--;}";


str = str + "}"

eval(str)