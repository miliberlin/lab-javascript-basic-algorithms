// Iteration 1: Names and Input
const hacker1 = 'Amy';
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = 'Michelle';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if ( hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops
let capitalised = ''
for (let i = 0; i < hacker1.length; i++) {
  capitalised += hacker1[i].toUpperCase();
  if (i != hacker1.length - 1) {
    capitalised += ' '
  }
}
console.log(capitalised)

let reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i]
}
console.log(reversed)

const namesArr = [hacker1, hacker2];
namesArr.sort(); 

if (namesArr[0] === namesArr[1]) {
  console.log('What?! You both have the same name?')
} else if (namesArr[0] === hacker1) {
  console.log('The driver\'s name goes first.')
} else if (namesArr[0] === hacker2) {
  console.log('Yo, the navigator goes first definitely.')
} 


// Bonus 1

const loremIpsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

const loremArr = loremIpsum.split(' ');
let wordCount = loremArr.length;
console.log(`The number of words is ${wordCount}`);

let coundOfEt = 0;
for (let i = 0; i < loremArr.length -1; i++) {
  if (loremArr[i] === 'et') {
    coundOfEt++;
  }
}
console.log(`The word 'et' appears ${coundOfEt} times in the text.`)


// Bonus 2

const phraseToCheck = 'No \'x\' in Nixon';
const checkedPhrase = phraseToCheck.replace(/[^0-9a-z]/gi, '').toLowerCase();

let reversedPhrase = '';

for (let i = checkedPhrase.length -1; i >= 0; i--) {
  reversedPhrase += checkedPhrase[i];
}
if (reversedPhrase === checkedPhrase) {
  console.log('This is a palindrome!')
} else {
  console.log('This is not a palindrome.')
}