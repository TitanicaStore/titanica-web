//Selects
const productosDOM = document.querySelector(".productos-centro") || '';
const matesDOM = document.querySelector(".mates-centro") || '';
const lentesDOM = document.querySelector(".lentes-centro") || '';



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

    productosDOM.innerHTML = resultado;
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


//llamada condicional de las funciones
if (productosDOM !== ''){
    getSets().then(sets => mostrarSets(sets))
}else if(matesDOM !== ''){
    getMates().then(mates => mostrarMates(mates))
}else{
    getLentes().then(lentes => mostrarLentes(lentes))
}