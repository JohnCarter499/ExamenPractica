const miBoton = document.querySelector('.mi-boton');

miBoton.addEventListener('click', (e)=>{
    e.preventDefault();
    const miEmail = document.querySelector('.mi-email').value;
    console.log(miEmail);
    emailValido = validarEmail(miEmail);
    console.log(emailValido);


    if(!emailValido){
        alert("E-mail incorrecto, porfavor de ingresar un E-mail valido")
        miEmail.focus();
        return;
    }else{
        alert("E-mail valido")
    }

    /* --------------------------------------------------- */
    /* --------------------------------------------------- */
    /* --------------------------------------------------- */

    const pass= document.querySelector('.mi-password').value;
    console.log(pass);
    passwordValido= validarPassword(pass);
    console.log(passwordValido);

    if(!passwordValido){
        alert("Password incorrecto, Debe tener minimo 8 Caracteres, Contener 2 mayúsculas, Una minúscula y un dígito especial")
        pass.focus();
        return;
    }else{
        alert("PassWors valido")
    }

    /*Si es correcto--------------------------------------------------- */

});


/* --------------------------------------------------- */
/* ------------------Validar Correo------------------- */
/* --------------------------------------------------- */

function validarEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

function validarPassword(miPassword){
    if (miPassword.length >=8 && !/[0-9]/.test(miPassword.match) && !/[a-z]/.test(miPassword.match) && !/[A-Z]/.test(miPassword.match)>2 )
    
    return true;

    else
    return false;

}

