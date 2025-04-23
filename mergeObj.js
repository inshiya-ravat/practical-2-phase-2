// Write a function deepMerge(obj1, obj2) that returns a new object containing all keys from obj1 and obj2.
// If a key exists in both:
// and both values are objects (but not arrays), merge them recursively.
// otherwise, use the value from obj2.
// Do not mutate obj1 or obj2.
// Example: 
const obj1 = { 
  user: { name: "Alice", age: 25 },
  role: "admin"
};
const obj2 = { 
  user: { age: 30 },
  active: true 
};

function merge(obj1,obj2){
    const tempObj = {}
    for(const [key,value] of Object.entries(obj1)){
        if(obj2.hasOwnProperty(key)){
            tempObj[key] = obj2[key]
        }else{
            tempObj[key]=value
        }
    }
    return tempObj
}
function deepMerge(obj1,obj2){
    const newObj = {}
        for(const [key,value] of Object.entries(obj1)){
            if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
                if(value && typeof value === 'object'){
                    const resultObj = merge(value,obj2[key])
                    newObj[key] = resultObj
                }else{
                    newObj[key] = value
                }
            }else{
                newObj[key] = value
            }
        }
        for(const [key,value] of Object.entries(obj2)){
            if(!newObj.hasOwnProperty(key)){
                newObj[key] = value
            }
        }
        return newObj
}
const result = deepMerge(obj1, obj2);
console.log(result)
// Output:
// {
//   user: { name: "Alice", age: 30 },
//   role: "admin",
//   active: true
// }