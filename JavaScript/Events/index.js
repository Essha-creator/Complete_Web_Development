let firstp = document.querySelector('#fpara')
let h = document.querySelector('h1')
function change_text(event){
    console.log(event)
    firstp.textContent="Hy people"
}
function change_heading(){
    h.textContent="Hy, my name is Tim"
}
firstp.addEventListener('click',change_text)
h.addEventListener('click',change_heading)

let a_tag = document.querySelector('#fanchor')
a_tag.addEventListener('click',nothing)
function nothing(event){
    event.preventDefault()
    a_tag.textContent="Nothing happens"
}

// let paras = document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     paras[i].addEventListener('click',alerting);
// }
function alerting(event){
    if(event.target.nodeName=='SPAN'){
        alert('You have clicked on Wrong Para ' + event.target.textContent);
    }
}

let mydiv = document.querySelector('#wrapper')

mydiv.addEventListener('click',alerting)

