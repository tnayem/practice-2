// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(l,t,m){
    const laptopPrice = 35000;
    const totalLaptopPrice = laptopPrice*l;
    const tabletPrice = 15000;
    const totalTabletPrice = tabletPrice * t;
    const mobilePrice = 20000;
    const totalMobilePrice = mobilePrice * m;
    const totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalPrice
}
const totalMoney = calculateElectronicsBudget(2,3,4)
console.log(totalMoney);