// create a func to buy clay
const buyClay = () => {
    //return object with no properties 
    const clay = {}
    return clay
}

// make variable out of blank object and call func
const clay = buyClay()
// see if it worked
//console.log(clay)

// create func to make pottery
const makePottery = (clay) => {
    //add a new property of shape of bowl
    clay.shape = "Bowl"
    //return clay
    return clay
}

//create a variable to call func
const pottery = makePottery(clay)
//see if it worked
//console.log(clay)

//create func to bisque
const bisqueFire = (clay) => {
    //add a new property of glaze ready and give it value of true
    clay.readyForGlazing = true
    //return clay 
    return clay
}

//make variable that calls func
const bisqued = bisqueFire(clay)
//see it works
//console.log(clay)

//create func to glaze
const glazePottery = (clay) => {
    //write a conditional that checks if clay is ready for glazing 
    if (clay.readyForGlazing === true) {
        //if true add new property named glazing
        clay.glazing = "Midnight Blue"
    }
    // if not ready to glaze write a statement
    else {
        console.log('Make sure you bisque fire the pottery before you glaze it.')
    }
    //return clay
    return clay
}

//make variable to call func
const glaze = glazePottery(clay)
//see if it works 
//console.log(clay)


//create a func to fire bowl; add to params object and temp
const finalFiring = (clay, temp) => {
    //write an if statement that relies on temp
    if (temp > 1200) {
        clay.cracked = true
    }
    else {
        clay.cracked = false
    }
    //return clay
    return clay
}

//make a variable and see if your pot is crack or not
const firedPottery1400 = finalFiring(clay, 1400)
//console.log(firedPottery1400)
const firedPottery1200 = finalFiring(clay, 1200)
console.log(firedPottery1200)

