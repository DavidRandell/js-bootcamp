let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log("Account is locked.")
} else if (userRole === 'admin') {
    console.log("Welcome Admin")
} else {
    console.log("Welcome")
}

// Challenge

let temp = 90

if (temp <= 32) {
    console.log("It is Freezing Outside!")
} else if (temp >= 80) {
    console.log("Careful, it is pretty Hot outside.")
} else {
    console.log("Go for it, it is pretty nice!")
}