const arr = [1, 2, 3]

console.log(arr)

function addIntoArray(arr){
    arr.pop()
    arr.push(11)
    arr.push(22)
}
addIntoArray(arr)
console.log(arr)

//here we declare arr as const, it means address of arr can't be changed.. doesn't mean values and size can't be changed

//following is not possible, beacuse arr is const, so the address to which arr is pointing can't be changed.

arr = arr.map((ele) => ele + 2) //not allowed
console.log(arr) 

arr = [7, 8]; //not allowed

