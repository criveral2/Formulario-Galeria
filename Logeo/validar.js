/* definimos variables globales que utilizaremos en nuestro .js*/ 
var cedula;
var nombre;
var apellido;
var numero;
var fech;
var cor;
var contra;

/*creamos una funcion que nos abarcara la mayor parte de las validaciones*/
function validarvacios() {
    var bandera = true;
    /*Creamos un for que nos recorrera todos los elmentos de nuestra html */
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        /*seleccionamos todoslos elementos de tipo text y comparamos si estos estan vacios */
        if (elemento.value == '' && elemento.type == 'text') {
            /*Si los elementos se encuentran vacios mostrara un  mensaje de error en nuestras etiquetas spam */
            if (elemento.id == 'nombre') {
                document.getElementById('errorNombre').style = 'display:block; color:white;'
                document.getElementById('errorNombre').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"

            }
            if (elemento.id == 'apellido') {
                document.getElementById('errorApellido').style = 'display:block; color:white;'
                document.getElementById('errorApellido').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'cedula') {
                document.getElementById('errorCedula').style = 'display:block; color:white;'
                document.getElementById('errorCedula').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'telefono') {
                document.getElementById('errorTelefono').style = 'display:block; color:white;'
                document.getElementById('errorTelefono').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'direccion') {
                document.getElementById('errorDireccion').style = 'display:block; color:white;'
                document.getElementById('errorDireccion').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'fecha') {
                document.getElementById('errorFecha').style = 'display:block; color:white;'
                document.getElementById('errorFecha').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'correo') {
                document.getElementById('errorCorreo').style = 'display:block; color:white;'
                document.getElementById('errorCorreo').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'contrasenia') {
                document.getElementById('errorContrasenia').style = 'display:block; color:white;'
                document.getElementById('errorContrasenia').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
        
        } else {

            /*se leeel dato de nuestra etiqueta cedula y posteriormente se la envia a nuestra funcion de validar cedula */


            if(elemento.id == 'cedula'){
                cedula = document.getElementById("cedula").value;
                /*si nuestra cedula esigual a 10 procede a ingresar a nuestro metodo de validacion */
                if (validarnumero(cedula)==false) {
                    document.getElementById('errorCedula').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorCedula').innerHTML = '<b>No se permite letras'
                }else{
                    validaCedula();
                }

            }

            /* el siguiente if compara si los elementos ingresados son de tipo numerico */
            if (elemento.id == 'nombre') {
                document.getElementById('errorNombre').style = 'display:none;'
                nombre = document.getElementById("nombre").value;
                if (validarNombre(nombre) == false) {
                    document.getElementById('errorNombre').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorNombre').innerHTML = '<b>No se permite numeros</b>'
                }
            }
             /* el siguiente if compara si los elementos ingresados son de tipo numerico */
            if (elemento.id == 'apellido') {
                document.getElementById('errorApellido').style = 'display:none;'
                apellido = document.getElementById("apellido").value;
              
                if (validarNombre(apellido) == false) {
                    document.getElementById('errorApellido').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorApellido').innerHTML = '<b>No se permite numeros</b>'
                }

            }
            if (elemento.id == 'telefono') {
                document.getElementById('errorTelefono').style = 'display:none;'
                numero= document.getElementById("telefono").value;
                /*compararemos si todos los datos son de tipo numericos */
                if (validarnumero(numero) == false) {
                    document.getElementById('errorTelefono').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorTelefono').innerHTML = '<b>Revise nuevamente su numero telefonico</b>'
                }
                /*Nos aseguramos de que nuestro telefono tenga un maximo de 10 */
                if (numero.length < 10) {
                    document.getElementById('errorTelefono').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorTelefono').innerHTML = '<b>Revise nuevamente su numero telefonico</b>'
                }

            }
            if (elemento.id == 'fecha') {
                document.getElementById('errorFecha').style = 'display:none;'
                fech = document.getElementById("fecha").value;
              
                if (validarformato(fech) == false) {
                    document.getElementById('errorFecha').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorFecha').innerHTML = '<b>Formato de fecha incorrecta</b>'
                }

            }
            if (elemento.id == 'correo') {
                document.getElementById('errorCorreo').style = 'display:none;'
                cor = document.getElementById("correo").value;
              
                if (validarEmail(cor) == false) {
                    document.getElementById('errorCorreo').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorCorreo').innerHTML = '<b>Extencion de correo incorrecta </b>'
                }

            }

            if (elemento.id == 'contrasenia') {
                document.getElementById('errorContrasenia').style = 'display:none;'
                contra = document.getElementById("contrasenia").value;
              
                if (contra.length < 8) {
                    document.getElementById('errorContrasenia').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorContrasenia').innerHTML = '<b>Ingrese nuevamente una nueva contraseña </b>'
                }
                
                if (validarPasswd (contra) == false) {
                    document.getElementById('errorContrasenia').style = 'display:block; color:rgb(238, 16, 16); font-size:20px;'
                    document.getElementById('errorContrasenia').innerHTML = '<b>Ingrese nuevamente una nueva contraseña </b>'
                }
                


            }

        
        }


        bandera = false
    }
   
}

