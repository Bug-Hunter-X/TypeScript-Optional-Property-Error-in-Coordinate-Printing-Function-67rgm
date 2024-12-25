# TypeScript Optional Property Handling

This repository demonstrates a common error in TypeScript related to optional properties and how to handle them effectively to prevent runtime errors.

## Bug Description
The `printCoord` function expects an object with `x` and `y` properties. However, if the object passed to the function lacks either of these properties, a runtime error will occur because TypeScript's type checking does not guarantee that these properties will always be present during runtime. 

## Bug Solution
The solution involves using optional properties (?) in the type definition to indicate that either `x` or `y` can be absent. Additionally, null checks are performed before accessing the optional properties to ensure that a runtime error does not occur.