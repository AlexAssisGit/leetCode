/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    

    let arrDivisible = Array.from({length: n}, (_, i) => i + 1);
    let arrNotDivisible = []

    // console.log(arrDivisible);

    for (let i = arrDivisible.length - 1; i >= 0; i--) {
        if (arrDivisible[i] % m !== 0) {
            // console.log(arrDivisible[num]);
            arrNotDivisible.push(parseInt(arrDivisible[i], 10));
            arrDivisible.splice(i, 1);
        }
    }

    const num1 = arrDivisible.reduce((acc, val) => acc + val, 0);
    const num2 = arrNotDivisible.reduce((acc, val) => acc + val, 0);

    console.log("Divisible " + arrDivisible + " sum = " + num1);
    console.log("Not divisible " + arrNotDivisible + " sum = " + num2);

    return(num2 - num1);

};