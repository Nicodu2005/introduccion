"use strict";
//crear contenedores
/*
1. var= global
2. let = local - variables
3. const = constantess*/

const btnValidar= document.getElementById("validar");
//console.log(btValidar);
//Al addEventlistener debo pasar dos paramentros
btnValidar.addEventListener("click",function(e) {
    e.preventDefault();
    let form = document.getElementById("dataForm");
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
    console.log(form[4].value);
    console.log(form[5].value);
    console.log(form[6].value);
    console.log(form[7].value);
    console.log(form[8].value);
    console.log(form[9].value);
    console.log(form[10].value);
    console.log(form[11].value);
    console.log(form[12].value);
    console.log(form[13].value);
    console.log(form[14].value);
    console.log(form[15].value);
    console.log(form[15].value);
    console.log(form[16].value);
    console.log(form[17].value);
    console.log(form[18].value);
    console.log(form[19].value);
    console.log(form[20].value);
    console.log(form[21].value);
});