(async() => {
    let dataAll;
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

        const url2 = 'https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1';
        const options2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6540e9183cmshf6a5ae7b5a14b33p1f6b62jsn844444534f85',
                'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
            }
        };

        const response2 = await fetch(url2, options2);
        const result2 = await response2.json();
        dataAll = result2.data;

    } catch (error) {
        console.error(error);
    }

    document.addEventListener("click", (e) => {

        if(e.target.dataset.id){

            let data_id = result.data.filter((el) => el.id == e.target.dataset.id );
            if(data_id.length <= 0) data_id = dataAll.filter(el => el.id == e.target.dataset.id);
            document.querySelector(".content_data_dina").innerHTML = `
        
            <div> 
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
            </div>
                <div>
                    <iframe src="https://maps.google.com/maps?width=600&height=400&hl=en&q=${data_id[0]["latitude"]}, ${data_id[0]["longitude"]}&t=&z=14&ie=UTF8&iwloc=B&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            `;
        }

        if(e.target.id == "search"){
            
            let rango = document.querySelector("#rango").value;
            document.querySelector(".content_cards").innerHTML = "";

            for (let i = 0; i < Number(rango) ; i++) {
             
                document.querySelector(".content_cards").innerHTML += `
            
                <div id="sismos_true" class="show_red" >
                    <h2 id="sismos_true" style="padding-bottom: 10px;" data-show-number="${i}"  data-temblor="true" >${dataAll[i]["title"]}</h2>
                    <p id="sismos_true" data-temblor="true" data-show-number="${i}" ><b data-temblor="true" data-show-number="${i}">Fecha:</b>${dataAll[i]["date"]}</p>
                    <p id="sismos_true" data-temblor="true" data-show-number="${i}" ><b data-temblor="true" data-show-number="${i}">Continente:</b>${dataAll[i]["continent"]}</p>
                    <p id="sismos_true" data-temblor="true" data-show-number="${i}" ><b data-temblor="true" data-show-number="${i}">Pais:</b>${dataAll[i]["country"]}</p>
                    <button id="sismos_true" data-temblor="true" data-id="${dataAll[i]["id"]}"  data-show-number="${i}" class="detalles">Ver detalles...</button>
                </div>
                `;
            }
        }
    })
})()