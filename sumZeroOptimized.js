// Ques - Find the pair in an arr where output = 0;

let arr = [-5,-4,-3,-4,4,-5,3];

// how many pairs are there which will be paired resulting 0;
// maintain counter for that pair.

function sumzero(arr) {

    let left = 0;
    let right = arr.length-1;
    let counter = 0;

    while(left < right){

        let sumpair = arr[left]+arr[right];

        if(sumpair === 0){
            counter++;
            return (arr[left],arr[right]);
        }
        else if(sumpair > 0){

        }
    }

}