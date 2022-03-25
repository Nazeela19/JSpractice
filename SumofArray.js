
//Calculate the sum of numbers in an array of numbers

var ar = [2, 3, 1, 5, 7, 9, 10, 15, 95];
function sumArray(ar)
{
    var sum=0;
    
    for(var i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}


var sum = sumArray(ar);
console.log("sum of numbers:"+sum);

output:
sum of numbers:147
