const numbers=[2,3,5,6,7,5,3,9,10,8];

const squred=(arr)=>
{
    let sum=0;
    for(const num of arr){
       
      sum+=num**2;

    }
   
    return sum/arr.length;
}

const avg=squred(numbers);
 console.log(avg);
