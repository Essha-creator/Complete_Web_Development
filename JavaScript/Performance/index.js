let t1 = performance.now()
for(let i=1;i<=100;i++){
    let para = document.createElement('p')
    para.textContent="This is para: "+i
    document.body.appendChild(para)
}

let t2 = performance.now()
let t3 = t2-t1;
console.log(t3)


let a1 = performance.now()
let mydiv = document.createElement('div')
for(let i=1;i<=100;i++){
    let para = document.createElement('p')
    para.textContent="Para: "+i
    mydiv.appendChild(para)
}
document.body.appendChild(mydiv)

let a2 = performance.now()
let a3 = a2-a1
console.log(a3)


let b1 = performance.now()
let fragment= document.createDocumentFragment()

for(let i=1;i<=100;i++){
    let para = document.createElement('p')
    para.textContent="PPPPPPPPP: "+i
    fragment.appendChild(para)
}

document.body.appendChild(fragment)
let b2 = performance.now()
let b3 = b2-b1
console.log(b3)