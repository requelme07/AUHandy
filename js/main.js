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
let message = form.querySelector('.message')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('name: ', name.value)
    console.log('mail: ', mail.value)
    console.log('phone: ', phone.value)
    console.log('password: ', password.value)
    console.log('message: ', message.value)
})