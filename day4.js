array
let number=[1,2,"three",true];

let names=new Array("john","james");
console.log(number[2]);
console.log(names.length);
filter()-it filterd the result arguments

let result=number.filter(number => number[1]);
console.log(result);
//slice - delete the element based on index value
//slice - changes the original array by
//adding/removeing items at a specific index

let number=[1,2,3,4,5];
number.splice(1,2,"hello");
console.log(number)

object

let obj={
   name:"saiiiiiiiiiiiiiii",
    totalmark:"45",
    nested obj
    subject:{
        python:"100",
        DS:"98",

    avg:function(){
        let sum=parseInt(this.subject.DS)+ parseInt(this.subject.python);
        return sum;
   }

}
console.log(obj.totalmark);
console.log(obj["name"]);
console.log(obj.subject.python);
console.log(obj.subject["DS"]);
console.log(obj.avg());

const person={
    name:"saii",
    age:"18",
    city:"idikarai"
};
const{name,age,city}=person;
console.log(name);
console.log(age);
console.log(city);

//ARRAY DESTRUCTRING
const person=["saii","18","cricketer"];
const[name,age,designation]=person;
console.log(name+" "+age+" "+designation);





