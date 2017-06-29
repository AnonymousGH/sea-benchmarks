a=0;
b=0;

if (Math.random() == 1)
	body = "a++;";
else
	body = "b++;";

str ="eval(\""+ body + "\");";
eval(str);