//spread operator

let hobbiesForPerson1 = ['playing', 'reading']

//case: Person 2 has same hobbies as Person 1, and Person 2 has one more hobby 'Cooking'
//We have to use hobbiesForPerson1 to make Person 2's hobbies
//for that we have to copy all hobby of person 1 and need to push 'Cooking'
//we can do this easily by spread operator
let hobbiesForPerson2 = [...hobbiesForPerson1, 'Cooking'];
console.log(hobbiesForPerson1) //[ 'playing', 'reading' ]
console.log(hobbiesForPerson2) //[ 'playing', 'reading', 'Cooking' ]

//If we do this without spread operator we get nested array
let tempHobbies = [hobbiesForPerson1, 'Cooking']
console.log(tempHobbies) //[ [ 'playing', 'reading' ], 'Cooking' ]

//Examples to demonstrate use of spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log(arr1) //[ 1, 2, 3, 4 ]
console.log(arr2) //[ 1, 2, 3, 4 ]

//use spread operator to copy array
let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4.push(4)
console.log(arr3) //[ 1, 2, 3 ]
console.log(arr4) //[ 1, 2, 3, 4 ]

//Same with the object

let obj1 = {
    "a" : "apple",
    "b" : "bat"
}
let obj2 = obj1;
obj2.b = "ball"
console.log(obj1) //{ a: 'apple', b: 'ball' }
console.log(obj2) //{ a: 'apple', b: 'ball' }

//use spread operator to copy object
let obj3 = {
    "a" : "apple",
    "b" : "bat"
}
let obj4 = {...obj3};
obj4.b = "ball"
console.log(obj3) //{ a: 'apple', b: 'bat' }
console.log(obj4) //{ a: 'apple', b: 'ball' }

console.log("*********************************************")

//Rest Operator 

//case: write a function which converts arguments in array

let toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}
console.log(toArray(1, 2, 3))

//what if i have 10 or 100 or 1000 arguments, you don't know how many arguments user is going to pass
toArray = (...args) => { //here args is an array
    return args
}
console.log(toArray(1, 2, 3, 4, 5, 6, 7, 8, 9 ,10))