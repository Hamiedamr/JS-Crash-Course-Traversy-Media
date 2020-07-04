// console.log("Hello World");
// console.error("This is an error");
// console.warn('This is a warning')

/**ES6 Variables */

// const age = 30;
// age = 31;
// console.log(age); // error

// const age;
// console.log(age);//error must initialize cpnst

//console.log(age); //Uncaught ReferenceError: age is not defined

/**Datatypes in JS 
 * String
 * Numbers
 * Boolean
 * null
 * undefined
 * Symbol ES6
 */

//  const name  = "John";
//  const age = 30;
//  const rating  = 4.5;
//  const isCool = true;
//  const x = null;
//  const y = undefined;
//  let z;
//  console.log(typeof name)
//  console.log(typeof age)
//  console.log(typeof rating)
//  console.log(typeof isCool)
//  console.log(typeof x)
//  console.log(typeof y)
//  console.log(typeof z)

/**Strings in JS */

// console.log("My name is " + name + ' and I am ' + age)

// //Template string
// const hello  = `My name is ${name} and I am ${age}`;
// console.log(hello);

// .length property

//const s = 'Hello World';
//console.log(s.length()); // error it is not function console stopped
//console.log(s.length); // Ok

// .substring() function

//const s = "Hello World";
//console.log(s.substring(0,4) +' '+ s.substring(6)); //Hell World :)!

// .split() fuction
//const s = "Hello,world";
 //console.log(s.split(',')); // Array [ "Hello", "world" ]
 
 //const s = "HelloWorld";
 //console.log(s.split('')); // Array(10) [ "H", "e", "l", "l", "o", "W", "o", "r", "l", "d" ]

 //const s = "Hello world";
 //console.log(s.split(' ')); // Array [ "Hello", "world" ]

 /**Arrays */
//  const numbers = new Array(1,2,3,4,5);
//  console.log(numbers);

//  const fruits = ['apples','oranges','pears',10,true] // U can assign different data types values

//  console.log(fruits);

//  const onlyNumbers = new Int16Array([1,2,3,'s']);
//  console.log(onlyNumbers); // Int16Array(4) [ 1, 2, 3, 0 ] character casted to 0 :(!

//  const onlyNumbers = new Int16Array([1,2,3]);
//  console.log(onlyNumbers); //Int16Array(3) [ 1, 2, 3 ] :)!

// const fruits = ['apples','oranges','pears'];

// fruits[3] = 'grapes';

// console.log(fruits); // Array(4) [ "apples", "oranges", "pears", "grapes" ]
// .push() function

// const fruits = ['apples','oranges','pears'];
// fruits.push('mangos');
// console.log(fruits); // Array(4) [ "apples", "oranges", "pears", "mangos" ]

// .unshift() function

// const fruits = ['apples','oranges','pears'];
// fruits.unshift('mangos');
// console.log(fruits); // Array(4) [ "mangos", "apples", "oranges", "pears" ]

// .pop() function
// const fruits = ['apples','oranges','pears'];
// fruits.pop();
// console.log(fruits); // Array [ "apples", "oranges" ]


// // Array.isArray(object) static function

// console.log(Array.isArray(fruits)) //true

// // .indexOf(object) function

// console.log(fruits.indexOf('apples')); // 0

/** JS Objects */

// const person = {
//     firstName: "Hamied",
//     lastName : "Amr",
//     age      : 30,
//     hobbies  : ["Coding","Reading","Teaching"],
//     address  : {
//         state  : "Om eldonia :)!",
//         city   : "Bald Elqoonbla",
//         street : "Msh Faker"
//     }

// }
// alert(person); // [object Object]
// console.log(person); // Show u the full structure of person object
 // Access members of object using dot (.) notation
// console.log(person.firstName); //Hamied

// console.log(person.hobbies[1]); // Reading

// console.log(person.address.state); //Om eldonia :)!

//Notice Advanced code: if u have to deep (copy) object member values u can simply build const object structure similar to the copied one
// const {firstName,lastName,address:{city,state,street}} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(city);
// console.log(state);
// console.log(street);
// console.log(address); // error is not defined due to unpacking it

// Adding memebers directly

