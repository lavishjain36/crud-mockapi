//Adding search Logic
function search() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      getData(users);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getData(users) {
  let userDIv = document.querySelector("#users");
  userDIv.innerHTML = "";

  //create a table element and append it to the div
  let table = document.createElement("table");

  //create a table header

  users.forEach(function (user) {
    //create a row for each user
    let row = table.insertRow();
    let name = row.insertCell();
    name.innerText = user.name;

    let city = row.insertCell();
    city.innerHTML = user.address.city;

    let mail = row.insertCell();
    mail.innerHTML = user.email;

    let phone = row.insertCell();
    phone.innerHTML = user.phone;
  });

  //Append table data to user Div who is holding id users from the html
  userDIv.appendChild(table);
}
