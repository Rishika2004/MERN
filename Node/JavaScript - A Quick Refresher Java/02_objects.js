//create object
//key-value pair between curly braces

const person = {
    name : 'Rishika',
    age : 21,
    greet1: () => {
        return "Hi, I am " + this.name
    },
    greet2() {
        return "Hi, I am " + this.name
    },
    greet3 : function(){
        return "Hi, I am " + this.name
    }
}

console.log(person.greet1())
console.log(person.greet2())
console.log(person.greet3())

