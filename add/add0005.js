y = 0; 
i = 0; 
z = 0;
x = '';

while (i < 100)
	i++;

if (i == 1)
	x = 'y=1;';

if (i == 2) 
	x = 'asd{S};';

if (i == 3) 
	x = 'y=y+1;';

if (i == 4) 
	x = 'z=z+1;';

if (i == 5)
	x = 'z=z*4;';

eval(x);