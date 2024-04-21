function validar() {
    var usu = document.getElementById('usu').value;  
    var pass = document.getElementById('pass').value;

    if (usu.length == 0 && pass.length == 0) {
        document.getElementById('mensaje').innerHTML= 'Correo y/o Contraseña No Ingresado';
        document.getElementById('mensaje').style.color='red';
    } else {
        // Verificar si el correo ingresado termina con "@correoaiep.cl"
        if (usu.endsWith("@correoaiep.cl")) {
            if (pass.length >= 8 && pass.length <= 12) {
                // Aquí puedes redirigir a la página adicional
                window.location.href = "Web_Pay.html";
            } else {
                document.getElementById('mensaje').innerHTML='Cantidad De Caracteres Incorrectos en la contraseña';  
            }
        } else {
            document.getElementById('mensaje').innerHTML='Solo se permite el acceso con correos de @correoaiep.cl';  
        }
    }
}
