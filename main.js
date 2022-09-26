//1 - What to wear

/*
function clothesToWear (temperature) {
    if (temperature >= 20) {
    return "Wear shorts and a t-shirt"
}
    if (temperature <= 15) {
        return "Wear a hoodie"
}
    if (temperature <=10) {
        return "Wear a jacket"
}
}
console.log(clothesToWear (10))
console.log(clothesToWear (20))
console.log(clothesToWear (5))
 */

//2 - Dice game 🎲
//Part 1
function rollTheDice(numOfRolls) {
    let amountOfSixes = 0
    for (let i = 0; i < numOfRolls ; i++) {
        let randomNumber1 = Math.floor((Math.random() * 6) + 1);

        if (randomNumber1 === 6)
            console.log( "You just hit "+randomNumber1+"")

        else
            console.log("You hit "+randomNumber1+" Try Again");

        //Part 2

        if (randomNumber1 === 6){
            amountOfSixes++
            if (amountOfSixes === numOfRolls){
                console.log("You hit a jackpot")
            }
        }

    }
}
rollTheDice(2)


//3 - Build a sentiment analyzer

//const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

//console.log(sentimentScoreObject);


//4 -  Credit card number formatter - optional




