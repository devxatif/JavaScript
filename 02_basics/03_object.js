// singleton
// Object.creat

//object literals

const mysym = Symbol("key1")
// console.log(mysym);

const JsUser = {
    name: "atif",
    "full name" : " md atif ansari",
    [mysym]: "mykey1",
    age: 23,
    location: "jehanabad",
    email: "atif@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

// JsUser.email = "akron@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)

// JsUser.email = "jdlakron@gmail.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
    console.log(this);
    
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

