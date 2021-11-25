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
      <button data-id='${toy.id}' class="like-btn">Like <3</button>
      <button data-id='${toy.id}' class="delete-btn">Delete</button>
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
  addBtn.addEventListener("click", function () {
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
  toyForm.addEventListener("click", (e) => {
    let toyName = document.getElementsByClassName("input-text")[0].value;
    let toyUrl = document.getElementsByClassName("input-text")[1].value;

    //Lets take data as an object in store it in one variable
    data = { name: toyName, image: toyUrl, likes: 0 };

    e.preventDefault();

    if (e.target.name === "submit") {
      fetch(`${API_URL}`, {
        //change the method Get to Post
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //convert an object data to a json data
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then((toy) => renderToy(toy));
    }
  });

  toyCollection.addEventListener("click", (e) => {
    //check if a button is like or not
    if (e.target.className === "like-btn") {
      //We have to increment like by 1
      let id = parseInt(e.target.dataset.id);
      let like = parseInt(e.target.previousElementSibling.innerHTML);
      like++;
      //update the likes
      let data = { likes: like };
      e.target.previousElementSibling.innerText = `${like} likes`;

      fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (e.target.className === "delete-btn") {
      let id = parseInt(e.target.dataset.id);
      let parent = e.target.parentNode;
      //to remove the  image from the dom
      parent.remove();

      fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  });
});
