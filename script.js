//your code here
let regex = /^(a |an |the )/i;

let x = touristSpots.map((element)=>{
   return element = element.replace(regex,"");
})

x.sort();
console.log(x);
