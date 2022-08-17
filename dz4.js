//1
function calcRectangleArea(width, height){
  if (isNaN(width) || isNaN(height)) {
    throw "is not a number";
  }
  return width * height;
}
console.log(calcRectangleArea (1,"a"));

//2
function checkAge(){
  try{
    const age=prompt("Enter age:");
    if(age=='')
    throw new Error("The field is empty! Please enter your age");
    else if (isNaN(parseInt(age)))
    throw new Error("Please enter number");
    else if (age<14)
    throw new Error("Sorry, but you must many 14");
    alert("Good");
  }
  catch(e){
    alert(e.name+" "+e.message);
  }
}
checkAge();

//3
class MonthException {
  constructor(message){
    this.message = message;
    this.name="MonthException";
  }
}

function showMonthName(month){
  month=month-1;
  let months=['jan', 'feb', 'mar', 'apr', 'may','jun', 'jul', 'aug', 'sep', 'okt', 'nov'];
if (month[month] !== undefined){
  return months[month];
}else{
  throw new MonthException('Invalid month number');
}
}
console.log(showMonthName(14));

//4
function showUser(id){
  if (id<0){
    throw new Error("id must be +")
  }
  return{id};
}

function showUsers(ids){
  let result = [];
  ids.forEach(function(id){
    try{
      let person=showUser(id);
      result.push(person);
    }catch(exception){
      console.log(exception.massage);
    }
  });
    return result;
}
showUser([5,3,5,-14,-4,1]);