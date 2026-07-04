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

let customer2={
    name: "John", 
    age: 30,
    address: "Kandy",
    salary: 50000,
    items:["item1", "item2", "item3"],
    father:{
        name: "Peter",
        age: 60,
        address: "Colombo"
    }
};

console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);
console.log(customer2.salary);
console.log(customer2.items);
console.log(customer2.father);
console.log(customer2.father.name);
console.log(customer2.items[2]);