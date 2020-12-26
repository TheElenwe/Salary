let prompt = require('prompt-sync')({sigint: true});
 let year = prompt("Number of years employed:");
 let number_children = prompt("Number of children:");
 let minimum_wage = prompt("Minimum wage:");

 year = parseFloat(year *20);
 number_children = parseFloat(number_children *30);
 minimum_wage = parseFloat(minimum_wage);


let total_full = (year + number_children + minimum_wage)

console.log(total_full)