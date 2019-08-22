// Un prompt s'affiche avec la question suivante
entry = prompt("De quel nombre veut tu calculer la factorielle ?");

function facto(x)
{
  let n = x;
  if (n >= 1)
    return n * facto(n-1);
  else
    return 1;

}

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
let answer = facto(entry);
console.log(`La factorielle de ${entry} est de : ${answer}`);
console.log(`Elle est calculée ainsi: ${entry} * ${entry-1}! = ${entry} * ${entry-1}* ${entry-2}! = ${entry} * ${entry-1}* ${entry-2}* ... * ${1}`)
