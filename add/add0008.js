y = 0; 
i = 0; 
z = 0;
x = '';

while (i < 100)
	i++;

if (i == 1) 
	x='y=1;';

if (i == 1) 
	x='asd{S};';

if (i == 2) 
	x='y=y+1;';

if (i == 3) 
	x='z=z+1;';

if (i == 4)  
	x='z=z*4;';

if (i == 5)  
	x='y=y*4;';

if (i == 6) 
	x='if(y<10){y=y*71;}';

if (i == 7)  
	x = 'while(y<10){y=y*71;}';

if (i == 8)
	x ='y=54*y;';

eval(x);