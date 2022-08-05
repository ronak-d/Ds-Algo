// ques = Reverse first N elements of a given queue star_border
// Given a queue of integer elements and an integer k, your task is to reverse first k elements of the queue, leaving the other elements in same order.

// Input Format

// The first line of input will contains an integer T denoting the no of test cases. Then T test cases follow. Each test case contains a number N followed by another number K. 
// In second line of each test case N number of elements are given in order in which they will be inserted in queue.
// The function void reverseKelementsQueue(int q[], int K) takes the queue and K as input and reverse first K elements of the queue.

// Output Format

// For each test case, you have to reverse the first k elements of queue in the array given. You are required to complete the methods given only.
// Constraints

// 1 <= T <= 10
// ﻿1 <= N <= 100
// ﻿0 <= K <= N

// Sample Input
// 2
// 4 2
// 1 2 3 4
// 5 3
// 10 20 30 40 50

// Sample Output
// 2 1 3 4
// 30 20 10 40 50

function runProgram(input){
    console.log(input);
}
if (process.env.USER === "") { // dont know what to write
  runProgram(`2
  4 2
  1 2 3 4
  5 3
  10 20 30 40 50`);         // this takes input what to run boilerplate.
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}