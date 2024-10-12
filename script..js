const modal = document.getElementById('modal')
const modalopener = document.getElementById('modal-opener')
const closeBtn = document.getElementById('close')
const body = document.querySelector('body')

// const error = document.getElementsByClassName('Error-Message')
// const login = document.getElementById('login')
// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;


// when clicked, modal opens
modalopener.onclick = function() {
    modal.style.display = 'block';
}
// to close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}
// close when user clicks outside the modal
window.onclick = function(event) {
    if (event.target == body) {
        modal.style.display = 'none';
    }
}

// login.addEventListener('click'){
//     if (username === 'username' && password === 'password'){
//         alert('Submitted')
//     }
//     // error Message
//     else{
//         error.innerHTML = 'Username or Password is Incorrect'
//     }
// }
