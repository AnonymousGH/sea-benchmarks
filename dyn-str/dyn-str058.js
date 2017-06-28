lstr = "if(true){";

if (Math.random() == 1)
	str = str + "x=7;}}";
else
	str = str + "x=5;}}";

str = str.substr(0, 14);
eval(str);

