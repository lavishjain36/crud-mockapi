const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");

//Get the data from an api and we have set the content in the result division

async function getData() {
  result.innerText = "Loading....";

  try {
    const response = await fetch("https://api.github.com/users/lavishjain36");
    const data = await response.json();
    result.innerText = `${data.name} has ${data.public_repos} public repos with name ${data.login}`;
  } catch (err) {
    result.innerText = "Error....";
  }
}

fetchDataBtn.addEventListener("click", getData);

// innerText and innerHTML=>
