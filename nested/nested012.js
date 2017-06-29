a=0;
b=0;

if (Math.random() == 1)
	init = "a--;";
else
	init = "b--;";


if (Math.random() == 1)
	body = "eval(\\\"a++;\\\");";
else
	body = "eval(\\\"b++;\\\");";

str = init + "eval(\""+ body + "\");";
eval(str);