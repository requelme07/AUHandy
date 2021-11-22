// Modal
let dataModal = document.querySelector('[data-modal]')
let modalId = document.getElementById('modal')
let close = document.querySelector('[data-close]')
let modalDialog = document.getElementById('modal_dialog')


dataModal.onclick = function() {
    modalId.classList.add('show');
}
close.onclick = function() {
    modalId.classList.remove('show');
}
modalId.onclick = function() {
    modalId.classList.remove('show')
}
modalDialog.onclick = function(event) {
    event.stopPropagation()
}

// Form validation

let form = document.querySelector('.form_registration')
let btn = form.querySelector('.btn')
let name = form.querySelector('.name')
let mail = form.querySelector('.mail')
let phone = form.querySelector('.phone')
let password = form.querySelector('.password')
let spanName = form.querySelector('.spanName')
let spanMail = form.querySelector('.spanMail')
let spanPhone = form.querySelector('.spanPhone')
let spanPass = form.querySelector('.spanPass')
let spanMess = form.querySelector('.spanMess')

let regPhone = /^((\+7|7|8)+([0-9]){10})$/;
let regMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regMessage = /[A-Za-zA-Яа-яЁё]/;
let regPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;


btn.onclick = function(event) {
    event.preventDefault();
    if(!validate(regMessage, name.value)) {
        notValid(name, spanName, "Введите имя")
    } else {
        valid(name, spanName, "")
    }
    if(!validate(regMail, mail.value)) {
        notValid(mail, spanMail, "Некорректный email")
    } else {
        valid(mail, spanMail, "")
    }
    if(!validate(regPhone, phone.value)) {
        notValid(phone, spanPhone, "Некорректный номер телефона")
    } else {
        valid(phone, spanPhone, "")
    }
    if(!validate(regPass, password.value)) {
        notValid(password, spanPass, "Длина пароля должна быть не менее 6 символов, минимум одна цифра,буквенная часть пароля должна содержать как строчные так и прописные буквы")
    } else {
        valid(password, spanPass, "")
    }
}
function validate (regex, inp) {
    return regex.test(inp)
}
function notValid (inp, el, mess) {
    inp.classList.add('is-invalid')
    el.innerHTML = mess
}
function valid (inp, el, mess) {
    inp.classList.remove('is-invalid')
    inp.classList.add('is-valid')
    el.innerHTML = mess
}
$(".phone").mask("+7(999)999-99-99");