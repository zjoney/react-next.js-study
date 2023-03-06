
let obj = {name:'1',age:10};
let str = JSON.stringify(obj);
console.log(str);
let obj2 = JSON.parse(str);

console.log(obj,obj2);