// core types
//number
let age: number = 25;
// string
let myName: string = "hanna";
// boolean
let isCool: boolean = true;
// object 
const person: object = { name: "barb", age: 30 };
// specific object
const human: {
    name: string,
    age: number
} = {
    name: "Ola",
    age: 60
}
// arrays
let hobbies = ["sports", "cooking"];
let ages: number[] = [ 23, 34 ];
// tuples - only 2 elements
const role: [number, string] = [2, "hi"];
// .push - exception in tuples - it works
// enum { new, old } - ts type - human readable identifiers?
enum Role { ADMIN, READ_ONLY, AUTHOT }
let myRole = Role.ADMIN;
// any type - avoid using this ;)
let favouriteActivities: any[];
//union - accept 2 different types
let argument: number | string = "hello"; 
// literal types - what value/s it should hold
function combine(option: "add" | "substract") {
    console.log(option);
}
// alias type - use any name that's not a js keyword
type Combinable = number | string;
let busName: Combinable = "cool Bus";
type conversionType = "add" | "multiply";

// type of the return statement:
//here it would be inferred:
function add(n1: number, n2: number): number {
    return n1 + n2;
}
//type - void!!! - there is no return statement
function printResult(num): void {
    console.log('Result: ' + num )
}

//function type
// let combinedValues: Function;
//function types
let combinedValues: (a: number, b: number) => number;
//2 arguments that are numbers and returns a number
combinedValues = add;
combinedValues(6, 6);


