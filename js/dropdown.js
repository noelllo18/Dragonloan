const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const contact = document.querySelector('.contact');





openbtn.addEventListener('click', ()=>{
    contact.style.right = '0';
});

closebtn.addEventListener('click', ()=>{
    contact.style.right = '-100%';
});



const  showamount =  document.querySelector('.dropdown');
const  loanAmount = document.querySelector('.loan');

console.log(loanAmount)

showamount.addEventListener('click', ()=>{
    loanAmount.style.display = 'flex';
});

showamount.addEventListener('click', ()=>{
    loanAmount.style.display = 'flex';
});



