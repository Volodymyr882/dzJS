//1
function propsCount(currentObject) {
  let mentor = { 
      course: "JS fundamental", 
      duration: 3,
      direction: "web-development" 
  };

  let objectLength = Object.keys(mentor).length;
  console.log(objectLength);
};
propsCount();

//2
function showProps(obj){
  let user={
    a: "Igor",
    b: "Max",
    c: "Vova",
    d: "Ig",
    e: "Ivan"
  }
 console.log(Object.keys(user))
};
showProps()

//3
class Person{
  constructor(name,surname){
    this.name=name;
    this.surname=surname;}
    
  showFullName(){
    return this.surname + ' ' + this.name;
  }
}
class Student extends Person {
  constructor (name,surname,year){
    super(name,surname);
    this.year=year;
  }
  showFullName (midleName){
    return super.showFullName()+ ' '+midleName;
  }
  showCourse(){
    let date=new Date();
    let currentYear=date.getFullYear();
    return currentYear-this.year;
  }
}
 let studen1=new Student("Petro","Petrenko",2012);
 console.log(studen1.showFullName("Petrovych"));
 console.log("Current course: " + studen1.showCourse());

//4
experience=1.2;
experience2=1.5;
class Worker{
  constructor(fullName,dayRate,workingDays,){
    this.fullName =fullName;
    this.dayRate =dayRate;
    this.workingDays =workingDays;
    }
    showSalary(){
      return this.dayRate*this.workingDays;
    }
    
    showSalaryWithExperience(){
    return experience*this.showSalary();
    }

    get showExp(){
      return this.experience;
    }
    set setExp(experience){
    this.experience = experience;}

    showSalaryWithExperience2(){
      return experience2*this.showSalary();
      }

      sort(workeyArray){
        let sort=workeyArray.sort(function(a,b){return a.showSalary()-b.showSalary()});
        for(let i=0;i<sort.length;i++){
          console.log(sort[i]);}
        }


  }
  let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
console.log("Salary-"+worker1.showSalary());
console.log("New experience 1.2: " +worker1.showSalaryWithExperience());
console.log("New experience 1.5: " +worker1.showSalaryWithExperience2());


//5
class GeometricFigure {
  getArea() {
return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     }
class Triangle extends GeometricFigure {
  constructor(a,b) {
    super();
    this.base = a;
    this.height = b;
}

getArea() {
  return this.base*this.height/2;
}
}

function handleFigures(figures){
  return figures.reduce(function(sum,figure)){
    if(figure instanceof GeometricFigure){
    console.log('Geom figure:' ${figure.toString()} - area: ${figure.getArea()});
    return sum+figure/getArea()
    }
  }
  throw Erorr('Bad argument')
}

















    