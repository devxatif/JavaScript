function sayMyName(){
    console.log("a");
    console.log("t");
    console.log("i");
    console.log("f");
    
}

// sayMyName()

const Myname = function(){
    console.log("a");
    console.log("t");
    console.log("i");
    console.log("f");
}

// console.log(Myname());
// Myname()

// function addTwoNumber(num1, num2){

//     console.log(num1 + num2);

// }

// addTwoNumber(2,3)

// function addTwoNumber(num1, num2){
//     // let result = num1 + num2
//     // return result
//     return num1 + num2
// }

// const result = addTwoNumber(2,3)
// console.log(result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// // const username = loginUserMessage()
// const username = loginUserMessage("atif")
// console.log(username);


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// ...num1 is for rest operator and “Collect all remaining arguments into an array.”

// console.log(calculateCartPrice(200, 400, 500, 2000));
// val1 = 200, val2 = 400 and num1 = [ 500, 2000 ]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondElement(anyArray){
    return anyArray[1]
}

// console.log(returnSecondElement(myNewArray));
// console.log(returnSecondElement([100, 200, 300, 400]));

