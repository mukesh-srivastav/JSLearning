// Our task is to print numbers from 1 to 10.

// Obvious method
console.log(1);
console.log(2);
....
....
....
console.log(10);


// Introducing while loop.
var i; // variable Declaration
i = 1; // variable initialization. 
var i = 1; //variable declaration + initialization.

// while loop
while (i <= 10) { // Loop condition.
    console.log(i);
    i++; // Increment or decrement. 
}

console.log("Done Printing while loop");

//Introducing FOR loop
for (var i=1; i<=10; i++) {
  console.log(i);
}
console.log("Done Printing for loop");

// Let's check Do-while Loop
// In Do-while loop, We first do the processing, then increment/decrement, and in the last we check the condition to repeat or not. 
var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
console.log("Done Printing do-while loop");
