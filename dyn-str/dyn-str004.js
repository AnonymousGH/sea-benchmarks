
function f() {
	return 1;
}

function g() {
	return 2;
}

if (Math.random() == 1)
	str = "f";
else
	str = "g";


eval("x=" +  str + "();")
