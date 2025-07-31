// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(numbers){
    let smallNumber = numbers[0]
    for(const number of numbers){
        if(number<smallNumber){
            smallNumber = number;
        }
    }
    return smallNumber;
}
const myNumbers =lowestNumber([167, 190, 120, 165, 137]);
console.log(myNumbers)
