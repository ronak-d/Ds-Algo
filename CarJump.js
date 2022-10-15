/*
55. Jump Game.
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/


var canJump = function(nums) {
    let jump = nums[0];
    let reach = 0;   //2 index = 1;  // index = 3  
    
    for(i=0; i<nums.length; i++){
        
        if(jump !== 0){
           reach == nums[jump];     // 2 index 
            console.log(reach);
        }       
        else if(nums[reach] !== 0){
            reach = reach + nums[reach]  // 2 = 2+1 index 3
            console.log(reach);
        }
        else{
            return false;
        }
    
    }
}