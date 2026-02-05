/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticket = 800;
let age = 70;
let isStudent = false;
if (age < 10) {
    console.log("Ticket Free");
} else if (isStudent === true) {
    let disCount = ticket * 50 / 100;
    let payAmount = ticket - disCount;
    console.log("50% discount", payAmount);
} else if (age >= 60) {
    let disCount = ticket * 15 / 100;
    let payAmount = ticket - disCount;
    console.log("15% discount", payAmount);
} else {
    console.log("Regular ticket fare :", ticket);
}