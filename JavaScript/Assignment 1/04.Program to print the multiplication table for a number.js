//Program to print the multiplication table for a number

function multi_Table(No)
{
    console.log(`\nThe table of number ${No} => `);
    for(let i=1;i<=10;i++)
    {
        console.log(`${i*No}`);
    }
}

multi_Table(5);
multi_Table(29);