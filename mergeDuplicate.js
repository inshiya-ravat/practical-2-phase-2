// Create merge function that accepts data like below and merges them by given    customerId
const arr = [
    { customerId: 5, minutes: 45, utensils: ['table'] },
    { customerId: 3, minutes: 120, utensils: ['chopsticks'] },
    { customerId: 9, minutes: 15, utensils: ['spoon'] },
    { customerId: 3, minutes: 90, utensils: ['fork', 'knife'] },
    { customerId: 3, minutes: 180, utensils: ['plate'] },
    { customerId: 6, minutes: 180, utensils: ['bowl'] },
    { customerId: 6, minutes: 180, utensils: ['glass'] },
]
  
  //result should be like below
//   [
//     { customerId: 5, minutes: 45, utensils: ['table'] },
//     { customerId: 3, minutes: 390, utensils: ['chopsticks', 'fork', 'knife', 'plate'] },
//     { customerId: 9, minutes: 15, utensils: ['spoon'] },
//     { customerId: 6, minutes: 360, utensils: ['bowl', 'glass'] }
//   ]

function mergeDuplicateKey(arr){
    const map = new Map()
    const newArr = []
    for ( const element of arr){
        if(map.has(element.customerId)){
            const storedElement = map.get(element.customerId)
            element.minutes = element.minutes + storedElement.minutes
            element.utensils.unshift(...storedElement.utensils)
            map.set(element.customerId,element)
        }else{
            map.set(element.customerId, element)
        }
    }
    for(const [key,value] of map){
        newArr.push(value)
    }
    return newArr
}

console.log(mergeDuplicateKey(arr))
