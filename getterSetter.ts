// Create a type that can help us get getters and setters from any given interface

interface Attributes {  
    id: number;  
    name: string;  
    address: { 
       city: string;
       street: string; 
    };
}

   // example:
type Setters<T extends Record<string,any>> = {
    [key in keyof T as `set${Capitalize<key>}`]: ReturnType<T[key]>
}
type Getters<T extends Record<string,any>> = {
    [key in keyof T as `get${Capitalize<key>}`]: ReturnType<T[key]>
}
const attributeSetters: Setters<Attributes> = {  setAddress: ({city,street}) => null,  setId: (value) => null,  setName: (value) => null,}
   
const attributeGetters: Getters<Attributes> = {  getAddress: () => ({ city: '', street: '' }),  getId: () => 0,  getName: () => '',}