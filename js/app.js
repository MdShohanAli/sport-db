const allPlayer = () => {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('spiner').style.display = 'block'
    const searchValue = document.getElementById('search-box').value;
    document.getElementById('search-box').value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.player == null);
            if (data.player == null) {
                document.getElementById('spiner').style.display = 'block';
            }
            else {
                showPlayerDetails(data.player);
                document.getElementById('spiner').style.display = 'none';
            }
        })

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
    if (id.strGender == 'Male') {
        document.getElementById("male").style.display = "block";
        document.getElementById("female").style.display = "none";
    }
    else {
        document.getElementById("male").style.display = "none";
        document.getElementById("female").style.display = "block";
    }
    document.getElementById('deatil-container').innerHTML = `
    <div>
    <img width = "50%" src = "${id.strThumb}" alt="">
    <h1> Name : ${id.strPlayer} </h1>
    </div>
    `;
}

