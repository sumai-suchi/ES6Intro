const even=(arr)=>{
    // console.log(arr);
    const newOne=[];
    for(const char of arr)
    {
        if(char.length%2===0)
        {
              newOne.push(char);
        }
        else
        {
            continue;
        }
    }

    return newOne;
}

const nam=['ria','sumaiya','sanjida','munifa','munira','shima','helli'];
const evenNam=even(nam);
console.log(evenNam);