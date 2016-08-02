//Balance Point (John's)
// find a point in an array where one side's sum == the other side's
// if point exists, return true
// else return false
function balPoint(arr) {
  for (var i = 1; i < arr.length; i++) {
    var sum1 = 0;
    var sum2 = 0;
    var slice = arr.slice( 0, i );
    for ( var j = 0; j < slice.length; j++) {
      sum1 += slice[j]
    }
    slice = arr.slice( i, arr.length );
    for ( var j = 0; j < slice.length; j++) {
      sum2 += slice[j]
    }
    if ( sum1 == sum2 ) {
      return true;
    }
    }
    return false;
  }
console.log(balPoint([10,2,3,8]))
