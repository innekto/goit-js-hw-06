const form = document.querySelector('.login-form');
console.log(form.elements);


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password} } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені!')
    } else {
        console.log({ 'email': email.value, 'password': password.value, 'name':name });
        form.reset();
   }
}
