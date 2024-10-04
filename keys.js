const glass={
    name:'glass',
    color:'yellow',
    price:'20',
    iscleaned:'true'

}

const things=Object.keys(glass);
console.log(things);

const thingsValue=Object.values(glass);
console.log(thingsValue);

const keyValuePair=Object.entries(glass);
console.log(keyValuePair);

// [
//     [ 'name', 'glass' ],
//     [ 'color', 'yellow' ],
//     [ 'price', '20' ],
//     [ 'iscleaned', 'true' ]
//   ]

const  {iscleaned, ...shortGlass}=glass;
console.log(shortGlass);

//frezz :kono man poriborton kora jabena

// Object.freeze(glass);
// Object.seal(glass);   we can change the value only
// glass.source='india';
// glass.name='Mug';
// console.log(glass);