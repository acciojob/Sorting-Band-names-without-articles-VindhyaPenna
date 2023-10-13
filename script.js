//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let regex = /^(a |an |the )/i;

let x = touristSpots.map((element)=>{
   return element = element.replace(regex,"");
})

x.sort();


const ul = document.getElementById("band");

    for (let i = 0; i < touristSpots.length; i++) {
      const li = document.createElementByTagName("li");
      li.textContent = touristSpots[i];
      ul.appendChild(li);
    }
// console.log(x);
