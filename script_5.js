/*
  Est-ce que tous les livres ont été au moins empruntés une fois ?
  Quel est livre le plus emprunté ?
  Quel est le livre le moins emprunté ?
  Trouve le livre avec l'ID: 873495 ;
  Supprime le livre avec l'ID: 133712 ;
  Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
*/

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
console.log(books[0]);
console.log(books);

let myarray = []; // variable globable au scope !
let myarray2 = [];
let bookz = books;
console.log(bookz);

function books_n_rented() // fonction globable au scope
{
  for (let k = 0; k <= bookz.length - 1; k++)
  {
    myarray.push(`${bookz[k].rented}`);
  }
}
books_n_rented();
console.log(myarray);
myarray2 = myarray.sort(function(a, b){return a-b});
console.log(myarray2);

//   Est-ce que tous les livres ont été au moins empruntés une fois ?
function was_rented()
{
  let count = 0;
  for (let k = 0; k <= bookz.length - 1; k++)
  {
    if (Number(bookz[k].rented) >= 1) count += 1;
  }
  if (count == bookz.length)
    return true;
  else
    return false;
}
was_rented();
console.log(was_rented());

//

function most_rented()
{
  let x = myarray2[myarray2.length-1];
  console.log(x);
  for (let k = 0; k <= bookz.length - 1; k ++)
  {
    if (bookz[k].rented == x)
    {
      console.log(`Le livre le plus pris est: ${bookz[k].title}`);
    }
  }
}
most_rented();

function least_rented()
{
  let y = myarray2[0];
  console.log(y);
  for (let k = 0; k <= bookz.length - 1; k ++)
  {
    if (bookz[k].rented == y)
    {
      console.log(`Le livre le moins pris est: "${bookz[k].title}"`);
    }
  }
}
least_rented();

//search with ID
function index_by_id(tab,n)
{
  for (let k = 0; k <= tab.length - 1; k ++)
  {
    if (Number(tab[k].id) == n)
      return k;
  }
}
console.log(bookz[index_by_id(bookz,873495)]);

console.log(bookz[0]);
console.log(bookz[0]);

function deletee_by(id)
{
  let index = index_by_id(bookz,id);
  console.log(index);
  console.log(bookz[index]);
  console.log(bookz);
  if (index == 0) bookz.shift(); else bookz.splice(j-1,1);
  console.log(bookz);
}
