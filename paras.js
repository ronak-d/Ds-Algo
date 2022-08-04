// Ques = Check for the valid Paranthesis;

const stack = [];

// let qinput = '{([]{}())}';
// let qinput = '{)';
// let str = qinput.split("");
// let input = str;
// console.log(input);

let input = ["{","{","(","[","]","{","}","(",")",")","}",] // output = false extra { ;

const Para = () =>{

    for(i=0; i<input.length; i++){

        if(input[i] == '{' || input[i] == '[' || input[i] == '('){
            stack.push(input[i]);
        }
        else if(input[i] == '}'){
            stack[stack.length-1] == "{";
            stack.pop();
        }
        else if(input[i] == ']'){
            stack[stack.length-1] == "[";
            stack.pop();
        }
        else if(input[i] == ')'){
            stack[stack.length-1] == "(";
            stack.pop();
        }else{
            continue;
        }
    }
    if(stack.length !== 0){
        console.log(stack)
        return false;
    }
    else{
        return true;
    }
}

let ques = Para();
console.log(ques);



// let OParas = ["{", "[", "("];
// let CParas = ["}", "]", ")"];
