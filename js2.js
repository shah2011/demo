const total = function () {
   const num1 = document.getElementById("num1").innerHTML
   const num2 = document.getElementById("num2").innerHTML
   console.log();
   return (num1+num2);
 }
 
 const result = total(2, 4);
 
 console.log(result);