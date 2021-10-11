function sumar(){
    alert('Vas a sumar');
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)+parseInt(num2);
    alert("La suma es de " + resultado);
}
function restar(){
    alert('Vas a restar');
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)-parseInt(num2);
    alert("La resta es de " + resultado);
}
function divición(){
    alert('Vas a dividir');
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)/parseInt(num2);
    alert("La divición es de " + resultado);
}
function multiplicación(){
    alert('Vas a multiplicar');
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)*parseInt(num2);
    alert("La multiplicación es de " + resultado);
}

function ver(){
    var dato = document.getElementById('Materia').value;
    switch (dato){
        case "Programación":
            alert("Has seleccionado Programación");
            break;
        case "Soporte TI":
            alert("Has seleccionado Soporte TI");
            break;
        case "TICS":
            alert("Has seleccionado TICS");
            break;
        case "Diseño de software":
            alert("Has seleccionado Diseño de software");
            break;
    
    }
}

function CalculoEdad(){
    var edad = document.getElementById("Edad").value;
    
    if (edad>=18){
        alert('Eres mayor de edad');
    }
    else{
        alert('Eres menor de edad');
    }
}

