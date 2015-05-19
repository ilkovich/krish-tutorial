/*
 * Sometimes you need a helper function to store state 
 * while doing recursion. I've started this problem with an 
 * example of a helper function. A more in depth discussion on
 * recursion and helpers, here:
 *
 * https://www.cs.umd.edu/class/fall2002/cmsc214/Tutorial/recursion2.html
 */

function min_helper(nums, currVal) {
    /*
     * Your code goes here.
     */
    return nums.length 
        ? min_helper(nums, Math.min(nums.splice(0,1)[0], currVal))
        : (currVal || null)
    ;
}

function min(nums) {
    if(!nums || nums.constructor !== Array) throw new Error("Argument exception");

    //take elements 1->end of the array and pass it 
    //the first value in the array as the minimum
    return min_helper(nums, nums.splice(0, 1)[0]);
}

module.exports = min;
