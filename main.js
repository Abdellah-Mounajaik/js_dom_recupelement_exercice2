let myBody = document.getElementsByTagName("body")[0]
console.log(myBody);

let premier = myBody.firstElementChild
console.log(premier);
let dernier = myBody.lastElementChild
console.log(dernier);

let exo4 = document.getElementsByTagName("div")[0].children
console.log(exo4);

let li = document.getElementsByTagName("li")[0].nextElementSibling
let liNext = li.nextElementSibling
console.log(liNext);
let liPrec = li.previousElementSibling
console.log(liPrec);
