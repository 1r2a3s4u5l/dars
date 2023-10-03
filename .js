let obj = {name: "Vali", age: 22, sayHello: function(){return 'sayHello'}}


// Object.defineProperties(obj, {
//     "name":{writable:false},
//     "age": {writable: true}
// })
// Object.defineProperty(obj, "name", {enumerable:false})
// Object.defineProperties(obj, {
//     "sayHello":{enumerable:false},
//     "age": {enumerable: true}
// })
// for(let key in obj){
//     console.log(obj[key]);
// }
Object.defineProperty(obj, "name", {configurable:false, enumerable: false})
// Object.defineProperty(obj, "name", { enumerable: false})
delete obj.name
console.log(obj);
for(let key in obj){
    console.log(obj[key]);
}