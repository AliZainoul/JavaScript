k = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages voulez-vous ??");


for(let j = 1; j <= k; j++)
{ let blank = " ";
  let x = blank.repeat(k-j);
  let diez = "#";
  let y = diez.repeat(j);
  console.log(`${x}` + `${y}`);
}
