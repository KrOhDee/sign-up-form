const form = document.querySelector('form');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('password-confirm');
//const button = document.querySelector('.btn');
const greeting = document.querySelector('.greeting');
//const nameV = document.querySelector('#first-name');

form.addEventListener('submit', e => {
if (!form.checkValidity()) {
    e.preventDefault()
}
form.classList.add('was-validated')
if (document.querySelector('#first-name').value !== '') {
greeting.innerHTML = '-' + 'Thanks' + ' ' + document.querySelector('#first-name').value + '!';
}
});

//button.addEventListener('click', () => {
//greeting.innerHTML = '-' + 'Thanks' + ' ' + document.querySelector('#first-name').value + '!';
//}
//)