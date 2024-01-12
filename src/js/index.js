let documentosDuvida = document.querySelectorAll(".duvida");

documentosDuvida.forEach(function(duvida){
    duvida.addEventListener("click", function(){
        duvida.classList.toggle("ativa");
    })
})