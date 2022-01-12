// Create a function that takes an array and returns the types of values (data types) in a new array.

// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"] 

// Question 1
function arrayValuesTypes(data) {
    let arr = []
    for(i = 0; i< data.length; i++){
        arr.push(typeof data[i])
    }
    return arr;
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));

// Question 2

function filterArray(arr){
    let filteredarr = [];
    for(i = 0; i <arr.length; i++) {
        if(typeof arr[i] !== "string"){
            filteredarr.push(arr[i])
        }
        return filterdarr;
    }
};
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));