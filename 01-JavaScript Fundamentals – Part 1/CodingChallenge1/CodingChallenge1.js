/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/


let markMass = window.prompt("Enter Mark's Mass");
let markHeight = window.prompt("Enter Mark's Height");

let johnMass = window.prompt("Enter John's Mass");
let johnHeight = window.prompt("Enter John's Height");

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

let markHigherBMI;

if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log("Mark's BMI is greater")
}
else {
    markHigherBMI = false;
    console.log("John's BMI is greater")
}
