y = 0; 
i = 0;
x = 'y=1;';

while (i < 100)
	i++;

if (i == 1)	
	x = 'y=1;';


if (i == 2)
	x='asd{S};';


if (i == 3)	
	x = 'y=y+1;';

x = x + 'y=2*5;';
x = x + 'while(i<10){y=2*10;z=3*y;}';
x = x + 'if(i<42){y=z+z;z=z+3;}';


eval(x);

