//renderAllPlayers
document.addEventListener("DOMContentLoaded", () => {
  fetchPlayers();
  document.getElementById('get').addEventListener("click", handleGetQuery);
});

function fetchPlayers() {
  fetch("http://localhost:3000/players")
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      renderPlayers(data);
    });
}

function renderPlayers(players) {
  const cardDiv = document.getElementById("cardDiv");
  cardDiv.innerHTML = "";

  players.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style = "width: 18rem;";
    cardDiv.appendChild(card);

    const image = document.createElement("img");
    image.src = `${player.face}`;
    image.alt = "player";
    card.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerText = `${player.name}`;
    cardBody.appendChild(h5);

    const ul = document.createElement("div");
    ul.classList.add(["list-group", "list-group-flush"]);
    card.appendChild(ul);

    const name = document.createElement("li");
    name.classList.add("list-group-item");
    name.innerText = `${player.name}`;
    ul.appendChild(name);

    const club = document.createElement("li");
    club.classList.add("list-group-item");
    club.innerText = `${player.club}`;
    ul.appendChild(club);

    const anchor = document.createElement("a");
    anchor.classList.add("card-link");
    anchor.href = "";
    anchor.innerText = "view more";
    card.appendChild(anchor);
  });
}

function handleGetQuery(event) {
  event.preventDefault();
  const searchInput = document.getElementById("playerName");
  console.log(searchInput);
  const query = searchInput.target.value;
  fetch(`http://localhost:3000/players`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())

    .then((players) => {
      console.log("Searching player by name");
      if (players.length > 0) {
        const found = players.filter(player => player.name === query);
        // if(found) {
        //   renderPlayers(found);
        // } else {
        //   renderPlayers([])
        // }
        renderPlayers(found ? found : []);
      }
    });
} /*
//POST
const form = document.getElementById("playerForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  fetch("http://localhost:3000/players", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});*/
