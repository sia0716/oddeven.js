let odd = "";
let even = "";

for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        even = even + i + " ";
    } else {
        odd = odd + i + " ";
    }
}

console.log("Odd Numbers: " + odd);
console.log("Even Numbers: " + even);
