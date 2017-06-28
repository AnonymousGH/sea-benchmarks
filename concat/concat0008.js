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

if (c == 4)
	x = x + 'if(true){a=c*a;c=b+71;}';

if (c == 5)
	x = x + 'if(7>5){c=b*17;}';

if (c == 6)
	x = x + 'if(5==7){e=e*17;}e=0;';

if (c == 7)
	x = x + 'a=b*5;';

if (c == 8)
	x = x + 'a=5*2;';


eval(x);

