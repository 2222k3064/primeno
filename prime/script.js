document.addEventListener('DOMContentLoaded', () => {
    const findButton = document.getElementById('findButton');
    const resultDiv = document.getElementById('result');

    findButton.addEventListener('click', () => {
        const range = document.getElementById('range').value;
        const [start, end] = range.split('-').map(Number);
        const primes = findPrimesInRange(start, end);
        resultDiv.textContent = primes.length ? `Prime numbers: ${primes.join(', ')}` : 'No prime numbers found';
    });

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    function findPrimesInRange(start, end) {
        const primes = [];
        for (let i = start; i <= end; i++) {
            if (isPrime(i)) primes.push(i);
        }
        return primes;
    }
});
