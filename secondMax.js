// ques - find the third largest number;

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,22,34,222];
const arr2 = [414,2,43,43,5,26,71,85,9,10,11,12,22,341,222];
// arr output = 34 = second maxm in an arr.

// as this is sorted array we can find the maxm from arr.length-1
// and second maxm can be the arr.length-2;
// but what if arr is not sorted okay we have to code along with this situation...


function smax(arr) {
 let smax = 0;   //Second Maximum Number

//  Now we know that there will be an highest no which will always be founded at last,
// now to find the last second we have run a loop to .length-1 as it will not reach to max value only.

    for(i=0; i<arr.length-1; i++) {
        if(arr[i] > smax ){
            smax = arr[i];
        }
    }
    return smax;
}

let findsecondmax = smax(arr2);
console.log(findsecondmax)