// person.email = "abdelhamied.amr@outlook.com";
// console.log(person); // address: Object { state: "Om eldonia :)!", city: "Bald Elqoonbla", street: "Msh Faker" }
// age: 30​
// email: "abdelhamied.amr@outlook.com"
// firstName: "Hamied"
// hobbies: Array(3) [ "Coding", "Reading", "Teaching" ]

/**Array of Objects */

// const todos = [
//     {
//         id:1,
//         text:"ML Theory course",
//         isCompleted: true
//     }, 
//     {
//         id:2,
//         text:"ML piplining course",
//         isCompleted:true
//     }, 
//     {
//         id:3,
//         text:"ML deplyment course",
//         isCompleted:false
//     }
// ]
//console.log(todos); 
/**(3) […]
0: Object { id: 1, text: "ML Theory course", isCompleted: true }
​
1: Object { id: 2, text: "ML piplining course", isCompleted: true }
​
2: Object { id: 3, text: "ML deplyment course", isCompleted: false } */

//JS Object to JSON

//const todosJSON = JSON.stringify(todos);
//console.log(todosJSON); //[{"id":1,"text":"ML Theory course","isCompleted":true},{"id":2,"text":"ML piplining course","isCompleted":true},{"id":3,"text":"ML deplyment course","isCompleted":false}]

/** Loops */

// For
// for(let i = 0; i < 10; i++ ) {
//     console.log(`For loop number ${i}`); //For loop number 0,1,..,9
// }

//While
//  let i = 0;
//  while(i < 10) {
//     console.log(`While loop number ${i}`); //While loop number 0,1,..,9
//     i++;
//  }

// For..of
// for(let todo of todos) {
//     console.log(todo.id); //1,2,3
// }

/**High order array methods */

//forEach
//  todos.forEach(function(todo) {
//      console.log(todo.id); //1,2,3
//  });

 //map
//  const todoIds = todos.map(function(todo){
//      return todo.id;
//  })
//  console.log(todoIds); //Array(3) [ 1, 2, 3 ]

//filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted == true;
// });
// console.log(todoCompleted);
/** output
0: Object { id: 1, text: "ML Theory course", isCompleted: true }​
1: Object { id: 2, text: "ML piplining course", isCompleted: true }
length: 2 */

//Stacked high order array methods

// const todoCompletedText = todos.filter(function(todo){
//     return todo.isCompleted == true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompletedText); //Array [ "ML Theory course", "ML piplining course" ]

/**Conditions */

// const x = 10;

// if(x == 10) { //true
//     console.log("x is 10");
// }
// if(x == '10') { //also true :)
//     console.log("x is 10");
// }

// if(x === '10') { //false :(
//     console.log("x is 10");
// }

// more safe to use ===

// if(x === 10) {
//     console.log("x is 10");
// }else if(x > 10){
//     console.log('x > 10')
// } else {
//     console.log('x < 10');
// }
// const y = 11;

// if(x > 5 || y > 10) {
//     console.log("x > 5 or y > 10");
// }

// if(x > 5) { // same but complex :(
//     if(y > 10) {
//         console.log("x > 5 or y > 10");
//     }
// }


// ternary operator
// const x = 10;
// const color = x > 10 ? 'red':'blue';
// console.log(color); // blue

// switch(color) {
//     case 'red':console.log('color is red'); break;
//     case 'blue':console.log('color is blue'); break;
//     default: console.log('color is not red nor blue')
// }

/**Functions */

// function addNums(num1,num2) {
//     return(num1 + num2)
// }
// console.log(addNums()); // NaN

// function addNums2(num1 = 1,num2 = 2) {
//     return(num1 + num2)
// }
// console.log(addNums2()); // 3

// const addNums3 = (num1 = 1,num2 = 2) => (num1+num2);

// console.log(addNums3()); // 3

// const todosText = todos.map((todo)=>todo.text);
// console.log(todosText) //Array(3) [ "ML Theory course", "ML piplining course", "ML deplyment course" ]

 /** OOP */
//  function Person(firstName,lastName,dob) {
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.dob = dob;
//  }
// //Instantiation
//  const person1 = new Person("Hamied","Amr","14-02-1997");
//  console.log(person1) //Object { firstName: "Hamied", lastName: "Amr", dob: "14-02-1997" 

 //Date object

