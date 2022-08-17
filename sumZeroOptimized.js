// Ques - Find the pair in an arr where output = 0;

let arr = [-5,-4,-3,4,-5,3];

// how many pairs are there which will be paired resulting 0;
// maintain counter for that pair.

// Using Two Pointer 
// Time complexity will be O(N) because running on a single loop;

function sumzero(arr) {

    let left = 0;
    let right = arr.length-1;
    let counter = 0;

    let farr = arr.sort((a,b)=>(a-b))
    console.log(farr);

    while(left < right){

        let sumpair = farr[left]+farr[right];

        if(sumpair === 0){
            console.log(farr[left],farr[right]);
            return counter++;
        }
        else if(sumpair > 0){
            right--;
        }
        else{
            left++;
        }
    }

}

// sumzero(arr)
let ans = sumzero(arr);
console.log(ans);


// this only working for single pair work on multiple pair