const accountId = 144553
let accountEmail = "atif@gmail.com"
var accountPassword = "12345"
accountCity = "Jehanabad"

let accountState;

// accountId = 2 // not allowd

accountEmail = "jdl@gmail.com"
accountPassword= "2121212121"
accountCity = "Patna"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])