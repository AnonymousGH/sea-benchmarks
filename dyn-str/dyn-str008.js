
function NewNumber(a) {
	this.a = a;
}

str = "N";

if (Math.random() == 1)
	str = str + "umber";
else
	str = str + "ewNumber";

if (Math.random() == 1)
	arg = "5";
else
	arg = "-5";

eval("x = new " + str + "(" +  arg + ");");
