
obj = {a:"x", b:"y", c:"z"};

str = "";

for (var x in obj)
	str = str + obj[x] + "= 1;";


x=0;
y=0;
z=0;

eval(str);