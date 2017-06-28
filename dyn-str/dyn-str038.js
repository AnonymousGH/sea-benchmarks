str = "";
i = 0;

a = 0;
b = 0;

function f() {
	a = a + 1;
}

function g() {
	b = b + 1;
}


while (i < 100) {
	str = str + "while(true){";

	if (Math.random() == 1)
		str = str + "x = f();";
	else
		str = str +  "y = g();";
	
	str = str + "}";	
	i++;
}

eval(str);
