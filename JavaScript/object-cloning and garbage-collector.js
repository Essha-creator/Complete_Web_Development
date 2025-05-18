console.log("Babbar");
let obj = {
    age: 21,
    weight:55,
    height:7.1
};
console.log(obj);               // node "object-cloning and garbage-collector.js"
obj.colour="White";
console.log(obj);

//  Cloning through different methods

let dest4 = {...obj};
console.log(dest4);
let a = obj;
a.colour = "Red";
console.log(a);

                    // Spread-Operator
let dest = {...obj};
console.log(dest);

let human = {...obj};
console.log(human);
human.age = 55;
console.log(human);
console.log(obj);
                        // Object.assign method
let dest1 = Object.assign({},obj);
console.log(dest1);
dest1.colour= "Green";
console.log(dest1);
let src = {
    value:101,
    channel:"Love Babbar"
};

let dest21 = Object.assign({},obj,src);  
console.log(dest21);

// Through iteration

let dest1 = {};
for(let key in src1){
    let newKey = key;
    let value = src1[key];
    dest1[newKey] = value
};
console.log(dest1);

let dest2 = {};
for(let a in src){
    let newKey = a;
    let value = src[a];
    dest2[newKey] = value;
}

console.log(dest2);