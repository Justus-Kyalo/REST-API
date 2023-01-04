//renderAllPlayers
document.addEventListener("DOMContentLoaded", () => fetchPlayers());

function fetchPlayers() {
  fetch("http://localhost:3000/players")
    .then((response) => response.json())
    
    .then((data) => {
      console.log(data);
      renderPlayers(data)});
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
//renderPlayer searched



//POST

// const form = document.getElementById("playerForm");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new formData(form);
//   // console.log(formData.get('name'))
//   const data = Object.fromEntries(formData);
// });

// fetch("http://localhost:3000/players", {
//   method: "POST",
//   headers: {
//     "Content-type": "apllication/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
