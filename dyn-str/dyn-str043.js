str = "if(true){";
x = 0;

if (Math.random() == 1)
	str = str + "while(true){";
else
	str = str + "while(false){";

if (Math.random() == 1) 
	str = str + "x++;}";
 else 
	str = str + "x--;}";


str = str + "}"

eval(str)