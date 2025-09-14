const names = require('./const')
const sayWe = require('./func')
const data = require('./alternative')
//method 1 using arrow function (ES6)
// const sayWe = (name) =>{
//     console.log(`Welecome ${name} To Our WebSite`)
// }
// method 2 using traditional function
// function sayhi(name)
// {
//     console.log(`hi ${name}`)
// }
console.log(data.signleperson)
sayWe(names.n1)
sayWe(names.n2)
sayWe(names.n3)
