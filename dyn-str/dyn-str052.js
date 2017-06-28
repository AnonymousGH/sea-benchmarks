
if (Math.random() == 1)
	x = "a:1, b:3";
else
	x = "a:2";

eval("a={" + x + "}");

v = a.a; // v = [1,2]