//1
let x = 1;
let y = 2;

let res1 =x+""+y+"";//Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = ""+Boolean(x)+y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 =Boolean(x+y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = undefined+x+y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


//2
let n= prompt("Enter a number");
let parniDodatni= n>0 && n% 2 == 0;
let kratni7=n>0 && n% 7 == 0;
console.log(parniDodatni);
console.log(kratni7);

//3
const namber=[];
namber.push(1);
console.log(namber);

namber.push("Hello");
console.log(namber);

namber.push(true||false);
console.log(namber);

namber.push(null);
console.log(namber);

alert(namber.length);

let n6= prompt("Enter a number");
namber.push(n6);
console.log(namber);

alert(namber[4]);

namber.shift();
alert(namber);

//4
let cities = ["Rome", "Lviv", "Warsaw"];  
console.log(cities.join('*'));

//5
let a=prompt("your is adult?");
if (a<18){
alert(" You are still too young") 
};
if (a>=18){
    alert("You have reached the age of majority") 
    };

//6
let a1=1*prompt("a=");
let b1=1*prompt("b=");
let c1=1*prompt("c=");
let p=(a1+b1+c1)/2;
let s=Math.sqrt(p*(p-a1)*(p-b1)*(p-c1));
s=s.toFixed(2);
console.log(s);


let sqrtA=a1**2+b1**2===c1**2;
let sqrtB=b1**2+c1**2===a1**2;
let sqrtC=c1**2+a1**2===b1**2;
if (sqrtA) {
    console.log("The triangle is right-angled");
}else if (sqrtB) {
    console.log("The triangle is right-angled");
}else if (sqrtC) {
    console.log("The triangle is right-angled");
}

else {
    console.log("The triangle is NOT right-angled");
}

//7

var currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getHours());
if (currentDate.getHours()>=0){
    alert("Dobroi nochi");
} else if (currentDate.getHours()>=5){
    alert("Dobrogo ranky");
} else if (currentDate.getHours()>=11){
    alert("Dobrogo dnya");
} else if (currentDate.getHours()>=17){
    alert("Dobrogo vechora");
} 

































