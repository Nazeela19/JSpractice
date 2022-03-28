// Implement the bubble sort algorithm for an array of numbers

var ar = [23, 1000, 1, -1, 8, 3];
console.log(ar);
bubbleSort(ar);
console.log(ar);

function bubbleSort(ar)
{
    var shouldSort = true;
    var length = ar.length;

    while(shouldSort)
    {
        shouldSort = false;
        length--;

        for(var i = 0; i < length; i++)
        {
            var a = ar[i];
            if ( a > ar[i+1] )
            {
                ar[i] = ar[i+1];
                ar[i+1] = a;
                shouldSort = true;
            }
        }
    }
}

output:
[ 23, 1000, 1, -1, 8, 3 ]
[ -1, 1, 3, 8, 23, 1000 ]
