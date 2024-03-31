#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 7860;
console.log(`pin is 7860`);
// pin is provided to check program in npx
let pinCode = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter your pin"
    }]);
if (pinCode.pin === myPin) {
    console.log("pin is correct, please proceed.");
    let operations = await inquirer.prompt([{
            type: "list",
            name: "choices",
            choices: ["withdrawl", "check balance", "fast cash"]
        }]);
    if (operations.choices === "withdrawl") {
        let withdrawls = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "cash withdrawls required"
        });
        let balance = myBalance - withdrawls.amount;
        if (withdrawls.amount > myBalance) {
            console.log("your balance is insufficient");
        }
        else {
            console.log(`your balance is : Rs ${balance}`);
        }
    }
    else if (operations.choices === "check balance") {
        console.log(`your balance is Rs ${myBalance}`);
    }
    else if (operations.choices === "fast cash") {
        let fastCash = await inquirer.prompt({
            name: "cash",
            type: "list",
            choices: ["1000", "2000", "15000"],
            
            message: "enter amount "
        });
        let remainingCash = myBalance - fastCash.cash;
        if (fastCash.cash > myBalance) {
            console.log("Your balance is insufficient");
        }
        else {
            console.log(`your remaing balance is Rs ${remainingCash}`);
        }
    }
}
else {
    console.log("you enter wrong pin");
}
