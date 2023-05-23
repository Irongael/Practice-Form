let pass = document.querySelector("#pass");
let conPass = document.querySelector("#conPass");
const btn = querySelector("#btn");

function checkPass(pass1, pass2) {
    if(pass1 == pass2) {
        return true;
    }
    else {
        return false;
    }
}

btn.addEventListener('click', () => {
    if(!(checkPass(pass, conPass))) {
        pass.setCustomValidity("passwords don't match");
    }
});