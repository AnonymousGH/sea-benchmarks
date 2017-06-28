y = 0; 
i = 0; 
z = 0; 
a = 0; 
c = 0;
b = true;
x = '';
n = new Number(0);

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
	x='if(y<10){y=y*71;};';

if (i == 7)
	x='while(y<10){y=y*71;}';

if (i == 8)
	x='while(y<10){y=y*71;z=5;}';

if (i == 9)
	x='y=y*4;';

if (i == 10)
	x='if(y<10){y=y*71;}';

if (i == 11)
	x='while(y<123){y=y+71;y=y*51;}';

if (i == 12)
	x='y=10;';

if (i == 13)
	x='y=y+1;';

if (i == 14)
	x='y=5*5;';

if (i == 15)
	x='y=z+1;';

if (i == 16)
	x='y=z*5;';

if (i == 17)
	x='while(y<1213){y=z*71;y=z*51;}';

if (i == 18)
	x='y=10*z*z;';

if (i == 19)
	x='b=true&&false;';

if (i == 20)
	x='b=false&&false;';

if (i == 21)
	x='c=c+1;';

if (i == 22)
	x='while(true){c=c+1;}';

if (i == 23)
	x='if(true){c=c*5;}';

if (i == 24)
	x='if(false){c=c*5;}';

if (i == 25)
	x='if(true){c=a+112;}';

if (i == 26)
	x='if(true){c=c*1234;}';

if (i == 27)
	x='if(true)while(y<10)y=a*2;';

if (i == 28)
	x='while(true)if(a<10)a=y*2;';

if (i == 29)
	x='z=z*171;';

if (i == 30)
	x='z=z*171;z=z*232;';

if (i == 31)
	x='while(true){z=z*171;z=z*232;}';

if (i == 32)
	x='while(true){z=z*171;}';

if (i == 33)
	x='if(a<10){while(true)if(a<10)a=y*2;}';

if (i == 34)
	x='if(a>10){c=a;c=c*5;}';

if (i == 35)
	x='if(true){c=a*-112;}';

if (i == 36)
	x='if(true){while(true){c=a*-112;}}';

if (i == 37)
	x='while(z>0||z<0){z=z*171;z=z*232;}';

if (i == 38)
	x='if(z>1){z=z*171;}';

if (i == 39)
	x='while(true){if(true)while(y<10)y=a*2;}';

if (i == 40)
	x='while(5<7){if(6>1){c=c*5;}}';

if (i == 41)
	x='b=false&&false;while(!b){a=a-1;}';

if (i == 42)
	x='while(b){if(true)while(y<10)y=a*2;}';

if (i == 43)
	x='while(y<11)if(y<123){y=y+71;y=y*51;}';

if (i == 44)
	x='while(y<400)if(y<123){y=y*4;}';

if (i == 45)
	x='while(Math.random()==1)if(Math.random()==1){y=y*-4;}';

if (i == 46)
	x='while(Math.random()==1)if(y<123){y=y*4;}';

if (i == 47)
	x='n=new Number(5);';

if (i == 48)
	x='n=new Number(5)+new Number(12);';

if (i == 49)
	x='n=n -1;';

if (i == 50)
	x='if(Math.random()!=1)n=n*2;';

if (i == 51)
	x='while(true){if(Math.random()!=1)n=n*2;}';

eval(x);