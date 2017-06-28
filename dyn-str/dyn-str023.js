str = "function ";

if (Math.random() == 1)
	x = "f";
else
	x = "g";

if (Math.random() == 1)
	block = "s = 1;";
else
	block = "s = 2;";

eval("a=" + str + x + "(){" + block + "}");
a();

