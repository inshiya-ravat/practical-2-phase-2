type Person = {
    name:string,
    age:number,
    city:string
}
function isPerson(myObj): myObj is Person{
    return (
        myObj && typeof myObj === 'object' && typeof myObj.name === "string" && typeof myObj.age === 'number'
    )
}

const person = "hfu"
console.log(isPerson(person))
// if (isPerson(person)) {
//     person
//   // Now TypeScript knows `person` is `{ name: string; age: number }`
// }

