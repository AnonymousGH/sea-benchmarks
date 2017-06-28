x = {a:0};
str = "x.a=x.a+1;if(x.a<3){str=\"x.a=x.a+1;\"+str;eval(str);}";
eval(str);
