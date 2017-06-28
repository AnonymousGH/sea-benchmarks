a = 0;
b = 0;
c = 0;
d = 0;
e = 0;

x = 'y=1;';

while (c < 100)
	c++;

if (c == 1)
	x = x + 'y=y+1;';

if (c == 2)
	x = x + 'while(true){a=a+1;}a=0;';

if (c == 3)
	x = x + 'c=c*77;';

eval(x);

