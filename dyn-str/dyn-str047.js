str = "while(";

x = 101;
y = -101;

if (Math.random() == 1) { 
	v = "x";
	s = "++";
} else {
	v = "y";
	s = "--";
}



str = str + v + ">100){" + v + s + ";}";

eval(str)