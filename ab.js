let countries  = {
   
      country: "united states",
      code: "0091",
      abv: "US", 
      address: {
         state: "ny",
         city: "cicero"
      }
}
//console.log(countries[0].address.state)
for(let x in countries){
   console.log(x, ":", countries[x])
}




// let users = {
//    name: "andy",
//    title: "boss",
//    grade: "1",
//    address: {
//       city: "Cicero",
//       State: "ny",
//       zip: 13299
//    }
// }

// let person = {
//    first_name: "jonny",
//    last_name: "johnson",
//    phone: "088-2343-222"
// };
// for (var result in person ){
//    //console.log(person[result][0])
//    console.log(person[0])
// }

// const person = {
//    fname:"John",
//    lname:"Doe",
//    age:25
//  }; 
 
//  let txt = "";
 
//  for(let x in person){
//     //console.log(x, ":", person[x])
//     txt += person[x];
//  }
//  document.getElementById("demo").innerHTML=txt;


// for(let result in person){
//    //console.log(result);
//    var a = result;
//    //console.log(a)
//    var b = person[result];
//    //console.log(b)
//    console.log(a);
//}