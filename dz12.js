
const API_URL="http://127.0.0.1:4000"
const vote_btn=document.getElementByClassName("vote")[0];
const books_btn=document.getElementByClassName("books")[0];
const ul=document.getElementsByTagName("ul")[0];

vote_btn.addEventListener("click",async(e)=>{
    const res=await fetch(API_URL + "/vote").then((res)=>res.json().then(res=>res)).catch(err=>console.log(err.message));
    console.log(res);
    if(!res) return
    vote_btn.innerHTML=`Your vote accepted ${res}`
})

books_btn.addEventListenner("click",async(e)=>{
 const res =await fetch(API_URL + "/books").then((res)=>res.json().then(res=>res)).catch(err=>console.log(err.message));
 if(!res) return
 books_btn.remove()
 let.map(el =>{
    created_li=document.createElement("li");
    created_li.innerText=el.name
    ul.appendChild(created_li)
 })
})