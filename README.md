# String Calculator

Credits : 
* [katalyst.codurance.com](https://katalyst.codurance.com/string-calculator)
* [TDD Kata - Roy Osherove](https://osherove.com/tdd-kata-1)

## TCR

[test && commit  || revert ( Kent Beck)](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864)

![](tdd_tcr.jpeg)

## Before you start

* Try not to read ahead.

* Do one task at a time. The trick is to learn to work incrementally.

* Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata

## Step 1 - simple calculator

Edit the method in [src/calculator.js](src/calculator.js) so that it can take 1 or 2 comma-separated numbers, and will return their sum.

The method returns 0 when passed the empty string.

Example:
```javascript
calculator("") // 0
calculator("4") // 4
calculator("1,2") // 3
```

## Step 2 - Arbitrary number size

Allow the Add method to handle an unknown amount of numbers.

Example:
```javascript
Add("1,2,3,4,5,6,7,8,9") // 45
```

## Step 3 - Newline separator

Allow the Add method to recognise newlines as well as commas as separators. The two separator types can be used interchangeably.

Example:
```javascript
Add("1\n2,3") // 6
```

## Step 4 - Custom separators
Optionally support custom separators. To change separator, the beginning of the string will contain a separate line that looks like this: “//<separator>\n<numbers>”

Example:
```javascript
Add("//;\n1;2") // 3
```

## Step 5 - Disallow negatives

Calling Add with a negative number will throw an exception negatives not allowed, and the negative that was passed.

If there are multiple negatives, show all of them in the exception message.

Example:
```javascript
Add("1,-2,-3") // error: negatives not allowed: -2 -3
````

## Step 6 - Ignore numbers bigger than 1000

Numbers bigger than 1000 should be ignored.

Example:
```javascript
Add("1001, 2") // 2
````

## Step 7 - Arbitrary-length separators

Separators can be of any length if surrounded by square brackets.

Example:
```javascript
Add("//[***]\n1***2***3”) // 6
```
`
## Step 8 - Multiple single-length separators

Allow multiple single-character separators like this: “//[delim1][delim2]\n”

Example:
```javascript
Add("//[*][%]\n1*2%3”) // 6
```

## Step 9 - Multiple longer-length separators

Handle multiple separators with any character length.

Example:
```javascript
Add("//[foo][bar]\n1foo2bar3") // 6
```