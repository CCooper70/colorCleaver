const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
let color1 = getInput(1)
let color2 = getInput(2)
if(color1 === undefined && color2 === undefined){
    console.log("please enter colors")
}else if(color2 === undefined && color1 === "purple"){
   console.log("red and blue make purple, yay!")
    //check if color1 is valid secondary
    //deconstruct color
    //console.log("user only gave one color")
} else if(color1 ===  && color2 === ){
    console.lot("user gave two different colors")
    //make sure both are different valid priamarys
    //construct colors
}else{

}
