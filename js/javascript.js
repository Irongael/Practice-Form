function checkPass() {
    let pass = document.querySelector("#pass");
    let conPass = document.querySelector("#conPass");

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

function pressed(choice) {
    let fname = document.querySelector("#fnameItem");
    let lname = document.querySelector("#lnameItem");
    let email = document.querySelector("#emailItem");
    let phone = document.querySelector("#phoneItem");

    if(choice == "fname") {
        fname.classList.add("pressed");
    }
    else if(choice == "lname") {
        lname.classList.add("pressed");
    }
    else if(choice == "email") {
        email.classList.add("pressed");
    }
    else if(choice == "phone") {
        phone.classList.add("pressed");
    }
    else {
        console.log("error");
    }
}