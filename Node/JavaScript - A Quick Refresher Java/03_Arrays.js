const types = ['string', 1, true]

const hobbies = ['sports', 'reading', 'travelling']
for(let hobby of hobbies){
    console.log(hobby);
}

console.log('***************************************')

let updatedHobbies = hobbies.map((hobby)=>{
    switch(hobby){
        case 'sports':
            return 'playing football'
        case 'reading':
            return 'reading novels'
        case 'travelling':
            return 'travelling at historical places'
    }
})

for(let hobby of updatedHobbies){
    console.log(hobby);
}

console.log('***************************************')

// map
let arr = [1, 2, 3, 4, 5]
//add 2 in each element
arr = arr.map((num) => num+2)
console.log(arr)

console.log('***************************************')

// filter
arr = [1, 2, 3, 4, 5]
//get list of odd numbers from arr
arr = arr.filter((num) => num % 2 != 0)
console.log(arr)
