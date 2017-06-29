a= "1";
b= "2";
c= "3";
v = 0;

x = "if(v<100)eval(\"v=v+" + a + ";\" + x);" + "if(v<200)eval(\"v=v+" + b + ";\" + x);" + "if(v<300)eval(\"v=v+" + c + ";\" + x);";
eval(x);
