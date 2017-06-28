
obj = {a:1, b:"y", c:"z"};

str = "if (obj.a<100){str=\"obj.a=obj.a+1;\"+str; eval(str);}";
eval(str);