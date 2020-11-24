// console.log("20 11 24 JS Intro Primary"); // check if files are linked

// Applicant Portal

// alert message in browser
alert("Welcome to the applicant portal");

// prompting for applicant name
let applicantName = prompt("Please enter your name");
console.log(`Applicant Name : ${applicantName}`);

// prompting for applicant budget
let applicantBudget = prompt("Please enter your budget");
console.log(`Applicant Budget : ${applicantBudget}`);

// alert name and budget with math
alert(`${applicantName}'s budget ranges from $${applicantBudget - 500} to $${parseInt(applicantBudget) + 500}`);

// Refund Portal

// alert message in browser
alert("Welcome to the refund portal");

// prompt for order number
let orderNumber = prompt("Please enter your order number");
console.log(`Order Number : ${orderNumber}`);

// prompt for order details
let orderDetails = prompt("Please enter order details");
console.log(`Order Details : ${orderDetails}`);

// prompt for order total
let orderTotal = parseInt(prompt("Please enter order total"));
console.log(`Order total : $${orderTotal}`);

// confirm delivery
let isDelivered = confirm("Was your order delivered");
console.log(`Order Delivered : ${isDelivered}`);

// alert customer info
alert(`Thank you for letting us know that ${orderNumber} was ${orderDetails}. We see that it is ${isDelivered} that your order was delivered. Unfortunately we do not offer refunds on orders below $${orderTotal + 50}.`);
