// fecha actual  dd/mm/aaaa
// pido fecha de nacimiento dd/mm/aaaa
// establezco condicional
// comparo y saco edad
// alert si tengo que dar CUIL

//var fechaActual;
//var fechaNacimiento = '(25/10/1985)' //prompt('Ingresar fecha de nacimiento (dd/mm/aaaa)')

function diferenciaFechas (fechaActual = "30/09/2022", fechaNacimiento = "25/10/1985") {


    const dias_mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

     fechaActual_dias = parseInt(fechaActual.split("/")[0]);  //30
     fechaActual_meses = parseInt(fechaActual.split("/")[1]); //09
    let fechaActual_año = parseInt(fechaActual.split("/")[1]); //2022

     fechaNacimiento_dias = parseInt(fechaNacimiento.split("/")[0]);  //25
     fechaNacimiento_meses = parseInt(fechaNacimiento.split("/")[1]); //10
    let fechaNacimiento_año = parseInt(fechaNacimiento.split("/")[1]); //1985


    if ( fechaActual_año - fechaNacimiento_año < 17) {
        alert ("No se cumple ")
    } else if ( fechaActual_año - fechaNacimiento_año >= 17) {

    let fechaActual_meses_a_dias = 0
    let fechaActual_dia_del_año = 0

    for (let i = 0; i < fechaActual; i++) {
        fechaActual_meses_a_dias += dias_mes[i]  // ahora sacamos dias que han pasado desde el dia 0 en año actual
           
    }

    fechaActual_dia_del_año = fechaActual_meses_a_dias + fechaActual_dias;
    console.log(fechaActual_dia_del_año)

    let fechaNacimiento_meses_a_dias = 0
    let fechaNacimiento_dia_del_año = 0

    for (let i = 0; i < fechaActual; i++) {
        fechaNacimiento_meses_a_dias += dias_mes[i]  // ahora sacamos dias que han pasado del año de nacimiento desde el dia 0
           
    }

    fechaNacimiento_dia_del_año = fechaNacimiento_meses_a_dias + fechaNacimiento_dias;
    console.log(fechaNacimiento_dia_del_año)

        return (fechaActual_dia_del_año - fechaNacimiento_dia_del_año)
}


/* He intentado sacar el valor por posicion de la fecha, luego hacer la resta de años y establcer el condicional para eliminar
si es menor de 17. 
Si es mayor de 17, tenia que comprobar si los habia cumplido, por lo que situandome en el año,
solo debia sumar los dias del mes que habian pasado mas los dias de los meses anteriores que los tengo en una constante.
Utilizando un bucle. 



    