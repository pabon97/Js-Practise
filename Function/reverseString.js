// write a function to reverse a string
function ReverseString (string){
 let reversedString = ""
 for (let i = string.length - 1; i>=0 ; i--){
    reversedString += string[i]
 }
 return reversedString
}




console.log(ReverseString('Extraction'));
console.log(ReverseString('Notice Period'));