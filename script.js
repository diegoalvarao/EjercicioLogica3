function boton1(){
    document.getElementById("respuesta").innerHTML="";
    const numero = document.getElementById("numero").value;
    let contador = 1;
    for (let i = 1; i <= numero; i++) {
        contador *=i    
        
    }
    const respuesta = document.createTextNode("El factorial de " + numero + " es " + contador)
    document.getElementById("respuesta").appendChild(respuesta);
}
