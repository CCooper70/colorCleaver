const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
// let color1 = getInput(1)
// let color2 = getInput(2)
// if(color1 === undefined && color2 === undefined){
    // console.log("please enter colors")
// }else if(color2 === undefined && color1 === "purple"){
//    console.log("red and blue make purple, yay!")
    //check if color1 is valid secondary
    //deconstruct color
    //console.log("user only gave one color")
// } else if(color1 === red ||color2 === blue){
    // console.lot("user gave two different colors")
    //make sure both are different valid priamarys
    //construct colors
// }else{
// }

if(color1 === undefined && color2 === undefined){
    console.log ("You must submit at least one color.")
}

if(color2 === undefined){
    if(isValidSecondary(color1)){
    let results = colorDeconstructor(color1)
        console.log(color1 + " deconstructs into " + results + ".")
    }else {
        console.log("please submit a valid secondary color")
    }
}else{//if user inputs multiple values
    if(isValidPrimary(color1) && isValidPrimary(color2)){ //check to see if both valid primarys
        if(color1 !== color2){
        let result = colorCombinator(color1, color2)
        console.log(color1 + "and " + color2 + " combined makes " + result)
        }else{
            console.log("please enter two DIFFEERENT primary colors")
        }
        } else{
            console.log("please enter two valid primary colors")
}
}







