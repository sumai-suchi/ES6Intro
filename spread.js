// const arrayMax=Math.max(2,3,489,394,45,500);
// // console.log(arrayMax);
// const number=[1,4,5,7,30,20,50,88,89];
// const sonkha=Math.max(number);
// // console.log(sonkha);
// console.log(number);
// console.log(...number);


//akhane problem holo jodi kono array k copy kora hoi abong oi array te kono kicu push kora hoi
//tahole ta ager main array tew push hoye jai kintu array jodi spread out r maddhome copy kora
//hoi tahole tahole notun copy kora array te sonkha push korlew ta parent array te jai na.

//Example:1

// const friend=[1,2,3,4,5,5,6,6];
// const bondhu=friend;
// friend.push(222);
// console.log(friend);

// console.log(bondhu);

const friend=[1,2,3,4,5,5,6,6];
const dosto=[...friend];  //copy
friend.push(88);
console.log(friend);
console.log(dosto);
