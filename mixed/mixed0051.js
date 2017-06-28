y = 0; 
i = 0; 
z = 0; 
a = 0; 
c = 0;
d=0;
b = true;
x = 'z=z*z;';

while (i < 100)
	i++;

if (i == 1)
	x='y=1;';

if (i == 2)
	x='asd{S};';

if (i == 3)
	x='y=y+1;';

if (i == 4)
	x='z=z+z;';

if (i == 5)
	x='z=z*4;';

if (i == 6)
	x='y=y*4;';

if (i == 7)
	x='if(y<10){y=y*71;}';

if (i == 8)
	x='while(y<10){y=y*71;}';

if (i == 9)
	x='while(y<10){y=y*71;z=5;}';

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

if (i == 17)
	x='y=z*5;';

if (i == 18)
	x='while(y<1213){y=z*71;y=z*51;}';

if (i == 19)
	x='y=10*z*z;';

if (i == 20)
	x='b=true&&false;';

if (i == 21)
	x='b=false&&false;';

if (i == 22)
	x='c=c+1;';

if (i == 23)
	x='while(true){c=c+1;}';

if (i == 24)
	x='if(true){c=c*5;}';

if (i == 25)
	x='if(true){c=a+112;}';

if (i == 26)
	x='if(true){c=c*1234;}';

if (i == 27)
	x='if(true){while(y<10){y=a*2;}}';

if (i == 28)
	x='while(true){if(a<10){a=y*2;}}';

if (i == 29)
	x='z=z*171;';

if (i == 30)
	x='z=z*171;z=z*232;';

if (i == 31)
	x='while(y==31){y=y*2;}';

if (i == 32)
	x='a=a+8;b=true;c=7*c;';

if (i == 33)
	x='a=c*a;';

if (i == 34)
	x='if (a < 100){a=y*c*a + 5;}';

if (i == 35)
	x='if(a>100){a=y-b+a+5;}';

if (i == 36)
	x = x + 'y=2*5;';

if (i == 37)
	x = x + 'while(i<10){y=2*10;z=3*y;}';

if (i == 38)
	x = x + 'if(i<42){y=z+z;z=z+3;}';

if (i == 39)
	x = x + 'while(i<42){y=z+z;z=z+3;}';

if (i == 40)
	x = x + 'if(Math.random()==1)while(i<42){y=z+z;z=z+3;}';

if (i == 41)
	x= x + 'while(Math.random()==1)if(a<100){a=y*c*a+5;}';

if (i == 42)
	x= x + 'while(Math.random()==1)if(true){c=a+112;}';

if (i == 43)
	x= x + 'while(Math.random()==1)if(true){while(true){c=c+1;}';

if (i == 44)
	x= x + 'while(a>5){if(a>100){a=y+a+5;}}';

if (i == 45)
	x = x + 'while(a>5){if(a>100){c=d*100;}}';

if (i == 46)
	x = x + 'while(i<100){i=i*i;}';

if (i == 47)
	x = x + 'if(c==0||c!=0)c=d*-900;';

if (i == 48)
	x = x + 'if(Math.random()==1){while(Math.random()==1){c=d*-900;}}';

if (i == 49)
	x = x + 'if(Math.random()==1){while(Math.random()==1){b=true||false;;}}';

if (i == 50)
	x=x + 'while(Math.random()==1){if(a>100){a=y-b+a+5;}}';

if (i == 51)
	x= x + 'while(Math.random()==1)while(y<1213){y=z*71;y=z*51;}';

if (i == 52)
	x=x+'if(b){while(y<1213){y=z*71;y=z*51;}}';

eval(x);
