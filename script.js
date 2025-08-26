// 🎯 Part 1: Variables, Data Types, Operators, Conditionals
let age = 20; // Example variable
if (age >= 18) {
  document.getElementById("ageResult").textContent = "You are an adult ✅";
} else {
  document.getElementById("ageResult").textContent = "You are a minor ❌";
}

// ❤️ Part 2: Functions – Reusability
// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
let total = calculateTotal(500, 3);
document.getElementById("totalPrice").textContent = "Total Price = ₦" + total;

// Function 2: Greeting message
function greetUser(name) {
  return "Hello, " + name + "! Welcome 🚀";
}
document.getElementById("greeting").textContent = greetUser("Stephen");

// 🔁 Part 3: Loops
// Example 1: Iterating through array of fruits
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitList = document.getElementById("fruitList");
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  fruitList.appendChild(li);
}

// Example 2: Countdown using while loop
let countdownList = document.getElementById("countdown");
let num = 5;
while (num > 0) {
  let li = document.createElement("li");
  li.textContent = num;
  countdownList.appendChild(li);
  num--;
}

// 🌐 Part 4: DOM Manipulation
// Interaction 1: Button click changes text
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Button clicked 🚀";
});

// Interaction 2: Toggle class highlight
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Interaction 3: Dynamically add new list items
document.getElementById("addItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New item added at " + new Date().toLocaleTimeString();
  document.getElementById("dynamicList").appendChild(li);
});
