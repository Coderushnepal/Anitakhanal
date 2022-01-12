// Question 1
for(var i=1; i<=5; i++) {
    for(var j=5; j>=i; j--)
    {
        document.write("*");
    }
    document.write("<br/>");
   }

//    Question 2
 function censorFour(str) {
     let result = ' ';
     let exp = str.split(' ');
     for(i = 0; i< exp.length; i++){
         var count = exp[i].length;
         if(count > 4) {
            result = result + '*'.repeat(count) + '* ';  
         }else {
             result = result + exp[i] + ' ';
         }

     }
     return result;


 }
    console.log(censorFour('The code is fourty'));
    console.log(censorFour('Two plus three is five'));
    console.log(censorFour('aaaa aaaaa 1234 12345'));
    console.log(' \n \n');

    // Question 3

    function toArray(obj) {
        let result = Object.entries(obj);
        let arr = [];
        for(i = 0; i< result.length; i++){
            arr.push([keys[i], obj[values[i]]]);
        }
        return arr;

    }
    console.log(toArray({ a: 1, b: 2 }))
    console.log(toArray({ shrimp: 15, tots: 12 }));
    console.log(toArray({}));

    // Question 4

    function identicalFilter(arr) {
        let identicalresult = [];
        let k = 0;
        for (i = 0; i < arr.length; i++) {
          let repeat = new Set(arr[i]);
          if (repeat.size === 1) {
            identical[k++] = arr[i];
          }
        }
        return identicalresult;
      }
      console.log(" \n\nAnswer 4 : \n\n");
      console.log(identicalFilter(["88", "999", "22", "545", "133"]));
      console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
      
    //   Question 5
     
    function keysAndValues(data) {
        var keys = Object.keys(data);
        var values = Object.values(data);
        var result = [ keys, values];
     
        };
        return[result];

     
     console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
     consoe.log(keysAndValues({ a: 1, b: 2, c: 3 }));
     console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
