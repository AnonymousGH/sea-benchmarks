a = new Number(0);
if (Math.random() == 1)
	body = "eval(\\\"a=new Number(5);\\\");";
else
	body = "eval(\\\"a=new Number(7);\\\");";

str = "eval(\""+ body + "\");";
eval(str);