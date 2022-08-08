// Ques - Find the pair in an arr where output = 0;

let arr = [-5,-4,-3,-4,4,-5,3];
// how many pairs are there which will be paired causes 0;
// maintain counter for that pair.

// approach - Brute force

const findP = ()=>{
    let count = 0;

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){

            if(arr[i] - arr[j] == 0){

                console.log(`${arr[i]} - ${arr[j]} = 0`) // shows which pair is havong 0 as output.

                count++;
            }
            else{
                continue;
            }
        }
    }
    return count;
}

let iszero = findP(arr);
console.log(iszero);