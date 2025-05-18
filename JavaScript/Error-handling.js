console.log(1);  // Before Execution
console.log(x);                         // After Execution


try{
    console.log(x);
    console.log("Hy")
}
catch(error){
    console.log("When error occurs: ")
    console.log("Error----------> ", error)
}
finally{
    console.log("I will run everytime even the error occur or not!")
}

try{
    console.log(x);
}
catch(err){
    throw new Error("You do not defined x");
}
finally{
    console.log("Hello World!")
}


let Error_code = 100;
if(Error_code==100){
    throw new Error("Invalid Jason");
    print("Love Babbar");
}



