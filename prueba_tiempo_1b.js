
function cuil (){
    var diaDeNacimiento = parseInt(prompt("Dia de Nacimiento"));
    var mesDeNacimiento = parseInt(prompt("Mes de Nacimiento"));
    var añoDeNacimiento = parseInt(prompt("Año de Nacimiento"));
    
    var diaActual = parseInt(prompt("Que dia es hoy:"));
    var mesActual = parseInt(prompt("El mes actual"));
    var añoActual = parseInt(prompt("El año actual"));
    
    var dif_año = parseInt(añoActual - añoDeNacimiento);
    var dif_mes = parseInt(mesActual - mesDeNacimiento);
    var dif_dias = parseInt(diaActual - diaDeNacimiento);

        if ( dif_año > 18 ) {
            alert("Le corresponde CUIL");
        }

        else if ( dif_año < 17 ) {
            alert(" No le corresponde CUIL");
        }

        else if ( dif_año == 0 ) {
            if (mesActual > mesDeNacimiento) {
                alert("Si le corresponde");
            }
        }

            else if ( mesActual < mesDeNacimiento) {
                    alert("No le corresponde");
                }

            else if (mesActual == mesDeNacimiento) {
                    if ( diaActual >= diaDeNacimiento) {
                        alert("Si le corresponde");
                    }else {
                        alert("No le correponde");
                    }
                    
                }
   
}
cuil ()