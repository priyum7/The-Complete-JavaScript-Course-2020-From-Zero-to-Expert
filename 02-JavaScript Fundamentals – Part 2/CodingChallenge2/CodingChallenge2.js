/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

function calcTip(bills) {
    let tips = [];
    for (let i = 0; i < bills.length; i++) {
        tips.push(bills[i] + ((bills[i] >= 50 && bills[i] <= 300) ? bills[i] * 0.15 : bills[i] * 0.20));
    }
    return tips;
}

bills = [];
let n = prompt("Enter size of array");
for (let i = 0; i < n; i++) {
    bills[i] = Number(prompt(`Enter array element ${i + 1}`));
}
console.log(calcTip(bills));
