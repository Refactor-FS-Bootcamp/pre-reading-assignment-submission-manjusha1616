//Program to Check if a Number is prime or not

function PrimeOrNot(No)
{   
    let flag=0, i;

    for(i=2;i<=No/2;i++)    
    {    
        if(No%i==0)    
        {    
            console.log(`The Number ${No} is Not Prime`);   
            flag=1;    
            break;    
        }    
    }    
    if(flag==0)    
    {
        console.log(`The Number ${No} is Prime`);
    }     
}

PrimeOrNot(56);
PrimeOrNot(23);