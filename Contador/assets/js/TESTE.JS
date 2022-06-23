console.log("Hello World!")

function returnEvenValues(array){
    let evenNums = [];
    let evenNumsi = [];
    for(let i = 0; i< array.length; i++){
         if(array[i] % 2 === 0){
          evenNums.push(array[i]);
          console.log(`${array[i]} é par!`);
        }else {
            evenNumsi.push(array[i]);
            console.log(`${array[i]} não é par!`);
        }
    }    
    console.log('Os números pares são:',evenNums);   
    console.log('Os números impares são:',evenNumsi);
}
let array = [1, 2, 3, 4, 5, 7, 8];
returnEvenValues(array);
