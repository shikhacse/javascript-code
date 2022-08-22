
function groupArrayElements(array, n){ 
    let equal_split = [];
    for (let x = n; x > 0; x--) 
        equal_split.push(array.splice(0, Math.ceil(array.length / x)));
    return equal_split;
}


  const data = groupArrayElements([1,2,3,4,5], 3);
  console.log(data);


//create an empty array equal_split. 
//iterate the loop on size n.
// In every iteration spice the array and push in equal_split and return array equal_split.
