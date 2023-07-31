function revString(str){
    return str.split("").reverse().join("");
}

var inputString="Hello M**herF**k**";
var reservedString=revString(inputString);
console.log("Reversed string is: "+ reservedString);