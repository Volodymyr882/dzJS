//1
document.getElementById("test").innerHTML="Last";
document.querySelector("#test").innerHTML="Last";

//2
document.getElementByClassName("image").src="...png";

//3
let image = document.querySelectorAll("#text p");
for (let i = 0; i < image.length; i++) {
    alert("Selector text "+i+": "+elems[i].innerHTML);
}

//4
let parent=document.getElementById("list");
let first=parent.childNodes[0].innerHTML;
let last=parent.childNodes[4].innerHTML;
let second=parent.childNodes[1].innerHTML;
let fourth=parent.childNodes[3].innerHTML;
let third=parent.childNodes[2].innerHTML;
alert(parent);
alert(first);
alert(last);
alert(second);
alert(fourth);

//5
document.body.children[0].style.backgroundColor ="lightgreen";
document.getElementById("myDiv").children[0].style.fontWeight="700";
document.getElementById("myDiv").children[1].style.color='red';
document.getElementById("myDiv").children[2].style.textDecoration="underline";
document.getElementById("myDiv").children[3].style.fontStyle="italic";
document.getElementById("myList").style.listStyle="none";
document.getElementById("myList").style.display="flex";
document.getElementsByTagName("span")[0].style.display='none';

//6
let d1=prompt("Enter","");
let d2=prompt("Enter","");
let inp1=document.getElementsById("input1");
let inp2=document.getElementsById("input2");
inp1.value=d1;
inp2.value=d2;
let input1Valume=inp1.value;
let input2Valume=inp2.value;
inp1.valume=input2Valume;
inp2.valume=input1Valume;

//7
const x=100;
document.body.innerHTML=
`<main class="mainClass check item"> 	
      <div id="myDiv">${x}
 <p>First paragraph</p>           
</div>
</main>`;