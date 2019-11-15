// Variable Shadowing - You can declare same named variables as long as they are in a different scope.

// GLobal
    // Local
        // Local
    // Local

//let name = "Dave"

if (true) {
    //let name = "Owen"
    if (true) {
        // In this case, with the previous 2 let declarations commented out,
        // this program will create what is called a "Leaked Variable"
        // it's best to acoid creating leaked variables in the Global by declaring it ... somewhere
        // like this  let name = "Jane"
        name = "Jane"
        console.log(name)
    }
}   

if (true) {
    console.log(name)
}