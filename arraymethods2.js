//deel A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = superheroes.find((item) => {
    return item.name === 'Spiderman'
});

console.log(findSpiderMan)


//deel B dmv map methode

const doubleArrayValues = [1, 2, 3]

const arrayValuesDoubled = doubleArrayValues.map((x => x * 2));

console.log(arrayValuesDoubled);

//deel B dmv forEach methode

doubleArrayValues.forEach((item) => {
    console.log(item * 2)
});

//deel C

const containsNumberBiggerThan10A = [1, 4, 3, 6, 9, 7, 11];

const hasNumbersBiggerThan10A = containsNumberBiggerThan10A.some((item) => {
    return item > 10
});

console.log(hasNumbersBiggerThan10A)
// result should be true

const containsNumberBiggerThan10B = [1, 2, 1, 2, 1, 2];

const hasNumbersBiggerThan10B = containsNumberBiggerThan10B.some((item) => {
    return item > 10
});

console.log(hasNumbersBiggerThan10B)
// result should be false

//deel D

const TheGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];

const isItalyInTheGreat7 = TheGreat7.includes('Italy');

console.log(isItalyInTheGreat7)
// result should be true

//Deel E

const onefold = [1, 4, 3, 6, 9, 7, 11];

const tenfold = [];

onefold.forEach(function (v) { tenfold.push(v * 10); });

console.log(tenfold);

//Deel F

const everyNumberIsBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const isBelow100 = everyNumberIsBelow100.every((item) => {
    return item < 100
});

console.log(isBelow100)
// result should be: false

//Deel G

const arraySum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = arraySum.reduce((currentTotal, item) => {
    return item + currentTotal
}, 0);

console.log(bigSum)


