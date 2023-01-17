//Program to find whether the string is palindrome or not

function check_palindrome( str )
{
	let j = str.length -1;
	for( let i = 0 ; i < j/2 ;i++)
	{
		let x = str[i] ;
		let y = str[j-i];
		if( x != y)
		{
    		return false;
		}
	}
	return true;	
}
	
function is_palindrome( str )
{
	let ans = check_palindrome(str);
	
	if( ans == true )
	{
		console.log(`string ${str} is palindrome `);
	}
	else
	{
		console.log(`string ${str} not a palindrome`);
	}
}

let s1 = "dad";
let s2 = "cat"
is_palindrome(s1);
is_palindrome(s2)

