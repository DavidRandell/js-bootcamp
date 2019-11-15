// JavaScript uses Lexical Scoping (Static Scope)
// Global scope is all things defined outside of all code blocks.
    // So in this example only varOne is in the GLocal Scope
// In this example the if statement creates the only code block, this is in the local scope.
    // So in this example varTwo is in the Local scope, the console.log on line 15 is calling from the Global Scope therefore varTwo does not exist.

// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)


let varOne = "VarOne"

if (true) {
    console.log(varOne)
    let varTwo = "VarTwo"
    console.log(varTwo)

    if (true){
        let varFour = "varFour"
    }
}

if (true){
    let varThree = "varThree"
}

console.log(varTwo)
