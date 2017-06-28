
x = 5;

if (Math.random() == 1) 
	s = "++";
 else 
	s = "=x+3";

str = "if(x>100){x" + s + ";}";

eval(str)