// Dom elements
let amount = document.getElementById("amount");
const interestRate = document.getElementById("interest-rate");
const yearTime = document.getElementById("time");
const cuota = document.getElementById("cuota");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    calculoCuota();
});

const calculoCuota = () => {
    const p = amount.value;
    const r = interestRate.value / 100 / 12;
    const n = yearTime.value * 12;
    console.log(p, r, n);
    const payment = Math.round(
        (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    );
    if (p <= 0 || n <= 0 || r <= 0) {
        cuota.innerHTML = `Sorry, check the values <strong>Principal, Interest and Years </strong> must be greater than cero.`;
    } else {

        cuota.innerHTML = `Your monthly mortgate payment will be <strong>€${payment}</strong>.`;
    }
    // The standard math equation
    // for calculating your monthly mortgage payment is:
    //     P(r(1 + r) ^ n / ((1 + r) ^ n) - 1))
    // P is the principal loan amount
    // r is the monthly interest rate
    // n is the total number of payments on your mortgage
};