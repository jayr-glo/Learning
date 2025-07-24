function myCounter(){

    let counter = 0;
    return function() {
      counter++
      return counter;
    }
  
  }
  
  const add = myCounter();
  console.log(add());
  console.log(add());
  console.log(add());
  
  /* Secound Example */
  
  function outerFunction(outerVariable) {
      return function innerFunction(innerVariable) {
          console.log("Outer variable: " + outerVariable); // Access outer variable
          console.log("Inner variable: " + innerVariable); // Access inner variable
      };
  }
  
  const closureExample = outerFunction("Outer Value");
  closureExample("Inner Value");