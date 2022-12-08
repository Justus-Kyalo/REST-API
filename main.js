document.addEventListener('DOMContentLoaded' , () => fetchPlayers())
function fetchPlayers() {
    fetch('http://localhost:3000/players')
    .then((response) => response.json())
    .then((data) => renderPlayers(data))
    
}

function renderPlayers(players){
    const face =document.getElementById("face");
    const name = document.getElementById("name");
    const club = document.getElementById("club");
    
    players.forEach(player =>{
    face.src = `${player.face}`;
    name.innerHTML = `${player.name}`;
    club.innerHTML = `${player.club}`;
    });
}

