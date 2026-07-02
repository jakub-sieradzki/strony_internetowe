// function napiwek(rachunek)
// {
//   let procent;
  
//   if(rachunek < 100)
//   {
//     procent = 0.1;
//   }
//   else if(rachunek >= 100 && rachunek <= 250)
//   {
//     procent = 0.07;
//   }
// else
//   {
//     procent = 0.04;
//   }
  
//   return rachunek * procent;
// }

// const zadanie = Number(prompt("Podaj jaki rachunek dostałeś/aś"));
// alert("Powienieś/aś zostawić napiwek w wysokości " + napiwek(zadanie)) + " złotych";

const imiona = ["Adam", "Paweł", "Ania", "Matylda"];
const liczby = [12,20,32,67];
const mieszana = ["Kuba", 67, 2.5, "Paweł"];

const pogoda = new Array("zimno", "ciepło", "pada");

console.log(imiona[2]);
console.log(liczby);
console.log(mieszana.length);

imiona.push("Michał");
console.log(imiona);

console.log(liczby.pop());
console.log(liczby);

imiona.shift();
console.log(imiona);

console.log(imiona.join("-"));
