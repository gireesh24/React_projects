let arr=[1,2,3,4,5,6]

let totalsum=arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc
})
console.log(totalsum)

console.log(arr)