//  function Person(firstName,lastName,dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

//     //methods

//     this.getBirthYear = () => this.dob.getFullYear();
//     // another version
//     // this.getBirthYear = function(){ return this.dob.getFullYear()};

//     this.getFullName = () => `${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person("Hamied","Amr",'2/14/1997');//MM DD YY
// console.log(person1.dob);/**Date Fri Feb 14 1997 00:00:00 GMT+0200 (Eastern European Standard Time) */

// console.log(person1.getBirthYear()); //1997

// console.log(person1.getFullName()); //Hamied Amr

// Proto types 
// The following explaination is not part of tutuorial but i think it is a pretty intersting infornation

/**In Javascript when you bind a method to the this keyword, you are providing that method to only that particular instance and it does not really have any relationship with an object instance of that constructor, pretty much like a static method. Keeping in mind that functions are first-class citizens in Javascript, we can deal with them just like objects, in this case we're only adding a property to an instance of a function object. Thats only part of the story, you must also know that any method attached via this will get re-declared for every new instance we create, which could affect the memory usage of the application negatively if we wish to create so many instances.
 */

 // So We will put our class methods into class proto types to save the memory when instantiation and also ease the inheritance between the objects further

//  function Person2(firstName,lastName,dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// Person2.prototype.getFullName = function(){return `${this.firstName} ${this.lastName}`};

// Person2.prototype.getBirthYear = function(){return this.dob.getFullYear();}

// // ES6 Syntax sugar

// class Person3 {
//     constructor(firstName,lastName,dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getFullName(){return `${this.firstName} ${this.lastName}`};
//     getBirthYear(){return this.dob.getFullYear();}
// }

// const person2 = new Person2("Hamied","Amr",'2/14/1997');//MM DD YY
// console.log(person2.dob);/**Date Fri Feb 14 1997 00:00:00 GMT+0200 (Eastern European Standard Time) */

// console.log(person2.getBirthYear()); //1997

// console.log(person2.getFullName()); //Hamied Amr


// const person3 = new Person3("Hamied","Amr",'2/14/1997');//MM DD YY
// console.log(person3.dob);/**Date Fri Feb 14 1997 00:00:00 GMT+0200 (Eastern European Standard Time) */

// console.log(person3.getBirthYear()); //1997

// console.log(person3.getFullName()); //Hamied Amr

/**DOM : Document Object Model*/


//Selecting fron Html

//single element
/**
 * Window : main part , the very top level
 * document
 */
// console.log(window)
// alert(13); // window.alert()

// const form = document.getElementById('my-form');
// console.log(document.querySelector('.container'));//(recommended)
// console.log(document.querySelector('h1')); // the first h1 only
// console.log(form); // look at the console :)

// //multiple elements

// console.log(document.querySelectorAll('.item')) ;// Node List(array) contains all elements having class .item(recommended)
// console.log(document.getElementsByClassName('item'));// HTML Collection(not array) contains all elements having class .item

// change html

// const ul = document.querySelector('.items');

// // ul.remove(); // it destroyed

// // ul.lastElementChild.remove();// item3 destroyed

// // ul.firstElementChild.textContent = "hello"; // item1 => hello
// ul.children[1].innerText = "Hamied"; // item2 changed
// ul.lastElementChild.innerHTML = "<h1> Hello </h1>";

// change styles

// const btn = document.querySelector('.btn');
// btn.style.background ="red";


//Events

// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e)=> {
//     e.preventDefault(); // stop the defualt behaviour of the button (submit the form)
//     console.log('clcik');
//     console.log(e.target); // return the input element itself 
// });


// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e)=> {
//     e.preventDefault();

//     document.querySelector('#my-form').style.background = "#ccc";

//     document.querySelector('body').classList.add('bg-dark'); // add class bg-dark to the body element
// });


// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover',(e)=> {
//     e.preventDefault();

//     document.querySelector('#my-form').style.background = "#ccc";

//     document.querySelector('body').classList.add('bg-dark'); // add class bg-dark to the body element
// });
setTimeout(()=>{alert("3 seconds left")},3000);
