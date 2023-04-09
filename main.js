const modal = document.querySelector('.modal')

const openRegisterForms = document.querySelectorAll('.navbarRight__register')
const openLoginForms = document.querySelectorAll('.navbarRight__login')

const closeRegisterForms = document.querySelectorAll('.auth-form-register .auth-form__controls .btn , .modal__overlay')
const closeLoginForms = document.querySelectorAll('.auth-form-login .auth-form__controls .btn , .modal__overlay')

const authFormLoginSwitchs = document.querySelectorAll('.auth-form-login .auth-form__switch')
const authFormRegisterSwitchs = document.querySelectorAll('.auth-form-register .auth-form__switch')

const RegisterForm = document.querySelector('.auth-form-register')
const LoginForm = document.querySelector('.auth-form-login')


// RegisterForms
function showRegisterForms() {
    modal.classList.add('open')
    RegisterForm.classList.add('open')
}

function offRegisterForms() {
    modal.classList.remove('open')
    RegisterForm.classList.remove('open')
}

function RegisterSwitch() {
    RegisterForm.classList.remove('open')
    LoginForm.classList.add('open')
}

for (openRegisterForm of openRegisterForms) {
    openRegisterForm.addEventListener('click', showRegisterForms)
}

for (closeRegisterForm of closeRegisterForms) {
    closeRegisterForm.addEventListener('click', offRegisterForms)
}
for (authFormRegisterSwitch of authFormRegisterSwitchs) {
    authFormRegisterSwitch.addEventListener('click', RegisterSwitch)
}

// Login
function showLoginForms() {
    modal.classList.add('open')
    LoginForm.classList.add('open')
}

function offLoginForms() {
    modal.classList.remove('open')
    LoginForm.classList.remove('open')
}

function LoginSwitch() {
    RegisterForm.classList.add('open')
    LoginForm.classList.remove('open')
}

for (openLoginForm of openLoginForms) {
    openLoginForm.addEventListener('click', showLoginForms)
}

for (closeLoginForm of closeLoginForms) {
    closeLoginForm.addEventListener('click', offLoginForms)
}
for (authFormLoginSwitch of authFormLoginSwitchs) {
    authFormLoginSwitch.addEventListener('click', LoginSwitch)
}