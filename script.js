// // const incomes = [4000, 6000, 8000];

// // for (let income of incomes) {
// //     income + 5000;
// // }

// // console.log(incomes)

// const example = () =>{
//     for (let i = 0; i < 5; i++){
//         console.log(i)
//     }
// }
// example();


// // Create Counter
// // Set Counter to 1
// // Stop Counter when number is equal to 20
// // IF number is a multiple of 3 Print "Fizz"
// // IF number is a multiple of 5 Print "Buzz"
// // IF number is a multiple of both 5 and 3 print "FizzBuzz"


// for(let i = 1; i <= 50; i++){
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else if(i % 15 === 0){
//         console.log("FizzBuzz");
//     }else {
//         console.log(i)}

// }


// //A function that prints the age of an animal. If the Animqlis below five year old, it prints 'Young' otherwise it prints 'Old' 

// // PSEUDOCODE

// // An array of strings - animal names 
// // An array of number - animal ages
// //   function that prints the age of an animal

// const age = [3, 4, 6, 8, 9];
// const str = ["Elephant", "Lion", "Tiger", "Mouse", "Cock"];
// console.log(str[0])

// const elephantAge = () => {
// const age = [3, 4, 6, 8, 9];
// const str = ["Elephant", "Lion", "Tiger", "Mouse", "Cock"];
// console.log(str[0])
//     const ageDeterminant = age < 5 ? "Young" : "Old";
//     return `This ${str[0]} is ${ageDeterminant} at ${age[0]} Years Old`;
// }
// const bio = elephantAge();
// console.log(bio)

// const goodBaller = {name: "Lionel Messi", club: "Inter Miami"};
// const badBaller = {name1: "Cristiano Ronaldo", club1: "Al Nassr"};

// // "Bad Object Code"

// // // goodBaller['name1'] = badBaller.name1;
// // // goodBaller['club1'] = badBaller.club1;

// // // or

// // const goodBadBaller = Object.assign(goodBaller, {club1:"Al Nassr"})
// // console.log(goodBadBaller)
// // console.log(goodBaller)

// // "Good Object Code"

// // // const goodBadBaller = {...goodBaller, ...badBaller};
// // or
// // const goodBadBaller = {...goodBaller, ...{club1: "Al Nassr"}}
// // console.log(goodBadBaller);

// // Bad Array Code

// let listOfLegend = ["Lionel Messi", "Johan Cruyff", "Diego Maradona", "Pele", "Alfredo Di Stefano",];
// const listOfShittyPlayers = ["Pepe", "C Ronaldo", "Savic", "Garnacho",];

// // listOfLegend.push("Pepe");
// // listOfLegend.unshift("Costa");
// // listOfLegend.shift();
// // listOfLegend.fill("Batistuta", 0, 3);

// // Good Array Code

// const mergedGroup = [...listOfLegend, ...listOfShittyPlayers]
// // listOfLegend = [...listOfLegend, "Mane", "Salah", "Benzema",]
// listOfLegend = ["Mane", "Salah", "Benzema", ...listOfLegend,]

// console.log(mergedGroup);
// console.log(listOfLegend);

// "Bad For Loop Code"

// const orders = [10, 20, 30, 40, 50,];
// console.log(orders.length)
// // let ordersTotal = 0;
// // const ordersPlusTax = [];
// // const highValueOders = [];

// // for (let i = 0; i < orders.length; i++) {
    
// //     ordersTotal += orders[i]

// //     ordersPlusTax.push(orders[i] * 1.1)

// //     if (orders[i] > 20) {
// //         highValueOders.push(orders[i])
// //     }
    
// // }

// // Good For Loop Code

// // const ordersTotal = orders.reduce((acc, cur) => acc + cur)
// // const ordersPlusTax = orders.map(v => v * 1.1)
// // const highValueOders = orders.filter(v => v > 20)
// // console.log(ordersTotal)
// // console.log(ordersPlusTax)
// // console.log(highValueOders)


const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const occupationInput = document.getElementById('occupationInput');
const addressInput = document.getElementById('addressInput');
const hobbyInput = document.getElementById('hobbyInput');
const submit = document.getElementById('submit');
const nameDescription = document.getElementById('name');
const ageDescription = document.getElementById('age');
const occupationDescription = document.getElementById('occupation');
const addressDescription = document.getElementById('address');
const hobbyDescription = document.getElementById('hobby');

const getData = (nameValue, ageValue, occupationValue, addressValue, hobbyValue) =>{
    // const name = document.createTextNode(`${nameValue}`);
    let data = {
        name: document.createTextNode(`${nameValue}`),
        age: document.createTextNode(`${ageValue} Years`),
        occupation: document.createTextNode(`${occupationValue}`),
        address: document.createTextNode(`${addressValue}`),
        hobby: document.createTextNode(`${hobbyValue}`),
    }

    nameDescription.appendChild(data.name)
    ageDescription.appendChild(data.age)
    occupationDescription.appendChild(data.occupation)
    addressDescription.appendChild(data.address)
    hobbyDescription.appendChild(data.hobby)
}

submit.addEventListener('click', (e)=>{
    getData(nameInput.value, ageInput.value, occupationInput.value, addressInput.value, hobbyInput.value)
}
);




