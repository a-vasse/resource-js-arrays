const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// Array.prototype.filter()
// Filters a range of data by the criteria
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen1 = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year < 1599) {
    return true;
  } else {
    return false;
  }
});
console.table(fifteen1);

// is the same as:

const fifteen2 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1599));
console.table(fifteen2);

// Array.prototype.map()
// Iterate through all data and output a desired format
// 2. Give us an array of the inventors first and last names

 const fullNames1 = inventors.map(inventor => inventor.first + ' ' + inventor.last);
 console.log(fullNames1)

 const fullNames2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
 console.log(fullNames2)

// Array.prototype.sort()
// Sort data by criteria
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedBirths1 = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
})
console.table(sortedBirths1)

//is the same as:

const sortedBirths2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(sortedBirths2)

// Array.prototype.reduce()
// iterates through, changing data (e.g. adding, subtracting etc) through each loop
// 4. How many years did all the inventors live all together?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0);
console.log(totalYears)

// 5. Sort the inventors by years lived
const oldest1 = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  if(lastInventor > nextInventor) {
    return -1;
  } else {
    return 1;
  }
});

console.table(oldest1)

//is the same as:

const oldest2 = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});

console.table(oldest2)


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortPeople = people.sort(function(a, b) {
  return a > b ? 1 : -1;
});

const sortedFull = sortPeople.map((person) => {
  const [last, first] = person.split(', ')
  return (first + ' ' + last);
});

console.log(sortedFull);

// 8. Reduce Exercise
// Sum up the instances of data

const transportation = data.reduce(function(obj, item) {
  if(!obj[item]) { //if there is no item, then item = 0
    obj[item] = 0; //this defines the initial number, otherwise "nan"
  }
  obj[item]++;
  return obj;
}, {})

console.log(transportation)
