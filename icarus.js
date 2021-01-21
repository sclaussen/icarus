const ICARUS = 1;
const DAEDALUS = 2;

let icarusAttempts = 0;
let daedalusAttempts = 0;
for (let n = 0; n < 100000; n++) {
    let attempts = fly(ICARUS, n);
    if (attempts > icarusAttempts) {
        icarusNumber = n;
        icarusAttempts = attempts;
    }

    attempts = fly(DAEDALUS, n);
    if (attempts > daedalusAttempts) {
        daedalusNumber = n;
        daedalusAttempts = attempts;
    }
}


console.log('Icarus: ' + icarusNumber + '/' + icarusAttempts);
console.log('Daedalus: ' + daedalusNumber + '/' + daedalusAttempts);


function fly(god, n) {
    for (let attempt = n; attempt < 1000000; attempt++) {
        if (n % 2 === 0) {
            // Even number
            n /= 2;
        } else {
            // Odd number
            n *= 3;
            if (god === ICARUS) {
                n += 1;
            } else {
                n -= 1;
            }
        }

        if (n === 1) {
            return attempt;
        }
    }

    return -1;
}
