console.log("This tutorial is for understandng Async_Await");

async function func(){
    console.log("Inside function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before Response...");
    const users = await response.json();
    console.log("User resolved");
    return users;
    // return "Sanjay Paul";
}


console.log("Before calling function");
const a = func();
console.log("After calling function");
console.log(a);
a.then((data)=>console.log(data));
console.log("Last line of this js file");
