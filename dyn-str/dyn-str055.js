
if (Math.random() == 1) {
	x = "a:1, b:3";
	p = "a";
} else {
	x = "a:-2, b:9";
	p = "b";
}

eval(p + "={" + x + "}; v = a." + p);