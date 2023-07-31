let units=600;
let charge;
if(units<=200){
    charge="10 Rs per unit"
}
else if(units<=400){
    charge="20 RS per unit"
}
else{
    charge="25Rs per unit"
}
console.log("The charge is "+ charge);