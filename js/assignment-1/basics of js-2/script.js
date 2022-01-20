// Question 1

var listOfNames = [
    "Neeta sapkota",
    "neha shiwakoti",
    "Srijana Khatiwada ",
    "Smrity Dhakal",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elisha Bista",
    "Rachana kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
    "Kritika Baral",
    "Srijana Thulung",  
]

var result = [];

listOfNames.forEach(function(value, index){
    obj = {
        id : index +1,
        firstname: value.split(" ")[0],
        lastname: value.split(" ")[1],
        
    }
    result.push(obj);

});
 console.log(result);

//  Question 2

function find(char) {
 var findArr = result.filter(function(value) {
     return (value.firstname[0] === char);
 });
}
find('s');
find('a');

// question 3
var newObj = {};

result.forEach(function(value, index) {
    delete value.id;
    var key = index + 1;
    newObj[key] = value;
});

console.log(newObj);
