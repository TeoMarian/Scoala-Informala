// JS Basics Hands On
console.log("BMI homework")
const x = 60;
const y = 1.7;
let BMI = x / (y * y);
console.log(BMI);

function calculateBmi(bmi) {
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (18.5 <= bmi && bmi < 25) {
        console.log("Normal");
    } else if (25 <= bmi && bmi < 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    };
};

calculateBmi(BMI);


// Javascript Control Structures

console.log("Numbers from 1 to 20")
for (i = 1; i <= 20; i++) {
    console.log(i)
};

console.log("Odd numbers from 1 to 20")
for (n = 1; n <= 20; n++) {
    if (n % 2 === 1) {
        console.log(n)
    }
};

console.log("Add numbers from an array")

let a = [1, 2, 4, 6, 13];
let sum = 0;
a.forEach(item => {
    sum += item;
});
console.log(sum);