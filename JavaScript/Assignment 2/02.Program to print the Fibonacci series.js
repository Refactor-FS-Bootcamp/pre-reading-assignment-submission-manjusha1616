//Program to print the Fibonacci series

var t1 = 0, t2 = 1, i;
var nextTerm = t1 + t2;

console.log(`Fibonacci Series: \n%d\n%d `, t1, t2);

  for (i = 3; i <= 20; ++i) 
  {
    console.log(`%d `, nextTerm);
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
  }