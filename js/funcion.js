this.logueado = false;
$("#Entrada").click(function(){
    if($("#usuario").val() == "ADMIN" && $("#contraseña").val() == '00002'){
        logueado = true;
        if(logueado == true){
            window.location = 'pag 2.html'
            swal.fire('Inicio de Sesion Correcto')
        }
    }
    else{
        swal.fire('Inicio de Sesión Incorrecto');
    }
});
