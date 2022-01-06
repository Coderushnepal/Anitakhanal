Question 1
Consider the following problem:
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

Question 2
Find the Smallest and Biggest Numbers  
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

Basics of JavaScript
Question 1
Write a function to render the following pattern in the console:  
 
 
* * * * *  
 
* * * *  
 
* * *  
 
* *  
 
*  
The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.
Question 2
Censor Words Longer Than Four Characters  
 
Create a function that takes a string and censors words over four characters with *.  
 
 
 
 
Examples  
 
 
censor("The code is fourty") ➞ "The code is ******"  
 
censor("Two plus three is five") ➞ "Two plus ***** is five"  
 
censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"  
 
 
 
Note
• Don't censor words with exactly four characters.
• If all words have four characters or less, return the original string.
• The amount of * is the same as the length of the word.
Question 3
Converting Objects to Arrays  
 
Write a function that converts an object into an array, where each element represents a key-value pair.  
 
 
 
 
Examples  
 
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]  
 
 
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]  
 
toArray({}) ➞ []  
 
Note * Return an empty array if the object is empty.
Question 4
Filter Repeating Character Strings  
 
Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).  
 
 
 
 
Examples  
 
identicalFilter(["88", "999", "22", "545", "133"])  
➞ ["88", "999", "22"]  
 
identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])  
➞ []  
 
Note * A string with a single character is trivially counted as a string with repeating identical characters. * If there are no strings with repeating identical characters, return an empty array (see example #3).
Question 5
Return the Objects Keys and Values  
 
Create a function that takes an object and returns the keys and values as separate arrays.  
 
 
 
 
Examples  
 
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })  
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]  
 
 
keysAndValues({ a: 1, b: 2, c: 3 })  
➞ [["a", "b", "c"], [1, 2, 3]]  
 
keysAndValues({ key1: true, key2: false, key3: undefined })  
➞ [["key1", "key2", "key3"], [true, false, undefined]]  