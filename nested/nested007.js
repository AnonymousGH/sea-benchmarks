a=0;
str = "a++;"
	  + "if(a < 3)"
	  + "eval(\"a++;\" + str);";
eval(str);