a = 1;
str = "";

while (a < 100) {
	str += "a++;";
	eval(str);
}

eval(str);