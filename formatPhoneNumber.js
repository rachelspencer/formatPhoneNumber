//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//Example
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//The returned format must be correct in order to complete this challenge.

//Don't forget the space after the closing parentheses!

//ES6 arrow function
const phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const formatPhoneNumber = arr => {
    const areaCode = arr.slice(0,3).join("")
    const middleDigits = arr.slice(3,6).join("")
    const lastDigits = arr.slice(6).join("")

   return formattedNum = `(${areaCode}) ${middleDigits}-${lastDigits}`
};

console.log(formatPhoneNumber(phoneNumber));