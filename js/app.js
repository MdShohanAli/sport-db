const allPlayer = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))

}

const showPlayerDetails = players => {
    const parent = document.getElementById('player-container');
    for (const player of players) {
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="card border">
        <div class="pro-pi">
            <img width="50%" src="${player.strThumb}" alt="">
        </div>
        <h2>Name: ${player.strPlayer}</h2>
        <h5>Country : ${player.strNationality} </h5>
        <p></p>
        <div class="allbutton">
            <button class="btn btn-danger"> Delete </button>
            <button onclick ="playerDetail(${player.idPlayer})"  class="btn btn-success"> Details </button>
        </div>
       </div>
        `;
        parent.appendChild(div);
        console.log(players);
    }
}
const playerDetail = info => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]));
}
const setDetails = id => {
    document.getElementById('deatil-container').innerHTML = `
    <div>
    <img src = "" alt="">
    <h1> Name : ${id.strPlayer} </h1>
    </div>
    `;
}
