const str = "Bhagesh"
const reversedStr = str.split('').reverse().join('')

if(str === reversedStr) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}