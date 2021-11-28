const cat_btn = document.getElementById("cat_btn");
const cat_result = document.getElementById("cat_result");

//Take the hold the html attributes
const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");

cat_btn.addEventListener("click", getRandomCat);

dog_btn.addEventListener("click", getRandomDog);

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      cat_result.innerHTML = `<img src="${data.file}" width="300px height="350px"> `;
    });
}

function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dog_result.innerHTML = `<img src="${data.message}" width="300px height="350px"> `;
    });
}
