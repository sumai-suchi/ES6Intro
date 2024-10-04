const num1=[1,2,3,4,5,6];
const num2=[9,8,7,76];

const add=(arr1,arr2)=>
{
    const merge=[...arr1,...arr2];
    // console.log(merge);
    const maximum=Math.max(...merge);
    return maximum;
}




const marge=add(num1,num2);
console.log(marge);