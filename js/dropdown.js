const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const contact = document.querySelector('.contact');

console.log(contact);



openbtn.addEventListener('click', ()=>{
    contact.style.right = '0';
});

closebtn.addEventListener('click', ()=>{
    contact.style.right = '-100%';
});