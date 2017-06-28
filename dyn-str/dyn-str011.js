function foo(f, v) {
	if (Math.random() == 1)
		return eval(f);
	else {
		if (Math.random() == 1) 
			str = "+=";
		else
			str = "=";
		
		eval (f + str + v);
	}
}

x = 0;
foo("x", 42);