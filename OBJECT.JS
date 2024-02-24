// Declare an object
const calculator = {
    // Function to add two numbers
    add: function(a, b) {
        return a + b;
    },

    // Function to subtract second number from the first
    subtract: function(a, b) {
        return a - b;
    }
};

// Example usage
const resultAdd = calculator.add(5, 3); // Result: 8
const resultSubtract = calculator.subtract(10, 4); // Result: 6

console.log("Addition result:", resultAdd);
console.log("Subtraction result:", resultSubtract);
