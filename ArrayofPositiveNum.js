//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
    var ar2 = [];
    
    for(var el of ar)
    {
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);

output:
[ 10, 12, 5, 90, 0, 1 ]
