let pass = document.querySelector("#pass");
let conPass = document.querySelector("#conPass");

function checkPass() {
    if(pass.value == conPass.value) {
        pass.classList.remove("invalid");
        pass.classList.add("valid");
        conPass.classList.remove("invalid");
        conPass.classList.add("valid");
    }
    else {
        pass.classList.remove("valid");
        pass.classList.add("invalid");
        conPass.classList.remove("valid");
        conPass.classList.add("invalid");
    }
}