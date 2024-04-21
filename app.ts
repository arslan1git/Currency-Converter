import inquirer from "inquirer";

const currency:any = {
  USD: 1,
  PKR: 278.12,
  EUR: 0.92,
  UAE: 3.67,
  INR: 83.33,
};

let user = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Enter from Currency",
    choices: ["USD", "PKR", "EUR", "UAE", "INR"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter to Currency",
    choices: ["USD", "PKR", "EUR", "UAE", "INR"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter your amount",
  },
]);

let fromAmount = currency[user.from]
let toAmount = currency[user.to]
let amount = user.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)