if (Math.random() == 1) {
	v = "x";
	val = "true";
} else {
	v = "y";
	val = "false";
}

eval(v + "=" + val + "||" + val);
