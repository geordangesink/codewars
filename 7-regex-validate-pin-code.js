/*
JavaScript

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pin) {
    try{
    return (( pin.match(/\d+/)[0].length == 4 && pin.split("").length == 4 ) || ( pin.match(/\d+/)[0].length == 6 && pin.split("").length == 6)) ? true : false;
      }
    catch{
      return false;
    }
  }