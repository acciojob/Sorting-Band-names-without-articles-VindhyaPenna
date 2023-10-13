//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let regex = /^(a |an |the )/i;

let x = touristSpots.map((element)=>{
   return element = element.replace(regex,"");
})

x.sort();

const ul = document.createElement('ul');
ul.id = 'band';
 
sortedBandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

//     for (let i = 0; i < x.length; i++) {
//       const li = document.createElementByTagName('li');
//       li.textContent = x[i];
//       ul.appendChild(li);
//     }
// // console.log(x);

document.body.appendChild(ul);
