var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
  // remove extra characters
  let phone = line.replace(/[^\d]/g, "");

  if (phone.length == 10) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1$2$3");
  }
  
  return "No number was found";

    // !!!! IMPLEMENT ME

    // Come up with the phone regex

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
