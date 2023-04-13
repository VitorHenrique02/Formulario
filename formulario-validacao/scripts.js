const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está preenchido
    if (nameInput.value === ""){
        alert("Por favor, preencha seu nome");
        return;
    }

    //verifica se o email está preenchido e é válido.
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha seu e-mail");
        return;
    }

    //verifica se a senha está preenchida e é válida.
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }

    //verifica se a situação de trabalho foi selecionada.
    if (jobSelect.value === "") {
        alert("Por favor, selecione a situação");
        return;
    }

    //verifica se a mensagem está preenchida .
    if (messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem");
        return;
    }

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

//função que valida o email
function isEmailValid(email){
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        //usuario10@hot.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

//função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true;
    }
    return false;
}