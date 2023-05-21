$capa = document.querySelector("#capa");


document.addEventListener("click", (e) => {

    if(e.target.id == "detalles"){

        $capa.style.width = "100%";
        $capa.style.height = "100vh";
        $capa.style.borderRadius = "0 0 0% 0";
        document.querySelector(".windows_promp").style.zIndex = "100"

        setTimeout(() => {
            document.querySelector(".windows_promp").style.opacity = "1"
        }, 1000);
    }
    
    if(e.target.id == "exit"){
        
        $capa.style.width = "0%";
        $capa.style.height = "0vh";
        $capa.style.borderRadius = "0 0 50% 0";
        
        document.querySelector(".windows_promp").style.opacity = "0"
        document.querySelector(".windows_promp").style.zIndex = "-100"
    }
})