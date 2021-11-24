document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  const toyCollection = document.getElementById("toy-collection");
  let addToy = false;

  const API_URL = "http://localhost:3000/toys";

  function renderToy(toy) {
    const toyDiv = document.createElement("div");
    toyDiv.className = "card";
    toyDiv.innerHTML = `
    <h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar" />
    <p>${toy.likes} Likes</p>
    <button data-id='${toy.id}' class="like-btn>Like</button>
    <button data-id='${toy.id}' class="delete-btn>Delete</button>
    `;

    toyCollection.appendChild(toyDiv);
  }
  function renderAll(toys) {
    toyCollection.innerHTML = "";
    //all the toys to render inside dom
    toys.forEach((toy) => renderToy(toy));
  }

  fetch(API_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (toys) {
      renderAll(toys);
    });
});
