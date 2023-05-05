// task 1
function isEqual(a, b){
    if(a===b){
        return "ტოლია"
    }else{
        return "არ არის ტოლი"
    }
}

console.log(isEqual(10, "10"))
console.log(isEqual(10, 10))



// task 2
let toC = function(Fa){
    if(typeof Fa !== 'number'){
        return false
    }else{
        let celsiuis = (Fa - 32) * 5 / 9
        return celsiuis
    }
}

console.log(toC(70))
console.log(toC("70"))
console.log(toC(true))



// task 3
function calculator(a, b, operation){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return false
    }
    if(operation === "+"){
        return a + b;
    }else if(operation === "-"){
        return a - b;
    }else if(operation === "*"){
        return a * b;
    }else if(operation === "/"){
        if(b === 0){
            return "Can not divide by 0"
        }
        return a / b;
    }else if(typeof operation === "undefined"){
        return false
    }
}

console.log(calculator(2, 15, "+"))