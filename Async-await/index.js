// async function getData() {

//     setTimeout(function() {
//         console.log("My name is Babbar!")

//     },10000)
    
// }

// let output = getData()

// async function get() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     // filtering the data (parsing)
//     let real_data = await response.json()
//     console.log(real_data)
    
// }
// get()

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

//const url = "https://jsonplaceholder.typicode.com/posts "; 
let options ={

  method: "POST",
  body: JSON.stringify({ username: "Love Babbar" }),
  headers: myHeaders,
};
async function get_data() {
    const url = await fetch('https://dummyjson.com/posts/user/252')
    let data = await url.json()
    console.log("Get data: ",data)
}

async function post_data() {
    const url = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Love Babbar -> I am in love with someone.',
          userId: 5,
          /* other post data */
        })
      })
    
    let data= await url.json()
    console.log("Post data response: ", data)
}
async function processing() {
    await post_data()
    await get_data()
    
}

processing()

