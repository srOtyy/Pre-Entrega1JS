let nombreUsuario;
let edadUsuario;
let telefonoUsuario;
let rtaBucle = 1;

//verifica la edad ingresada, esperando que sea mayor de edad
function verificarEdad(edad){
    if(edad >= 18){
        return true;
    }else{
        return false;
    }
}
//Para cambiar los datos ingresados
const cambiarDato = (dato)=>{
    const nuevoDato = prompt(`ingrese su nuevo ${dato}`);
    return nuevoDato;
}

while(rtaBucle != 0){
    if(!nombreUsuario){ //Verifica si existe un usuario creado ya
        //aca empieza a crear el usuario
        alert("Bienvenido!");
        nombreUsuario = prompt("Ingrese su nombre: ");
        edadUsuario = parseInt(prompt("Ingrese su edad: "));
        // verificamos si es mayor de edad
        if(verificarEdad(edadUsuario)){ 
            telefonoUsuario = parseInt(prompt("Ingrese su numero de telefono: "));
            alert("Usuario creado con exito!");

        // si no es mayor de edad se elimina el nombre para que se pueda volver a inciar el bucle
        }else{ 
            nombreUsuario = '';
            alert("Las politicas de la pagina no permiten menores de edad");
        }
    }else{ // esta parte del bucle se ejecuta cuando el usuario ya esta creado
        rtaBucle = parseInt(prompt("[1]: Ver datos del usuario \n[2]:Cambiar nombre \n[3]:Cambiar numero de telefono \n[4]:Eliminar datos del usuario \n[0]:SALIR "));
        switch(rtaBucle){
            case 1:{
                alert(`Nombre: ${nombreUsuario} \n Edad: ${edadUsuario} \n Telefono: ${telefonoUsuario} `);
                break;
            }
            case 2:{
                nombreUsuario = cambiarDato("nombre");
                break;
            }
            case 3:{
                telefonoUsuario = parseInt(cambiarDato("numero de telefono"));
                break;
            }
            case 4:{
                nombreUsuario = '';
                edadUsuario= 0;
                telefonoUsuario =0;
                alert("Datos eliminados con exito!");
                break;
            }
            case 0:{
                alert("Ciao!")
                break;
            }
            default:{
                alert("Ingrese una opcion valida");
                break;
            }
        }
    } 
}

