//deel A

const coolWords = ['nice', 'awesome', 'tof'];

const addTheWordCool = coolWords.push('cool');

console.log("Deel A - Add cool:", coolWords);

//deel B

const fruit = ['appels', 'peren', 'citroenen'];

console.log("Deel B - Length fruit: ", fruit.length);

//deel C

const countries = ["Belgie", "Nederland", "Luxemburg"];

const firstCountry = countries[0];

console.log("Deel C - Eerste element: ", firstCountry);
console.log("Deel C - korte variant: ", countries[0]);

//deel D

const animals = ["Haas", "Cavia", "Kip", "Schildpad"];

console.log("Deel D - laatste dier: ", animals[animals.length - 1]);

//deel E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = presidents.slice(1);

console.log("Deel E - Trump impeach via Slice geeft: ", impeachTrumpSlice);
console.log("Resterende presidenten in array na slice: ", presidents);

const impeachTrumpSplice = presidents.splice(0, 1);

console.log("Deel E - Trump impeach via Splice geeft: ", impeachTrumpSplice);
console.log("Resterende presidenten in array na splice: ", presidents);

//deel F

const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

console.log(stringsTogether.join(' '));

//deel G

const Array1 = [1, 2, 3];

const Array2 = [4, 5, 6];

const combineArrays = Array1.splice(3, 0, 4, 5, 6);

console.log("Deel G - voorbeeld met het uitbreiden van een array via splice (zo moet het in dit geval niet): ", Array1);

const Array3 = [1, 2, 3];

const Array4 = [4, 5, 6];

const Array5 = Array3.concat(Array4);

console.log("Deel G - twee arrays samengevoegd tot een nieuwe array via concat: ", Array5);
