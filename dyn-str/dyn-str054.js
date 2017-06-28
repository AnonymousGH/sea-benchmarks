
if (Math.random() == 1) {
	x = "a:1, b:3";
	p = "a";
} else {
	x = "a:2";
	p = "b";
}

eval("a={" + x + "}; v = a." + p);