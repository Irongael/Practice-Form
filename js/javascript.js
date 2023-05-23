let pass = document.querySelector("#pass");
let conPass = document.querySelector("#conPass");

function checkPass() {
    if(pass.value == conPass.value) {
        pass.classList.remove("mismatch");
        pass.classList.add("match");
        conPass.classList.remove("mismatch");
        conPass.classList.add("match");
    }
    else {
        pass.classList.remove("match");
        pass.classList.add("mismatch");
        conPass.classList.remove("match");
        conPass.classList.add("mismatch");
    }
}