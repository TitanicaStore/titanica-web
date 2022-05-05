//Selects
const productosDOM = document.querySelector(".productos-centro");
const setMatesDOM = document.querySelector("#setMates") || '';
const matesDOM = document.querySelector("#mates") || '';
const lentesDOM = document.querySelector("#lentes") || '';
const accesoriosDOM = document.querySelector("#accesorios") || '';
const relojesDOM = document.querySelector("#relojes") || '';




// ----------- MAPEO DE SETS -----------
//obtener los sets
const getSets = async () => {
    try{
        let resultado = await fetch('./db/sets.json');
        let data = await resultado.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

//mostrar los sets
const mostrarSets = (sets) => {
    let resultado = '';

    sets.forEach(set => {
        resultado += `
        <!-- Producto -->
        <article class="producto">
            <div class="img-container">
                <img src=${set.imgSrc} alt="${set.nombre} - ${set.tipo}" class="producto-img">
            </div>
            <h3 class="producto-nombre1">${set.nombre} -</h3>
            <h3 class="producto-nombre2">${set.tipo}</h3>
        </article>
        <!-- Fin producto -->
    ` 
    });

    setMatesDOM.innerHTML = resultado;
}


// ----------- MAPEO DE MATES -----------
//obtener los mates
const getMates = async () => {
    try{
        let resultado = await fetch('./db/mates.json');
        let data = await resultado.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

//mostrar los mates
const mostrarMates = (mates) => {
    let resultado = '';

    mates.forEach(mate => {
        resultado += `
        <!-- Producto -->
        <article class="producto">
            <div class="img-container">
                <img src=${mate.imgSrc} alt="${mate.color} ${mate.tipo}" class="producto-img">
            </div>
            <h3 class="producto-nombre1">${mate.color}</h3>
            <h3 class="producto-nombre2">${mate.tipo}</h3>
        </article>
        <!-- Fin producto -->
    ` 
    });

    matesDOM.innerHTML = resultado;
}


// ----------- MAPEO DE LENTES -----------
//obtener los lentes
const getLentes = async () => {
    try{
        let resultado = await fetch('./db/lentes.json');
        let data = await resultado.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

//mostrar los lentes
const mostrarLentes = (lentes) => {
    let resultado = '';

    lentes.forEach(lente => {
        resultado += `
        <!-- Producto -->
        <article class="producto">
            <div class="img-container">
                <img src=${lente.imgSrc} alt="${lente.nombre} ${lente.tipo}" class="producto-img">
            </div>
            <h3 class="producto-nombre1">${lente.nombre}</h3>
            <h3 class="producto-nombre2">${lente.tipo}</h3>
        </article>
        <!-- Fin producto -->
    ` 
    });

    lentesDOM.innerHTML = resultado;
}

// ----------- MAPEO DE ACCESORIOS -----------
//obtener los accesorios
const getAccesorios = async () => {
    try{
        let resultado = await fetch('./db/accesorios.json');
        let data = await resultado.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

//mostrar los accesorios
const mostrarAccesorios = (accesorios) => {
    let resultado = '';

    accesorios.forEach(accesorio => {
        resultado += `
        <!-- Producto -->
        <article class="producto">
            <div class="img-container">
                <img src=${accesorio.imgSrc} alt="${accesorio.nombre} ${accesorio.tipo}" class="producto-img">
            </div>
            <h3 class="producto-nombre1">${accesorio.nombre}</h3>
            <p class="producto-nombre2">${accesorio.tipo}</p>
        </article>
        <!-- Fin producto -->
    ` 
    });

    accesoriosDOM.innerHTML = resultado;
}

// ----------- MAPEO DE RELOJES -----------
//obtener los relojes
const getRelojes = async () => {
    try{
        let resultado = await fetch('./db/relojes.json');
        let data = await resultado.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

//mostrar los relojes
const mostrarRelojes = (relojes) => {
    let resultado = '';

    relojes.forEach(reloj => {
        resultado += `
        <!-- Producto -->
        <article class="producto">
            <div class="img-container">
                <img src=${reloj.imgSrc} alt="${reloj.tipo}" class="producto-img">
            </div>
            <div>
                ${Array.isArray(reloj.nombre) ? reloj.nombre.map( nom => {
                    return `<h3 class="item-multiple">${nom}</h3>`
                }).join('') : `<h3 class="producto-nombre1">${reloj.nombre}</h3>`}
            <h3 class="producto-nombre2">${reloj.tipo}</h3>
            </div>
        </article>
        <!-- Fin producto -->
    ` 
    });

    relojesDOM.innerHTML = resultado;
}


//llamada condicional de las funciones
if (setMatesDOM !== ''){
    getSets().then(sets => mostrarSets(sets))
}else if(matesDOM !== ''){
    getMates().then(mates => mostrarMates(mates))
}else if(lentesDOM !== ''){
    getLentes().then(lentes => mostrarLentes(lentes))
} else if (accesoriosDOM !== ''){
    getAccesorios().then(accesorios => mostrarAccesorios(accesorios))
} else if (relojesDOM !== ''){
    getRelojes().then(relojes => mostrarRelojes(relojes))
} else {
    productosDOM.innerHTML = `
    <div>
        <h3 class="producto-nombre1">Te damos la bienvenida a nuestro catálogo online, dónde vas a poder ver todos nuestros productos.</h3>
        <p>Si querés comprar alguno o tenes dudas comunícate con nosotras por medio de nuestras redes o WhatsApp.</p>
        <div class="homeRedes">
            <a href="https://www.instagram.com/titanica_store/"><i class="icono fa fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send?phone=543875963394"><i class="icono fa fa-whatsapp"></i></a>
        </div>
        <p>Hacemos envios a distintos puntos de la provincia de Salta, ya sea Capital, Rosario de Lerma, Campo Quijano y Cerrillos.</p>
        <p>También podés pasar por nuestro showroom (pedimos la dirección por mensaje directo).</p>
        <p>Recibimos todos los medios de pago. Con tarjeta de crédito hay un 10% de interés.</p>
    </div>
`;
}