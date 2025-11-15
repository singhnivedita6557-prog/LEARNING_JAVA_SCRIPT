const accountId = 144553
let accountEmail = "nivi1803@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

/*
prefer not to use var because 
of issue in block scope and functional scope
*/


console.log(accountId);
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "delhi"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