function init() {
    var enviar = document.getElementById("boton");
    enviar.onclick = function (e) {
        validarvacios();
    

    }
 
}

function validarPasswd (contrase) {
   
    var p1 = contrase;
    var espacios = false;
    var cont = 0;
    // Este bucle recorre la cadena para comprobar
    // que no todo son espacios
      while (!espacios && (cont < p1.length)) {
          if (p1.charAt(cont) == " ")
              espacios = true;
          cont++;
      }
     
    if (espacios) {
     alert ("La contraseña no puede contener espacios en blanco");
     return false;
    }
     

     
   }

function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/.test(valor)){
     return true;
    } else {
     return false;
    }
  }



function validarformato(campo) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((campo.match(RegExPattern)) && (campo!='')) {
          return true;
    } else {
          return false;
    }
}


function validarnumero(dato) {
    var out = '';
    var filtro = '1234567890';//Caracteres validos

    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < dato.length; i++)
        if (filtro.indexOf(dato.charAt(i)) != -1) {
            //Se añaden a la salida los caracteres validos
            out += dato.charAt(i);
        }else{
            return false;
        }


    //Retornar el valor filtrado
    return out;
} 


function validaCedula() {
    console.log(cedula.length)
    //Preguntamos si la cedula consta de 10 digitos
    if (cedula.length == 10) {

        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = cedula.substring(0, 2);

        //Pregunto si la region existe ecuador se divide en 24 regiones
        if (digito_region >= 1 && digito_region <= 24) {

            // Extraigo el ultimo digito
            var ultimo_digito = cedula.substring(9, 10);

            //Agrupo todos los pares y los sumo
            var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
            var numero1 = cedula.substring(0, 1);
            var numero1 = (numero1 * 2);
            if (numero1 > 9) { var numero1 = (numero1 - 9); }

            var numero3 = cedula.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) { var numero3 = (numero3 - 9); }

            var numero5 = cedula.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) { var numero5 = (numero5 - 9); }

            var numero7 = cedula.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) { var numero7 = (numero7 - 9); }

            var numero9 = cedula.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) { var numero9 = (numero9 - 9); }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9;

            //Suma total
            var suma_total = (pares + impares);

            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0, 1);

            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1) * 10;

            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;

            //Si el digito validador es = a 10 toma el valor de 0
            if (digito_validador == 10)
                var digito_validador = 0;

            //Validamos que el digito validador sea igual al de la cedula
            if (digito_validador == ultimo_digito) {
                console.log('la cedula:' + cedula + ' es correcta');
                document.getElementById('errorCedula').style = 'display:none;'

            } else {
                console.log('la cedula:' + cedula + ' es incorrecta');
                document.getElementById('errorCedula').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                document.getElementById('errorCedula').innerHTML = '<b>Cedula Incorrecta'
            }

        } else {
            // imprimimos en consola si la region no pertenece
            console.log('Esta cedula no pertenece a ninguna region');
            document.getElementById('errorCedula').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
            document.getElementById('errorCedula').innerHTML = '<b>No pertenece a ninguna region'

        }
    } else {
        //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        console.log('Esta cedula tiene menos de 10 Digitos');
        document.getElementById('errorjeCedula').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
        document.getElementById('errorjeCedula').innerHTML = '<b>Esta cedula tiene menos de 10 Digitos'
    }
}
function validarNombre(dato) {

    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';//Caracteres validos

    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < dato.length; i++)
        if (filtro.indexOf(dato.charAt(i)) != -1) {

            out += dato.charAt(i);
            console.log(out)
        } else {
            console.log
            return false;
        }

}

