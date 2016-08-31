for (var count = 99; count >= 0; count--) {
  var countDown = count - 1
  if (count > 1){
    console.log(count + ' bottles of beer on the wall, ' + count + ' bottles of beer');
    if (count > 2){
        console.log('Take one down and pass it around, ' + countDown + ' bottles of beer on the wall');
      } else {
        console.log('Take one down and pass it around, ' + countDown + ' bottle of beer on the wall');
    }
  } else if (count === 1){
    console.log(count + ' bottle of beer on the wall, ' + count + ' bottle of beer');
    console.log('Take one down and pass it around, ' + countDown + ' bottle of beer on the wall');
  }
  if (count === 0) {
    console.log('No more bottles of beer on the wall, no more bottles of beer. ');
    console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
  }
}
