
// Function Declaration
function greet1(name) {
    console.log("Hello, " + name + "!");
} 

greet1("janavi");

// Function Expression
const greet=function(){
    console.log("Hello");
}   
greet();

// Arrow Function
const add=(a,b)=>{
    return a+b;
};
console.log(add(5,3));


//anonymous function
const greet2=function(){
    console.log("Hello, World!");
}
greet2();

//callback function
function greet3(name, callback){
    console.log("Hello, " + name + "!");
    callback();
}  

//callback  
function sayGoodbye(){
    console.log("Goodbye!");
}   
greet3("janavi", sayGoodbye);

