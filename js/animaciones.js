$capa = document.querySelector("#capa");


document.addEventListener("click", (e) => {

    if(e.target.className[0] == "d"){

        $capa.style.width = "100%";
        $capa.style.height = "100vh";
        $capa.style.borderRadius = "0 0 0% 0";
        document.querySelector(".windows_promp").style.zIndex = "100"

        setTimeout(() => {
            document.querySelector(".windows_promp").style.opacity = "1"
        }, 500);
    }
    
    if(e.target.id == "exit"){
        
        $capa.style.width = "0%";
        $capa.style.height = "0vh";
        $capa.style.borderRadius = "0 0 50% 0";
        
        document.querySelector(".windows_promp").style.opacity = "0"
        document.querySelector(".windows_promp").style.zIndex = "-100"
    }
})

let animation_shadow;
let animation_temblor = document.querySelectorAll("[data-temblor]");

document.addEventListener("mouseover", e => {

    let animation_shadow_all = document.querySelectorAll(".show_red");
    if(e.target.id == "sismos_true"){

        try{
            animation_temblor.forEach(el => {
                el.classList.add("temblor");
            })
    
            animation_shadow_all[e.target.dataset.showNumber].style.boxShadow = "0px 0px 10px red";
            animation_shadow = animation_shadow_all[e.target.dataset.showNumber];
        }
        catch(err){

        }
        
    }else{

        try{
            animation_shadow_all.forEach(el => {

                el.style.boxShadow = "none";
            })
            animation_temblor.forEach(el => {
                el.classList.remove("temblor");
            })
        }
        catch(err){

        }
    }
})