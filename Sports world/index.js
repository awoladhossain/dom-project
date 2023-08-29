const searchAllData = () => {

    const inputElement = document.getElementById('searchValue')
    const inputValue = inputElement.value;

    document.getElementById('single-player-details').innerHTML = "";
    document.getElementById("male").classList.add('d-none');
    document.getElementById("anotherMale").classList.add('d-none')
    document.getElementById('spinner').classList.remove('d-none');


    const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
    // console.log(URL);
    fetch(URL)
        .then((res) => res.json())
      .then((data) => {

        document.getElementById('spinner').classList.add('d-none');
        showPlayerData(data.player)
      })
        .catch((error) => console.log(error))
}


const showPlayerData = (palyers) => {
    
   document.getElementById('searchValue').value = "";
   const container = document.getElementById('playerInfo')
   container.innerHTML = "";

    palyers.forEach(player => {
          const { strThumb, strPlayer, strNationality, idPlayer } = player

          const div = document.createElement('div')
          div.classList.add("col")
      
        div.innerHTML = `
    <div class="card">
      <img src="${strThumb ? strThumb : "https://picsum.photos/seed/picsum/200/300"}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${strPlayer ? strPlayer : "not found"}</h5>
        <p  class="card-text">Natinality: ${strNationality}</p>
       </div>
       <div class ="my-3"> 
        <button onclick ="showDetails('${idPlayer}')" type="button" class="btn btn-warning ms-3">Details</button>
        <button onclick = "deleteInfo('${idPlayer}')" type="button" class="btn btn-info ms-5">Delete</button>
      </div>
    </div>
        `
        container.appendChild(div)
    });
}

const showDetails = (id) => {
  const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSinglePlayer(data.players[0],id))
}

const showSinglePlayer = (data,id) => {
  console.log(data);
  const { strThumb, strPlayer, strDescriptionES, strGender, strDescriptionEN } = data;

  const container = document.getElementById('single-player-details');
  const div = document.createElement("div");

  if (strGender === "Male") {
    const element = document.getElementById("male");
    element.classList.remove('d-none')
  } else {
    const anotherElement = document.getElementById("anotherMale")
    anotherElement.classList.remove('d-none')
  }

  div.innerHTML = `
  <div id="player-${id}" class="card mb-3 w-100 h-100">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">${strDescriptionES.slice(0, 300) ? strDescriptionES.slice(0, 300) : strDescriptionEN}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  `
  container.appendChild(div)

}

const deleteInfo = (id) => {
  const container = document.getElementById('single-player-details');
  const palyerCard = document.getElementById(`player-${id}`);

  if (palyerCard) {
    container.removeChild(palyerCard)
  }
}

