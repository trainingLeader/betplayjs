const divDetailPlayer = document.querySelector('.div-detail-player')

const modelTeam = {
    nombreEquipo : '',
    logoEquipo : '',
    ciudadEquipo : '',
    nombreTecnico : '',
    player : []
}

const modelPlayer = {
    nombreJugador : '',
    posicionJugador : '',
    dorsalJugador : ''
}

let betplay = [];

document.addEventListener('DOMContentLoaded', (e) => {
    
});

document.querySelector('#addPlayer').addEventListener('click', (e) => {
    divDetailPlayer.insertAdjacentHTML('beforeend', crearItemHTML());
});

const crearItemHTML = () => {
    let id = Date.now().toString(16);
    let suiteHTML = /* html */ `
    <div class="row justify-content-md-center" id="team${id}">
        <div class="col-md-4">
            <label for="nombreJugador" class="form-label">Nombre del Jugador</label>
            <input type="text" class="form-control" name="nombreJugador${id}" id="nombreJugador${id}" >
        </div>
        <div class="col-md-4">
            <label for="posicionJugador" class="form-label">Posicion</label>
            <select name="posicionJugador${id}" id="posicionJugador${id}" class="form-select">
                <option selected>Selecciona una ciudad</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="dorsalJugador" class="form-label">Dorsal</label>
            <input type="number" class="form-control" name="dorsalJugador${id}" id="dorsalJugador${id}">
        </div>
        <div class="col-md-1 position-relative">
            <button type="button" class="btn btn-danger position-absolute bottom-0 start-0" data-id="${id}" id="removePlayer" >-</button>
        </div>
  </div>`;
    return suiteHTML;
}

divDetailPlayer.addEventListener("click", (e)=>{
    if(e.target.id == "removePlayer"){
        eliminarItemLista(e.target.dataset.id);
    }
})
const eliminarItemLista = (idIdx) =>{
    let player = document.querySelector(`#team${idIdx}`);
    player.remove();
}
