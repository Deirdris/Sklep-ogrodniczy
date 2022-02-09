function displayProducts(lista){
    document.getElementById('listaP').innerHTML = '';

    for(let i = 0; i < lista.length; i++){
        let container = document.createElement("div");

        container.className = "product";
        container.className = "d-flex";
        container.style.width = "100%";
        container.style.background = "#1b1c1b";
        container.style.marginTop = "20px";
        container.style.border = "black solid 1px";

        container.innerHTML = `
            <div style="width: 50%;">
                <p style="font-size: 25px; padding-left: 25px; padding-top: 15px; color: #73705a;">${lista[i].nazwa}</p>
                <p style="padding-left: 25px; color: #c5d4c5;">${lista[i].firma} | ${lista[i].typP}</p>
            </div>
            <div style="width: 50%;"> 
                ${ lista[i].typR
            ? `<p style="color: #73705a; font-size: 17px; text-align: center; padding-top: 15px;">Typ rośliny - ${lista[i].typR}</p>`
            : '<p style=" padding-top: 15px; text-align: center; color: #73705a; font-size: 17px;">Typ rośliny - brak</p>'}
                <p style="text-align: right; color: #c5d4c5; font-size: 25px; padding-right: 25px;">${lista[i].cena} zł</p>
            </div>
            `;

        document.getElementById("listaP").appendChild(container);
    }
}

function filter(){

    const minPrice = document.getElementById('cenamin').value;
    const maxPrice = document.getElementById('cenamax').value;

    let products = JSON.parse(localStorage.getItem('lista')).filter(product => {
        let price = parseInt(product.cena);
        return price >= minPrice && price <= maxPrice;
    });

    const filters = [...Array.from(document.querySelectorAll('.col div:first-of-type input[type=checkbox]')).map(el => el.name)];

    const query = {};

    let hasActiveFilters = false; // żeby wyświetlać filtrowane tylko po cenie, jak nic nie jest zaznaczone

    for(let filter of filters){
        query[filter] = [];

        document.querySelectorAll(`.form-check-input[name=${filter}]`).forEach(el => {
            if(el.checked){
                hasActiveFilters = true;

                query[filter].push(el.value);
            }
        });
    }

    if(hasActiveFilters){
        products = products.filter(product => {
            return filters.every(filter => {
                // === 0 wtedy, gdy w danej kategorii nic nie jest zaznaczone, czyli wszystko musi przejść
                return query[filter].length === 0 || query[filter].some(value => product[filter] === value);
            });
        });
    }

    let search = document.getElementById('searchbar').value.toLowerCase();


    if(search !== null){

        products = products.filter(product =>{

            let name = product.nazwa;

            return name.toLowerCase().startsWith(search)

        })

    }

    displayProducts(products);

}



