// //show password toggler

let showPasswordBtn = document.querySelector('.show-password');
let passwordInp= document.querySelector('.password-input');
let passwordChecklist = document.querySelectorAll('.list-item');


showPasswordBtn.addEventListener('click',() =>{
    // toggle icon

    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';


})


// // string password vaidation

let validationRegex = [
    {regex: /.{8,}/}, // min 8 letters.
    {regex: /[0-9]/}, // number from 0-9,
    {regex: /[a-z]/}, // letters from a - z (lowercase),
    {regex: /[A-Z]/}, // letter from A - Z (uppercase),
    {regex: /[^A-Za-z0-9]/} // special characters

]

passwordInp.addEventListener('keyup', () => {
    
    validationRegex.forEach((item, i) => {
        let isValid = item.regex.test(passwordInp.value)

        if(isValid){
            passwordChecklist[i].classList.add('checked');
        }else{
            passwordChecklist[i].classList.remove('checked');
        }

    })

})