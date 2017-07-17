// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function summer() {
    let total = 0;
    for(let i = 1; i < 1000; i++) {
        if( i % 3 === 0 || i % 5 === 0 ) {
            total += i;
        }
    }
    console.log(total)
}

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function prime_factor(number) {
    let primeFactor = number;
    let primeFactor2
    let highest;
    let divideable = false;
    function checker() {
        if( number % primeFactor === 0) {
            primeFactor2 = primeFactor-1;
            while(primeFactor2 > 1) {
                if(primeFactor % primeFactor2 === 0) {
                    divideable = true
                } 
            }
        }
    }
        if(divideable === false) {
            return primeFactor
        } else {
            checker()
        }
    }
}

console.log(prime_factor(50))