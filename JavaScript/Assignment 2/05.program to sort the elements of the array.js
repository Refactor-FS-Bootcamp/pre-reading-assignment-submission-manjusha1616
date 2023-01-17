//program to sort the elements of the array

function Sort(arr) 
{
    for (let i = 1; i < arr.length; i++) 
    {
      let current = arr[i];
      let j = i - 1;

      while (arr[j] > current && j >= 0) 
      {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = current;
    }
    console.log(arr);
  }

  arr = [67,9,64,34,29,87,0];
  Sort(arr);