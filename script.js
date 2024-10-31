
// Mild Challenges 

/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

// 1. If divided evenly, how much would each sibling get for the week?
let numberOfSiblings = 3;
let eachGet = weeklyAllowance / numberOfSiblings;
console.log(`1. Each sibling gets: $${eachGet.toFixed(2)}`);


// 2. How many games can Jordan buy with their cut?
let jordanShare = eachGet;
let gamesAffordable = jordanShare / game; 
let jordanGames = Math.floor(gamesAffordable); 
console.log(`2. Jordan can buy: ${jordanGames} games`);

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.

let newGamePrice = game + 1; 
let newShoePrice = shoes / 2; 
console.log(`3a. New game price: $${newGamePrice.toFixed(2)}`);
console.log(`3b. New shoe price: $${newShoePrice.toFixed(2)}`);

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?

let quinn = jordanShare; 
let ricardo = jordanShare;
let combinedMoney = quinn + ricardo; 
let totalMoneyInAMonth = combinedMoney * 4; 
let shoesInAMonth = Math.floor(totalMoneyInAMonth / newShoePrice); 
console.log(`4. Quinn and Ricardo can buy ${shoesInAMonth} pairs of shoes in a month.`);

/// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?

let totalGamesTogether = Math.floor(combinedMoney / newGamePrice); 
let individualGames = jordanGames + Math.floor(quinn / newGamePrice); 
let moreGames = totalGamesTogether - individualGames; 
console.log(`5. They can buy ${moreGames} more games together.`);

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."

console.log(`6. The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}.`);

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.

let ricardoNameLength = sibling3.length; 
console.log(`7. Ricardo's name has ${ricardoNameLength} characters.`);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"

let ricardoUpperCase = sibling3.toUpperCase(); 
console.log(`8. ${ricardoUpperCase}`);

// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"

let ricardoLowerCase = sibling3.toLowerCase();

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.

let nameWithoutA = sibling3.replace(/a/gi, ''); 
console.log(`10. Without 'a': ${nameWithoutA}`);

// 11. Use console.log() and a built-in method to print out "De La Rosa"

console.log(`11. De La Rosa`);

// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => Math.floor(Math.random() * 100);
const greeting = (name) => `Hey ${name}, glad you could come!`;
const perfectRoot = (x) => {
    let root = Math.sqrt(x);
    return Math.floor(root) === root ? root : "No perfect root";
};


console.log(getRandomNum());
console.log(greeting("Alice"));
console.log(perfectRoot(16));

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.
const addNums = (x, y) => {
    let sum = x + y; 
    return sum; 
};
console.log(addNums(4, 6));

const isBeyonce = (name) => {
    if (name === "Beyonce") {
        return "Welcome Queen!"; 
    } else {
        return ` 13. Sorry!,${name}, you're not Beyonce.`; 
    }
};
// Test "Beyonce" and other names to ensure it works

console.log(isBeyonce("Beyonce"));
console.log(isBeyonce("Alice"));
/// c. If the number is even, return the number divided by 2, otherwise, return the 
const reduceEvens = (x) => {
    if (x % 2 === 0) {
        return x / 2; 
    } else {
        return x; 
    }
};
console.log(reduceEvens(10));
console.log(reduceEvens(11));

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all

const shortenString = (string) => {
    if (string.length > 10) {
        return string.slice(0, 10); 
    } else {
        return string; 
    }
};
console.log(shortenString("14a. Hello, World!"));
console.log(shortenString("14b. Short"));

// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    let burgersCount = Math.floor(budget / burger); 
    return burgersCount > 0 ? burgersCount : "15. Sorry, we have ran out of burgers"; 
};
console.log(buyBurgers(20));
console.log(buyBurgers(4));

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.

const buyMeals = (budget) => {
    let mealCost = burger + fries + soda; 
    let mealsCount = Math.floor(budget / mealCost); 
    let moneyLeft = (budget % mealCost).toFixed(2); 
    return ` 16. You can buy ${mealsCount} meals and have $${moneyLeft} left.`; 
};
console.log(buyMeals(30));
console.log(buyMeals(10));

// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
/// The larger side should be the hypotenuse  


const missingLeg = (hypotenuse, leg) => {
    let missing = Math.sqrt(hypotenuse**2 - leg**2); 
    console.log(` 17.  The missing length is: ${missing.toFixed(2)}`);
};
missingLeg(5, 3);
missingLeg(10, 6);


// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
const factorial = (x) => {
    if (x < 0) return " 18.There is no negative ##."; 
    return x === 0 ? 1 : x * factorial(x - 1); 
};
console.log(factorial(3));
console.log(factorial(5));
