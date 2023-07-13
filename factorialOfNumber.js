function factorial(num) {
    //if (num === 0 || num === 1): This condition checks if the input number num is either 0 or 1.
    // The factorial of 0 and 1 is defined as 1.
    // If the input number matches either of these values, the function immediately returns 1.
    if (num === 0 || num === 1) {
        return 1;
    }
    //The code executes return num * factorial(num - 1).
    // This line is the recursive part of the function, where it calls itself with the argument num - 1.
    // The purpose of this line is to calculate the factorial of num by multiplying it with the factorial of num - 1.
    //     For example, if num is 5, the code will return 5 * factorial(4).
    //     Then, for factorial(4), it will return 4 * factorial(3).
    //     This process continues until factorial(1) is reached, which returns 1 as per the base case.
    //     The values are then propagated back up the call stack, multiplying each number until the final factorial of num is obtained.
    return num * factorial(num - 1);
    //The result of the recursive call, num * factorial(num - 1), is returned as the final result of the factorial function.
}

console.log(factorial(5));
//Finally, console.log(factorial(5)); calls the factorial function, passing the number 5 as an argument.
// The function calculates the factorial of 5, which is 5 * 4 * 3 * 2 * 1 = 120, and returns the result.
// The value 120 is then printed to the console.
//In summary, the code uses recursion to calculate the factorial of a given number by repeatedly multiplying the number with the factorial of the previous number until the base case of 0 or 1 is reached.