var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  let i = 0
  katzDeliLine.push(newCustomer)
  if (katzDeliLine.length === 1) {
    return "Welcome, " + newCustomer + ". You are number " + [i+1] + " in line."
  }
<<<<<<< HEAD
  else if (katzDeliLine.length > 1) {
=======
  else if (katzDeliLine.length > 0) {
>>>>>>> 454d9b4e2dedee901cc658ab9c782359673089a5
        return "Welcome, " + newCustomer + ". You are number " + (newCustomer.length-1) + " in line."
  }
}

function nowServing(katzDeliLine) {
  var currentCustomer = katzDeliLine.shift()
<<<<<<< HEAD
  if(katzDeliLine.length > 1) {
=======
  if(katzDeliLine.length > 0){
>>>>>>> 454d9b4e2dedee901cc658ab9c782359673089a5
     return 'Currently serving ' + currentCustomer +'.' ;
}    else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

<<<<<<< HEAD
=======

>>>>>>> 454d9b4e2dedee901cc658ab9c782359673089a5
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var people = []
    for (var i = 0; i < katzDeliLine.length; i++) {
       people.push((i+1) +  ". " + katzDeliLine[i]) ;
    } 
  return  "The line is currently: " + people.join(", ")
  }
}