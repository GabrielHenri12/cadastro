let btn = document.querySelector('#verSenha');
let btnConfirme = document.querySelector('#verConfSenha');

btn.addEventListener('click', ()=>{
    let senha = document.querySelector('#senha')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }
})

btnConfirme.addEventListener('click', ()=>{
    let confirmesenha = document.querySelector('#confirmSenha')

    if(confirmesenha.getAttribute('type') == 'password'){
        confirmesenha.setAttribute('type', 'text')
    }else{
        confirmesenha.setAttribute('type', 'password')
    }
})

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validnome = false

let Usuario = document.querySelector('#nomeUsuario')
let labelUsuario = document.querySelector('#labelnomeUsuario')
let validusuario = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#LabelEmail')
let validemail = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelSenha')
let validsenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelconfirmSenha = document.querySelector('#labelConfirmSenha')
let validconfirmsenha = false

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: rgb(236, 42, 42)')
        nome.setAttribute('style', 'border-bottom: 2px solid rgb(236, 42, 42)')
        labelNome.innerHTML = 'Nome: Mínimo 3 letras!'
        validnome = false
    }else{
        labelNome.setAttribute('style', 'color: rgb(71, 245, 94)')
        nome.setAttribute('style', 'border-bottom: 2px solid rgb(71, 245, 94)')
        labelNome.innerHTML = 'Nome:'
        validnome = true
    }
})

Usuario.addEventListener('keyup', ()=>{
    if(Usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: rgb(236, 42, 42)')
        Usuario.setAttribute('style', 'border-bottom: 2px solid rgb(236, 42, 42)')
        labelUsuario.innerHTML = 'Usuario: Mínimo 5 caracteres!'
        validusuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: rgb(71, 245, 94)')
        Usuario.setAttribute('style', 'border-bottom: 2px solid rgb(71, 245, 94)')
        labelUsuario.innerHTML = 'Nome de Usuario:'
        validusuario = true
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 7){
        labelemail.setAttribute('style', 'color: rgb(236, 42, 42)')
        email.setAttribute('style', 'border-bottom: 2px solid rgb(236, 42, 42)')
        labelemail.innerHTML = 'Email invalido'
        validemail = false 
    }else{
        labelemail.setAttribute('style', 'color: rgb(71, 245, 94)')
        email.setAttribute('style', 'border-bottom: 2px solid rgb(71, 245, 94)')
        labelemail.innerHTML = 'Email:'
        validemail = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelsenha.setAttribute('style', 'color: rgb(236, 42, 42)')
        senha.setAttribute('style', 'border-bottom: 2px solid rgb(236, 42, 42)')
        labelsenha.innerHTML = '6 Dígitos no mínimo:'
        validsenha = false
    }else{
        labelsenha.setAttribute('style', 'color: rgb(71, 245, 94)')
        senha.setAttribute('style', 'border-bottom: 2px solid rgb(71, 245, 94)')
        labelsenha.innerHTML = 'senha:'
        validsenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if(confirmSenha.value != senha.value){
        labelconfirmSenha.setAttribute('style', 'color: rgb(236, 42, 42)')
        confirmSenha.setAttribute('style', 'border-bottom: 2px solid rgb(236, 42, 42)')
        labelconfirmSenha.innerHTML = 'Senha diferente:'
        validconfirmsenha = false
    }else{
        labelconfirmSenha.setAttribute('style', 'color: rgb(71, 245, 94)')
        confirmSenha.setAttribute('style', 'border-bottom: 2px solid rgb(71, 245, 94)')
        labelconfirmSenha.innerHTML = 'senha confirmada:'
        validconfirmsenha = true
    }
})

function cadastrar(){
    if(validnome && validusuario && validemail && validsenha && validconfirmsenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
        {
            nomeCad: nome.value,
            userCad: Usuario.value,
            emailCad: email.value,
            senhacad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

    }else{
        alert('Preencha todos os campos')
    }
}