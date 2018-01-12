"use strict"
//1//
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(5, 10, 5));
//2//
function colorCar(color) {
    return "a " + color + " car";
}
console.log(colorCar("blue"));
//3//


let obj = { name: 'fadi', age: 24 };
function printObj(obj) {
    return obj.name +" "+ obj.age;
}
console.log(printObj(obj));

//4//
function vehicleType(color,code) {
    if (code===1) {
        console.log("a "+color + " car");
    }
    else {
        console.log("a "+color + " motorbike");
    }

}
vehicleType("red ", 1);
//5//
console.log(3 === 3 ? true : false);
//console.log(3 === 3);

//6//
function vehicle(color,age,type) {
    if (age<=1&&type<=5) {
        console.log("a "+color, " used", " car");
    } else {
        console.log("a "+color, " new", " motorbike");
    }
}
vehicle("blue", 2, 6);
//7//
const vehiclesList = ["motorbike", "caravan", "bike", "scooter", "car"];
//8//
console.log(vehiclesList[2]);//bike is the third element it is at position 2 in the Array ,we start counting from 0 inside the Array.
//9//
function vehicle(color, age, list) {
    let vehiclesList = ["motorbike", "caravan", "bike", "scooter", "car"];
    if (age<=1) {
        console.log("a " + color + "New " + vehiclesList[list]);
    }
    else {
        console.log("a " + color + "Used " + vehiclesList[list]);
    }
}
vehicle("blue", 1, 1);
//10//
var adv = "";
for (let index = 0; index < vehiclesList.length; index++) {

    adv = adv + vehiclesList[index]+"s" + ", ";

}

console.log(`Amazing Joe's Garage, we service`, adv+" .");
//11//

console.log(vehiclesList.push('Rocket'));// not sure if it is right !//
//12//
const emptyObj = [
    {},{},{}
];
//13 & 14 //
let Hyf = [
    { teachersName: 'Jim', language: 'javaScript' },
    { teachersName: 'Unmesh-Joshi', language: 'Command-Line' },
    { teachersName: 'Ariadne-Gomes', language: 'HTML&CSS' },
    { teachersName: 'Philipp-Beau', language: 'HTML&CSS' },
];
console.log(Hyf);
//15
let x = [1, 2, 3];
let y = [1, 2, 3];
for (let i = 0; i < x.length; i++) {
    if (x[i]==y[i]) {
        console.log(true);
    } else {
        console.log(false);
    }
    
}
console.log("== operator  checks the values of the two objects ,and the ===  checks the values and the type of the objects.");
//16//
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o3);
console.log('changing o2 will change the value of o3 because it is assigned to it ');
o2.fadi = "hi there";
console.log(o3);
console.log('changing o1 will not change o3 because it is not assigned to it ');
o1.car = "Woow";
console.log(o3);
console.log("the order of the assigning dose matter because assigning starts from right to left in this example the value of o2 what ever it was it will be assigned to o3 so that mean the value of o3 will be changed in this case");
//17//
let bar = 42;
console.log("it will return string type because it starts from right to left so the first typeof will check bar whish holds value of number(42)and then the next one will check the word number it self so it is string now ");
console.log(typeof typeof bar);
// THE END // 