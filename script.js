var url = "https://61c417cff1af4a0017d992c3.mockapi.io/users";

//Get all the users data with HTTP method=GET
//Read the data
function getData() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// getData();
//Creation of data is done with POST method
// send the data  to the server
function createData() {
  let data = {
    name: "Kiran",
    email: "kiran@gmail.com",
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
// createData();
// getData();

//Update the data
// Http Method=>PUT /id
function updateData() {
  let data = {
    name: "Kaushik Bhat",
    email: "kaushik@gmail.com",
  };

  fetch(url + "/1", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// updateData();

//Delete the data
// Http Method=>DELETE /id
function deleteData() {
  fetch(url + "/8", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// deleteData();

// Recap +Practice
// 3-4 exericse
// DOM MAnipulation
