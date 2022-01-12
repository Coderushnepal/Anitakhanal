const minmax = (arr)=> {
    let a =[];
    if(arr.length === 1) {
        a.push(Math.min(...a));
    } else {
        a.push(Math.min(...a));
        a.push(Math.max(...a));
    }
    return a;

};
console.log(minmax([1,2,3,4,5]));
console.log(minmax([1]));
console.log(minmax([2334454, 5]));
