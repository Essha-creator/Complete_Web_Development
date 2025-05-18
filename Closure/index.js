let name = "Manish"
function outer(){
    let name="John"
    console.log(name)
    function inner(){
        let name="Bob"
        console.log(name)
    }
    inner()
}

outer()
console.log(name)

