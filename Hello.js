'use strict';
         //----exercise (1)-----//
console.log('Hello , World');//English
console.log('Selam ,Dünya');//Turkish
console.log('Hallo ,Wereld');//Nederlands
console.log('Marhaban ,Bllalam');//Arabic

         //----exercise (2)-----//
console.log("I'm awesome");
         //----exercise (3)-----//
let x;
console.log('the value of my variable x will be: Undefined'); 
console.log(x);
x = 2018;
console.log('the value of x is : "2018"');
console.log(x);
        //----exercise (4)-----//
let y = 'hi there!';
console.log('the value of y is : "hi there!"');
console.log(y);
y = 'see you soon!';
console.log('the value of the variable y changed to : " see you soon!"');
console.log(y);
        //----exercise (5)-----//
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
if (z > a) {
    console.log(z);
}
else {
    console.log(a);  
}
        //----exercise (6)-----//
let cars = [];
console.log('the value of the Array cars is : empty! "[]"');
console.log(cars);
let animals = ['dogs', 'cats', 'hamsters', 'birds', 'lions'];
console.log(animals);
animals.push('baby pig');
console.log(animals);
        //----exercise (7)-----//
let myString = "this is a test";
console.log(myString);
console.log(myString.length);
        //----exercise (8)-----//
let foo = 3;
console.log('the value of my variable foo is : ' + foo);
let x = 'fadi';
console.log('the value of my variable fadi is : ' + x);
let y = ['2', '5', '90'];
console.log('the value of my variable y is : ' + y);
let s = 30.50;
console.log('the value of my variable s is : ' + s);
console.log(' the type of the variable foo is:' + typeof (foo));
console.log(' the type of the variable x is:' + typeof (x));
console.log(' the type of the variable y is:' + typeof (y));
console.log(' the type of the variable s is:' + typeof (s));
if (typeof foo == typeof x) {
        console.log(foo + ' + ' + x + ' ' + 'SAME TYPE');     
 }
else {
        console.log('Not the SAME TYPE');
}
if (typeof foo == typeof y) {
        console.log(foo + ' + ' + y + ' ' + 'SAME TYPE');
}
else {
        console.log('Not the SAME TYPE');
}
if (typeof foo == typeof s) {
        console.log(foo + ' + ' + s + ' ' + 'SAME TYPE');
}
else {
        console.log('Not the SAME TYPE');
}
if (typeof x == typeof y) {
        console.log(x + ' + ' + y + ' ' + 'SAME TYPE');
}
else {
        console.log('Not the SAME TYPE');
}
if (typeof x == typeof s) {
        console.log(x + ' + ' + s + ' ' + 'SAME TYPE');
}
else {
        console.log('Not the SAME TYPE');
}
if (typeof y == typeof s) {
        console.log(y + ' + ' + s + ' ' + 'SAME TYPE');
}
else {
        console.log('Not the SAME TYPE');
}
                //----exercise (9)-----//
let x = 7;
x = x % 3;
console.log(' variable  x holds the value of number 7 ');
console.log('% (modulus) will give us the remainder number after dividing 7 on 3');
console.log(' 7 / 3 = 2 the remainder is 1');
                //----exercise (10)-----//
let foo = [];
console.log(foo);
console.log('foo now is an empty Array');
foo.push('Hello world!');
foo.push(77);
foo.push('see you soon');
foo.push(99);
console.log('Now the Array "foo" holds numbers and strings inside');
console.log(foo);
console.log('can we compare infinity ? ');
x = 6 / 0;
y = 10 / 0;
if (x === y)
{
        console.log('We can compare infinity')
}
else
{
        console.log('We can not compare infinity')
};
console.log('we have variable x and y which holds an infinite number ,type of x and y is: '+typeof(x)+' & '+typeof(y));
console.log('infinite number + infinite number = infinity numbers');
console.log('but infinite number - infinite number is :');
console.log(x - y);
console.log('Thank you for checking the assignments');