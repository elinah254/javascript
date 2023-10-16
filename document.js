

alert("error")
document.write("hello world")
console.log(32)

//data types in javascript and console log all of them

       // numbers
       let height= 20
        let width= 5;
        let length= 2;
        console.log(width)
        console.log(height)
        console.log(length)

       // integers 
        let num = 4.1;
        console.log(num)

        // strings 
        let color="blue"
        let names="mary" 
        console.log(names)
        console.log(color)

        //array
        
        let size=["big","small","medium"]

        let  numbers=["one","two","three"]
        console.log(size)
        console.log(numbers)


//javascript arithmetics 
let a=20
let b =5

console.log(a*b)
console.log(a+b)
console.log(a-b)
console.log(b-a)
console.log(a/b)

//function  

function function_name(price1, price2) {
       console.log(price1+ price2)
       return price1* price2
	
}
function_name(20,2)


// javascript object  

    let bookdata = {
    bookname: "kasuku",
    country:"kenya",
    size:"A5",
    cost: 150,
    ruled: "square"
}
    console.log(bookdata.bookname)
    console.log(bookdata.cost)


// conditional statements 

let number = 10;

if(number>0){
       console.log("positive")
}else{
       console.log("negative")
}
let digit=5
if(digit<10){
       console.log("true")
}else{
       console.log("false")
}


// javascript date 

const d = new Date("2023-10-15")
console.log(d)


var today =Date.now()
console.log(today)
    
// //variables in javascript 
const person =["elinah","mmbone"] 

  var name = ["sharon"]
  let child = ["mercy"]
  console.log(person)
  console.log(child)
  


  //Javascript syntax
  let c=5
  let f=2
  let g= c+f
  console.log(g)

  //js operators
  //js string comparison
  let text1=5;
  let text2=3;
  let text3= "text1"<"text2"
  console.log(text3)

  let m=5
  m+=4
  console.log(m)

  //js string addition
//   let message1="what a wonderful";
//   let message2="holiday";
//   let message3="what a wonderful" += "holiday"
//   console.log(message3)

//   let meesage1 = "What a very ";
// message1 += "nice day";
// document.getElementById("demo").innerHTML = message1;


//js adding strings and numbers
let j= 2+2
let k="2"+2
let t= "mum"+ 2
console.log(j,k,t)

