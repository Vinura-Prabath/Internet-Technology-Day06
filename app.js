// console.log("Hello, World!");

// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Bangalore");
// console.log(customer1);

// ---------------------------------------------

// let customer2={
//     name: "John", 
//     age: 30,
//     address: "Kandy",
//     salary: 50000,
//     items:["item1", "item2", "item3"],

//     items:[
//         {   
//             id: 1,
//             name: "item1",
//             price: 1000,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 100
//                 }
//             ]
//         },{
//             id: 2,
//             name: "item2",
//             price: 2000
//         },{
//             id: 3,
//             name: "item3",
//             price: 3000
//         }
//         ],

//     father:{
//         name: "Peter",
//         age: 60,
//         address: "Colombo"
//     }
// };

// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items);
// console.log(customer2.father);
// console.log(customer2.father.name);
// console.log(customer2.items[2]);
// console.log(customer2.items[0].variants[0].price);


// document.write("<h1>Hello</h1>");

// console.log(document.title);

// let heading = document.getElementById("Heading");

// // console.log(heading);

// // heading.innerText = "Hello, Vinura";

// function changeHeading(){
//     heading.innerText = "Hello, Vinura";
//     console.log("Clicked");
// }

// let number = 0;
// function changeHeadingIncrement() {
//     heading.innerText = "Hello,Vinura"+ (++number);
//     console.log("Clicked");
    
// }
// function changeHeadingDecrement() {
//     heading.innerText = "Hello,Vinura"+(--number);
//     console.log("Clicked");
    
// }

// function changeHeading() {
//     let inputText = document.getElementById("inputText");

//     console.log(inputText.value);

//     let heading = document.getElementById("Heading");

//     heading.innerText = inputText.value;
// }


// function btnSumOnAction() {
//     let input01 = document.getElementById("txtInput01").value;
//     let input02 = document.getElementById("txtInput02").value;

//     let sum = parseInt(input01)+parseInt(input02);
//     // let sum = Number(input01)+Number(input02);

//     document.getElementById("heading").innerText="SUM : "+sum

    

//     console.log(input01);
//     console.log(input02);
//     console.log(sum);

// }

let customerList = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let customer={
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary
    }

    customerList.push(customer);

    console.log(customerList);
      
}
