// Array Deep Flatten with Depth Limit

// const input = [1, [2, [3, [4, [5]]]]];

function deepFlatten(arr,depth){
    const flatArray = []
    function flat(arr){
        for(const element of arr){
            if(Array.isArray(element) && depth){
                depth--
                flat(element)
            }
            else{
                flatArray.push(element)
            }
        }
    }
    flat(arr)
    return flatArray
}
console.log(deepFlatten([1, [2, [3, [4, [5]]]]], 4))
// output: [1, 2, 3, [4, [5]]]