// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// scrapes the URL above for divs with the 'mw-category' class

const category1 = document.querySelector('.mw-category')

// note: you can query select on previous DOM/const
//one way to create an array. ("Array.from (whatever)")

const links1 = Array.from(category1.querySelectorAll('a'))
const de1 = links1
  .map(link => link.textContent)
  .filter(streetName => streetName.includes('de'));

//another way to create an array (using a "spread") - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const links2 = [...category.querySelectorAll('a')]
const de2 = links2
  .map(link => link.textContent)
  .filter(streetName => streetName.includes('de'));

//code to copy/paste into: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category')
const links = Array.from(category.querySelectorAll('a'))
const de = links
  .map(link => link.textContent)
  .filter(streetName => streetName.includes('de'))
console.log(de)
