//Selects
const productosDOM = document.querySelector(".productos-centro") || '';
const matesDOM = document.querySelector(".mates-centro") || '';




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



if (productosDOM !== ''){
    getSets().then(sets => mostrarSets(sets))
}else{
    getMates().then(mates => mostrarMates(mates))
}