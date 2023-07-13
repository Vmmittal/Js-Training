

// Assignment -1 OPerators in JavaScript







// Arithmetic Operator..............................................
let a = 3;
let x = (100 + 50) * a - 20;
console.log(x)
x=x+10
console.log(x)

var y = 30
var z =2
let result = y/z
let result2 = y%z
console.log(result)
console.log(result2)

//JS Comparison Operators................................................

var Ram=40
var Sham=40
var Sohan=22

if(Ram>Sham)
{
  console.log("Ram is elder")
}
else if (Ram == Sham)
  {
    console.log(" Ram and Sham are of same age")
  }
else
{
    if(Sham>Sohan)
    {
        console.log("Sham is Elder")
    }
    else
    {
        console.log("Sohan is Elder")
    }
}


if (Ram >=18)
{
    console.log("Ram is teenager")
}
if(Sham!=Sohan)
{
    console.log("Not of same age")
}

//Logical operators.....................................................

var Burger = true
var Sauce = false

if(Burger && Sauce)
{
    console.log("Order Placed")
}
else (Burger || Sauce) 
{
  console.log("Only one thing can be placed")
}

//String Operators.......................................................

let str1="Vipul"
let str2="Mittal"
let str3= 5
console.log(str1 + " " + str2)
console.log(str2 + str3)

//type operators.............................................................

console.log(typeof(str1))
console.log(typeof(str3))


//Bitwise Operators.......................................................

let aa=12

let b=6

console.log(aa & b)

console.log(aa | b)
