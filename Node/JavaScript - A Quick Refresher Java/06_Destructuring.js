const person = {
    "name" : "Rishika",
    "age" : 21,
    greet(){
        console.log("Hi, I am " + this.name);
    }
}

const printName = (personData) => {
    console.log(personData.name)
}
printName(person) //Rishika

//Destructure Objects

//We can set properties of object in argument of function

const printPersonData = ({age, name}) => {
    console.log(name) 
    console.log(age) 
}
printPersonData(person) //Rishika\n21 

//Assign objects's matching fields to variable with same name
let {name, age} = person;
console.log(name + " *** " + age) //Rishika *** 21

//Destructure Array

const hobbies = ['sports', 'reading', 'cooking']
const [hobby] = hobbies;
console.log(hobby) //sports
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby2, hobby3) //sports reading cooking
