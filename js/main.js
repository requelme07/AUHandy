
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
