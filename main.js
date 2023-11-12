let fruit = ["tao", "le", "chuoi"];
// console.log (fruit[0])
let fruits = [["grape", 15], ["apple", 10]];
let grape = fruits [0];
let apple = fruits [1];
// console.log ("I have " + grape[1] + " " + grape[0]);
for (let i = 0; i < fruits.length; i++) {
    console.log ("I have " + fruits[i][1] + " " + fruits[i][0]+ "s")
}
let i = 0
while (i < fruits.length) {
    console.log ("I have " + fruits[i][1] + " " + fruits[i][0]+ "s")
    i++
}

let person = {
    // key: value ,
    fname: "jjdwian",
    age :1000000000000000,
    add: 'HN'
}
person.job = "teacher"
person.add = 'ND'
delete person.job

console.log (person)
console.log (person.fname)

console.log (person['age'])

for (key in person) {
    console.log (typeof key)
    console.log (person [key])
}

let numbers = [10, 20, 30, 40]
for (number in numbers) {
    console.log (numbers[number])
}
let str = 'no_MindX'
for (char in str) {
    console.log (str[char])
}
for (value of numbers) {
    console.log (value)
}
for (value of str) {
    console.log (value)
}
for (value of fruits) {
    console.log ("I have " + value[1] + " " + value[0] + "s")
}
var myDog = {
    name: 'stupid',
    legs: 4,
    friends: 'bones',
}

