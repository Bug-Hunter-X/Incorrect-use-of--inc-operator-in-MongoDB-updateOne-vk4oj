# MongoDB $inc operator bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment a numerical field.  However, providing a string value instead of a number will lead to unexpected results, not incrementing the value, and instead appending the string to the field value.

**Bug:** Using a string value with `$inc` operator.
**Solution:**  Using a numeric value with `$inc` operator.

This example illustrates the problem and how to correct it.  Please refer to the `bug.js` and `bugSolution.js` files for code examples.