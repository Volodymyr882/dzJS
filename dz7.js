//1
1.1
let openTab=window.open("","","widht=300,heidht=300");
//1.2
setTimeout(function(){window.resizeTo(500,500)
},2000);
//1.3
setTimeout(function(){window.moveTo(200,200)
},2000);
//1.4
setTimeout(function(){window.close()
},2000);

//2
function changeCSS(){
  text.style.color="orange";
  text.style.frontSiza="20pt";
  text.style.fontFamily="Comic Sans MS"
}
btn.addEventListenner("click",function(event){
  event.target.style
})

//3
1 button onclick="setBackground('blue')"
2 button ondblclick="setBackground('pink')"
3 button onmousedown="setBackground('brown')";
 onmouseup="setBackground('white')"
4 <a href="#"
 onmouse="setBackground('yellow')"
 onmouseout="setBackground('white')">link
</a>

//4
myBtn.addEventListener("click",del);
function del()
{
  let x=document.getElementById("name");
  x.remove(x.selectedIndex);
}

//5
let x=document.getElementById("myBtn");
x.addEventListener("mouseover",mouseOverFunction);
x.addEventListener("click",mouseClickFunction);
x.addEventListener("mouseout",mouseOutF);

function mouseOverFunction(){
  document.getElementById("myId").innerHTML += "Mouse is not on me";
}
function mouseClickFunction(){
  document.getElementById("myId").innerHTML += "I was pressed";
}
function mouseOutF(){
  document.getElementById("myId").innerHTML += "Mouse on me";
}


//6
function displayWindowSize(){
  let w=window.innerWidth;
  let h=window.innerHeight;
  let size="W- "+w+","+"H- "+h;
  document.getElementById("result").innerHTML=size;
}
window.addEventListener("resize",displayWindowSize);

//7
const cityArr={
  'ger':['Berlin','Humburg','Dortmud'],
  'usa':['New-York','Washington','Chicago'],
  'ukr':['Lviv','Kyiv','Odessa']
}

let prime_select=document.getElementById('country');
prime_select.addEventListener('change',createList);
prime_select.addEventListener('change', toParagraph);

let city_select=document.getElementById('cities');
city_select.addEventListener('change',toParagraph);

function createList(){
  city_select.innerHTML='';
  let selected_country=prime_select.value;
  for(let i=0;i<cityArr[selected_country].lenght;i++){
    let new_option=document.createElement('option');
    new_option.innerHTML=cityArr[selected_country][i];
    city_select.appendChild(new_option);
  }
}

let parag=document.querySelector('p');
function toParagraph(){
  parag.innerHTML='';
  parag.innerHTML=prime_select.options[prime_select.selectedIndex].text+', '
  +city_select.options[city_select.selectedIndex].text;
}
