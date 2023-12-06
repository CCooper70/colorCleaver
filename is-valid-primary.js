/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(color1){
  if(color1 === "red"){
    return true
  }if(color1 === "yellow"){
    return true
}if(color1 === "blue"){
  return true
}if (color1 === "orange"){
  return false
}if (color1 === "blorgon"){
  return false
}if (color1 === "ted"){
  return false
}
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
