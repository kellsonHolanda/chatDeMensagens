const botaoEnviar = document.getElementById('enviar');
const caixaDeMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');
const socket = io();


caixaDeMensagem.addEventListener('keypress', function (e) {
        if (e.key == 'Enter'& caixaDeMensagem.value !== "" ) {
            
            socket.emit('nova mensagem escrita', caixaDeMensagem.value);
            caixaDeMensagem.value = "";
        }
})
botaoEnviar.addEventListener('click', ()=> {
    if (caixaDeMensagem.value !== ""){
        
        socket.emit('nova mensagem escrita', caixaDeMensagem.value);
        caixaDeMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem escrita', (msg) =>{
    const elementoDaMensagem = document.createElement('li');
    elementoDaMensagem.textContent = msg;
    elementoDaMensagem.classList.add('mensagem');
    chat.appendChild(elementoDaMensagem);
})