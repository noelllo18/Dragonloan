const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const contact = document.querySelector('.contact');





openbtn.addEventListener('click', ()=>{
    contact.style.right = '0';
});

closebtn.addEventListener('click', ()=>{
    contact.style.right = '-100%';
});






document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user input values
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + interest, years);
    const monthlyPayment = (amount * interest * x) / (x - 1);

    // Check if calculation is a valid number
    if (isNaN(monthlyPayment) || monthlyPayment === Infinity || monthlyPayment <= 0) {
        alert('Please fill in all fields with valid values.');
        return;
    }

    // Calculate total payment and total interest
    const totalPayment = monthlyPayment * years;
    const totalInterest = totalPayment - amount;

    // Display the results
    document.querySelector('.result').style.display = 'block';
    document.getElementById('monthly-payment').innerText = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').innerText = totalPayment.toFixed(2);
    document.getElementById('total-interest').innerText = totalInterest.toFixed(2);
});

