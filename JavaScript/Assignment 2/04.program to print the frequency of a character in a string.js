//program to print the frequency of a character in a string

let string = "hello world, welcome to javascript";
let char = "o";
let count = 0;

for(let i=0; i<string.length; i++)
{
    if(string[i]==char)
    {
        count++;
    }
}

console.log(`Frequency of ${char} in string ${string} is ${count}`);