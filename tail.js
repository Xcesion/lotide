const tail = function(arr){
  let total = [];
  if (arr.length > 2){
    for(let i = 0; i < arr.length; i++){
      total.push(arr[i]);
    }
    return total;
  } else {
    return total;
  }
}

module.exports = tail; 