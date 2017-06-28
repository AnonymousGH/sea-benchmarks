
function NewNumber(a) {
	this.a = a;
}


str = "N";

if (Math.random() == 1)
	str = str + "umber";
else
	str = str + "ewNumber";

eval("x = new " + str + "(100);");
