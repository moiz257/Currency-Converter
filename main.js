#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.hex("#F99427")("                       !CURRENCY CONVERTER!                       "));
const currency = {
    USD: 1,
    EUR: 0.74,
    GBP: 0.91,
    PKR: 279
};
let converterans = await inquirer.prompt([
    {
        name: "convert",
        message: chalk.bold.hex("#FFA533")("\nSELECT CURRENCY YOU WANT TO CONVERT"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR"]
    },
    {
        name: "into",
        message: chalk.bold.hex("#FFA533")("\nSELECT CURRENCY YOU WANT TO CONVERT INTO"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR"]
    },
    {
        name: "amount",
        message: chalk.bold.hex("#FFA533")("ENTER YOUR AMOUNT"),
        type: "number",
    }
]);
let convertans = currency[converterans.convert];
let amountinto = currency[converterans.into];
let amountans = converterans.amount;
let baseamount = amountans / convertans;
let convertedamount = baseamount * amountinto;
console.log(chalk.bold.underline.cyanBright(convertedamount));
console.log(chalk.bold.hex("#F99427")("            !THANK YOU FOR USING OUR CURRENCY CONVERTER!            "));
