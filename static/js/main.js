let sepalLength = document.querySelector('#sl')
let sepalWidth = document.querySelector('#sw')
let petalLength = document.querySelector('#pl')
let petalWidth = document.querySelector('#pw')
let button = document.querySelector('.button')
let formLogin = document.querySelector('#form-login')
let menu = document.querySelector('.menu')
let showMenu = document.querySelector('.nav-link')


formLogin.addEventListener('input', ()=>{
    if(sepalLength.value.length>0 && sepalWidth.value.length>0 && 
        petalLength.value.length>0 && petalWidth.value.length>0){
            button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled', 'disabled')
    }
})

// hamburger menu
menu.addEventListener('click', ()=>{
    showMenu.classList.toggle('show')
})