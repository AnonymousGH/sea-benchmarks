y = 0; 
i = 0; 
z = 0;
x = '';
a = 0;
b = true;
c = 0;

while (i < 100)
	i++;

if (i == 1)
	x='y=1;';

if (i == 2)
	x='asd{S};';

if (i == 3)
	x='y=y+1;';

if (i == 4)
	x='z=z+1;';

if (i == 5)
	x='z=z*4;';

if (i == 6)
	x='y=y*4;';

if (i == 7)
	x='if(y<10){y=y*71;}';

if (i == 8)
	x='while(y<10){y=y*71;}';

if (i == 9)
	x='while(y<10){y=y*71;z=5}';

if (i == 10)
	x='y=y*4;';

if (i == 11)
	x='if(y<10){y=y*71;}';

if (i == 12)
	x='while(y<123){y=y+71;y=y*51;}';

if (i == 13)
	x='y=10;';

if (i == 14)
	x='y=y+1;';

if (i == 15)
	x='y=5*5;';

if (i == 16)
	x='y=z+1;';

eval(x);