//Program to print the Factorial of a Number

function fact_No(No)
{   
    let Temp=1;
    for(let i=1;i<=No;i++)
    {
        Temp = Temp*i;
    }
    console.log(`Factorial Number Of ${No} = ${Temp}`);
}

fact_No(5);