


Describe: cardValidator()

Test: "Is the input a number"
Code: cardValidator("I'm not a number")
Expected output: "Put a number in, please"

Test: "Is everything in the input a number"
Code: cardValidator("50 fifty")
Expected output: "Put a number in, please"

Test: "Is the number 16 digits long"
Code: cardValidator("123456789012345")
Expected output: "Your number is not the correct length"

Describe: luhns()

Test: 'starting from the right, double every other digit"
Code: luhns([1,2,3,4])
Expected output: [1,4,3,8]

Test: 'If the result of the doubled digit is a double digit number, add together each digit of the double digit number."
Code: luhns([1,9,1,4])
Expected output: [1,9,1,8]













