//Buil an html elements
document.body.innerHTML = `<div class="heading-container">
<h1>Brewerys List</h1>
<img class="icon" src="https://static.thenounproject.com/png/2559187-200.png" width="50px" height="50px"alt="icon">

</div>
<div id="mainContainer" class="main-container"> </div>`;

const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const brewerys = await data.json();
    mainContainer.innerHTML = "";
    brewerys.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <h3 class="blue">Breweries Name:<span>${obj.city}</span></h3>
  <p class="para blue">Brewries Type:<span>${obj.brewery_type}</span></p>
  <p class="para blue">Brewries Phone:<span>${obj.phone}</span></p>
  <p class="para blue">Brewries Website:<span>${obj.website_url}</span></p>
  <p class="para blue">Brewries Address:<span>${obj.street}</span></p>
  <p class="para blue">Brewries State:<span>${obj.state}</span></p>
  <p class="para blue">Brewries Zip:<span>${obj.postal_code}</span></p>
  <p class="para blue">Brewries Country:<span>${obj.country}</span></p>
  </div>`;
};
