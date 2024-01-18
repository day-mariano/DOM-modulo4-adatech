let result1;
let result2;

window.addEventListener("resize", function() {
  result1 = window.innerWidth
  result2 = window.outerWidth

  console.log(result1)
  console.log(result2)

  if(result1 < 900) {
    console.log('mobile:')
  } else {
    console.log('desktop')
  }
});
