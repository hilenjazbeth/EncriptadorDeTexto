const textoIngreso = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajeFinal = document.getElementById("mensajeFinal");

const muneco = document.getElementById("muneco");

const instrucciones = document.getElementById("instrucciones");

const infoderecha = document.getElementById("info-derecha");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//comentario

let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    
]

const remplazo = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add("oculto");
    textoIngreso.value ="";
    instrucciones.style.display = "none";
    botonCopiar.style.display= "block";
    infoderecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reseteo = () =>{
    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto");
    instrucciones.style.display = "block";
    botonCopiar.style.display= "none";
    infoderecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    textoIngreso.focus();
}

botonEncriptar.addEventListener("click", () => {

    const texto = textoIngreso.value.toLowerCase()
    if (texto != ""){     
        function encriptar(newText){
            for(let i = 0; i< reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
                
            };
            return newText
        };
            
    }else{
        alert("No existe texto que Encriptar");
        reseteo();
    }

   remplazo(encriptar(texto));
});


    botonDesencriptar.addEventListener("click", () =>{

    const texto = textoIngreso.value.toLowerCase();
    if (texto != ""){
        function desencriptar(newText){

            for(let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
                
            };
            return newText
         };
    }else{
        alert("No existe texto que desencriptar");
        reseteo();
    }   

    remplazo(desencriptar(texto))

    });

    botonCopiar.addEventListener("click", () => {
        let texto = mensajeFinal;
        navigator.clipboard.writeText(texto.value);
        alert("Texto copiado");
        reseteo();
    })
    


