let temp = 101

if (temp >= 32 && temp <= 80) {
    console.log('Go ahead, it is nice outside')
}

if (temp < 0 || temp > 100){
    console.log('Do not go outside!')
}

// Challenge Area
let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("Only offer up Vegan")
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("Offer up some Vegan options")
} else {
    console.log("Offer up anything")
}