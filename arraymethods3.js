const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]


// 1. alle namen van de superhelden:

const superheroesNames = superheroes.map((item) => {
    return item.name
});

console.log("Namen van alle superhelden: ", superheroesNames);

// 2. Alle lichte superhelden

const superheroesLight = superheroes.filter((item) => {
    return item.weight < 190
});

console.log("Superhelden die minder dan 190 pond wegen: ", superheroesLight);

// 3. Namen van superhelden die 200 pond wegen

const superheroesTwohundred = superheroes.filter((item) => {
    return item.weight == 200
}).map((item) => {
    return item.name
});

console.log("Namen van superhelden die 200 pond wegen: ", superheroesTwohundred);

// 4. First appearances

const superheroesFirstAppearances = superheroes.map((item) => {
    return item.first_appearance
});

console.log("Alle eerste optredens van de superhelden: ", superheroesFirstAppearances);

// 5a. Alle superhelden van DC Comics

const superheroesDC = superheroes.filter((item) => {
    return item.publisher == 'DC Comics'
});

console.log("Alle DC superhelden: ", superheroesDC);


// 5b. Alle superhelden van Marvel Comics

const superheroesMarvel = superheroes.filter((item) => {
    return item.publisher == 'Marvel Comics'
});

console.log("Alle Marvel superhelden: ", superheroesMarvel);

// 6. het totale gewicht van alle superhelden van DC Comics

const superheroesDCNumberweight = superheroesDC.map(({ name, publisher, alter_ego, first_appearance, weight }) => { return { name, publisher, alter_ego, first_appearance, weight: parseInt(weight) } });


const superheroesDCTotalWeight = superheroesDCNumberweight.reduce((currentTotal, item) => {
    return item.weight + currentTotal
}, 0);

console.log("Het totale gewicht van de DC helden: ", superheroesDCTotalWeight);

// 7. het totale gewicht van alle superhelden van Marvel Comics (nb zorg dat gewicht Unknown buiten de array valt)

const superheroesMarvelNumberweight = superheroesMarvel.map(({ name, publisher, alter_ego, first_appearance, weight }) => { return { name, publisher, alter_ego, first_appearance, weight: parseInt(weight) } });

const superheroesMarvelNumberweightFiltered = superheroesMarvelNumberweight.filter((item) => {
    return item.weight < 2000
});

const superheroesMarvelTotalWeight = superheroesMarvelNumberweightFiltered.reduce((currentTotal, item) => {
    return item.weight + currentTotal
}, 0);

console.log("Het totale gewicht van de Marvelhelden: ", superheroesMarvelTotalWeight);

// 8. Zoek de zwaarste superheld

const superheroesNumberweight = superheroes.map(({ name, publisher, alter_ego, first_appearance, weight }) => { return { name, publisher, alter_ego, first_appearance, weight: parseInt(weight) } });

const superheroesNumberweightFiltered = superheroesNumberweight.filter((item) => {
    return item.weight < 2000
});

const superheroesWeightmaximumSorted = superheroesNumberweightFiltered.sort((a, b) => {
    return a.weight - b.weight;
});

const superheroesWeightmaximum = superheroesWeightmaximumSorted[superheroesWeightmaximumSorted.length - 1];

console.log("De zwaarste superheld: ", superheroesWeightmaximum);
