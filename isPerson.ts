type Person = {
    name:string,
    age:number,
}
function isPerson(myObj): myObj is Person{
    return (
        myObj && typeof myObj === 'object' && typeof myObj.name === "string" && typeof myObj.age === 'number'
    )
}

const person = {name:"inshiya", age: 21}
if (isPerson(person)) {
    person
  // Now TypeScript knows `person` is `{ name: string; age: number }`
}

