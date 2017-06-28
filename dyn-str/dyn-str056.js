b = {a:1, b:1};

if (Math.random() == 1) {
	x = "a:1, b:3";
	p = "a";
} else {
	x = "a:-2, b:9";
	p = "b";
}

eval("b={" + x + "}; b." + p + "= b." + p);
