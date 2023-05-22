(async() => {
    let result;
    const url = 'https://everyearthquake.p.rapidapi.com/all_hour.json';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6540e9183cmshf6a5ae7b5a14b33p1f6b62jsn844444534f85',
            'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        result = await response.json();

        document.querySelector(".content_cards").innerHTML = "";
        result.data.forEach((el, index) => {
            
            document.querySelector(".content_cards").innerHTML += `
            
            <div id="sismos_true" class="show_red" >
                <h2 id="sismos_true" style="padding-bottom: 10px;" data-show-number="${index}"  data-temblor="true" >${el["title"]}</h2>
                <p id="sismos_true" data-temblor="true" data-show-number="${index}" ><b data-temblor="true" data-show-number="${index}">Fecha:</b>${el["date"]}</p>
                <p id="sismos_true" data-temblor="true" data-show-number="${index}" ><b data-temblor="true" data-show-number="${index}">Continente:</b>${el["continent"]}</p>
                <p id="sismos_true" data-temblor="true" data-show-number="${index}" ><b data-temblor="true" data-show-number="${index}">Pais:</b>${el["country"]}</p>
                <button id="sismos_true" data-temblor="true" data-id="${el["id"]}"  data-show-number="${index}" class="detalles">Ver detalles...</button>
            </div>
            `;
        });

    } catch (error) {
        console.error(error);
    }

    document.addEventListener("click", (e) => {

        if(e.target.dataset.id){

            let data_id = result.data.filter((el) => el.id == e.target.dataset.id );
            console.log(data_id[0])
            document.querySelector(".content_data_dina").innerHTML = `
            
            <center><h2 style="padding-bottom: 10px;">${data_id[0]["title"]}</h2></center>
                <div>
                    <p>Fecha: ${data_id[0]["date"]}</p>
                    <p>Continente: ${data_id[0]["continent"]}</p>
                </div>
                <div>
                    <p>Pais: ${data_id[0]["country"]}</p>
                    <p>Profundidad: ${data_id[0]["depth"]}</p>
                </div>
                <div>
                    <p>Magnitud: ${data_id[0]["magnitude"]}</p>
                    <p>Latitud: ${data_id[0]["latitude"]}</p>
                </div>
                <div>
                    <p>Longitud: ${data_id[0]["longitude"]}</p>
                    <p>tsunami: ${data_id[0]["tsunami"]}</p>
                </div>
            `;
        }
    })
})()