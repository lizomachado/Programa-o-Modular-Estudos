const chop = require('./chop');
const chomp = require('./chomp');
const squeeze = require('./squeeze');

console.log("* TESTES CHOP *");

console.log(chop("IFRS")); // IFR
console.log(chop("IF")); // I
console.log(chop(chop("IF"))); // ""
console.log(chop(chop(chop("IF")))); // ""

console.log(chop(2)); // undefined
console.log(chop(null)); // undefined
console.log(chop(undefined)); // undefined
console.log(chop()); // undefined
console.log(chop([])); // undefined
console.log(chop({})); // undefined
console.log(chop(new Date())); // undefined


console.log("\n* TESTES CHOMP *");

console.log(chomp("IFRS\n")); // IFRS
console.log(chomp("IFRS\r")); // IFRS
console.log(chomp("IFRS\n\r")); // IFRS
console.log(chomp("IFRS\r\n")); // IFRS
console.log(chomp("IFRS\n\r\n\r")); // IFRS
console.log(chomp("IFRS\nRio Grande\n")); // IFRS\nRio Grande

console.log(chomp("IFRS \t\t")); // IFRS \t\t
console.log(chomp("IFRS \t\r")); // IFRS \t
console.log(chomp("IFRS \t\r\t")); // IFRS \t\r\t

console.log(chomp(2)); // undefined
console.log(chomp(null)); // undefined
console.log(chomp(undefined)); // undefined
console.log(chomp()); // undefined
console.log(chomp([])); // undefined
console.log(chomp({})); // undefined
console.log(chomp(new Date())); // undefined


console.log("\n* TESTES SQUEEZE *");

console.log(squeeze("IFFRS")); // IFRS
console.log(squeeze("IFRRRRS")); // IFRS
console.log(squeeze("IFRRrRRS")); // IFRrRS

console.log(squeeze("     ")); // " "
console.log(squeeze("IIIII")); // "I"

console.log(squeeze("Progg.  Corporrativa!!!")); // "Prog. Corporativa!"

console.log(squeeze(2)); // undefined
console.log(squeeze(null)); // undefined
console.log(squeeze(undefined)); // undefined
console.log(squeeze()); // undefined
console.log(squeeze([])); // undefined
console.log(squeeze({})); // undefined
console.log(squeeze(new Date())); // undefined