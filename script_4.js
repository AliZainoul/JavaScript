/*
  Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
  Sors une array qui contient le prénom et le nom des entrepreneurs ;
  Quel âge aurait chaque inventeur aujourd'hui ?
  Trie les entrepreneurs par ordre alphabétique du nom de famille.
*/

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let myarray = []; // variable globable au scope !
function entrepreneers() // fonction globable au scope
{
  for (let k = 0; k <= entrepreneurs.length - 1; k++)
  {
    myarray.push(`${entrepreneurs[k].first} ${entrepreneurs[k].last}`);
  }
}
entrepreneers();

//Affiche les entrepreneurs
console.log(entrepreneurs);

let a = "1: Filtrer tous les entrepreneurs par naissance années 70 - ";
let b = "2: Sors un array ou y a les prénoms noms des entrepreneurs - ";
let c = "3: Voir quel âge ont les entrepreneurs - ";
let d = "4: Trier par ordre alphabétique - ";
choix = prompt(`Quel est votre choix? \n ${a} \n ${b} \n ${c} \n ${d}`);
let choice = Number(choix);
console.log(choice);

switch (choice) {
  case 1:
  {
    console.log("Choix 1 : - Filtrer tous les entrepreneurs par naissance années 70 - ");
    //Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
    function is_born_seventees(k)
    {
      if (entrepreneurs[k].year >= 1970 && entrepreneurs[k].year <= 1979)
        return true;
      else
        return false;
    }

    function seventees()
    {
      for(let j = 0; j <= entrepreneurs.length - 1; j++)
      {
        if (is_born_seventees(j)) console.log(entrepreneurs[j].first, entrepreneurs[j].last);
      }
    }
    seventees();
    break;
  }

  case 2:
  {
    console.log("Choix 2 : - Sors un array ou y a les prénoms noms des entrepreneurs - ");
    // Sors un array qui contient les prénoms et noms d'entrepreneurs
    console.log(myarray);
    break;
  }

  case 3:
  {
    console.log("Choix 3 : - Voir quel âge ont les entrepreneurs - ");
    console.log(myarray);
    // Quel âge aurait chaque inventeur aujourd'hui?
    function timenow()
    {
    var today = new Date();
    //var dd = today.getDate();
    //var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    //if(dd<10) dd += '0';
    //if(mm<10) mm += '0';

    //today = mm + '/' + dd + '/' + yyyy;
    return yyyy;
    }
    console.log(timenow());

    function old_r_u()
    {
      for (let k = 0; k <= entrepreneurs.length - 1; k++)
      {
        console.log (`${myarray[k]} a ou bien ${ timenow() - 1 - entrepreneurs[k].year} ou bien ${ timenow() - entrepreneurs[k].year} ans.`)
      }
    }
    old_r_u();
    break;
  }
  case 4:
  {
    console.log("Choix 4 : - Trier par ordre alphabétique - ");
    // myarray.sort 
    break;
  }
  default:
  {
    console.log("Cette entrée n'est pas reconnue");
    break;
  }
}





// Trie les entrepreneurs par ordre alphabétique du nom de famille.
