function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(5, 40);
// --------------------------------------
function add2(price1, price2){
    return price1 + price2;
}
const bill2 = add(5, 40);
// console.log(bill, bill2);

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multi = sum * diff;
    const result = multi / 2;
    return result;
}
const result = doMath(20, 15);
// console.log(result);
//-------------------------
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log("even size")
        return true;
    }
    else{
        console.log("Odd size");
        return false;
    }
} 
// evenSizedString("Dhaka");
// evenSizedString("Mirpur");
// evenSizedString("Tangail");
// evenSizedString("Rajshahi");

function doubleorTripple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleorTripple(5, true));
// console.log(doubleorTripple(5, false));


/* write a function to give me the 
 sum of all number in Array*/
function sumOfNumbers(numbers){
   let sum = 0;
   for(const number of numbers){
//    console.log(number);
    sum = sum + number
   }
   return sum;
}
const numbs = [5, 10, 15, 20, 25];
// const sum = sumOfNumbers(numbs)
// console.log("sum of number: ", sum);
//-------------------------------------------
/**
 * create function that will return only the even number
 * return the sum of even number
 */
function evenNumbersOnly(numbers){
    const evens = [];
    for (const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [2, 4, 5, 7, 8, 10];
// const evens = evenNumbersOnly(number);
// console.log("Even numbers are: ", evens)
function sumOfEvenNumbers(numbers){
    let sum = 0;
    for( const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfEvenNumbers(numbers);

console.log("sum of the even number: ", sum);
