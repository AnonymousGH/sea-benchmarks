var obj = {a_field: 1, b_field:2, c_field : 3};

sum = 0;
for (var x in obj)
	eval("sum = sum + obj." + x + ";");



