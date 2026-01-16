const coding = [ "Js", "ruby", "Java", "python", "cpp"]

// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)


// coding.forEach((item, index, arrr)=>{
//     console.log(item, index, arrr);
    
// })


// coding.forEach((a, b, c)=>{   // a gives elem., b gives index, c gives array, -> always
//     console.log(a, b, c);
    
// })

const myCoding = [ 
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})