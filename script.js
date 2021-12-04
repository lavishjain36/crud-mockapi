async function getUsers() {
  let users;
  try {
    const data = await fetch(
      "https://61ab0dc8bfb110001773f383.mockapi.io/users",
      { method: "GET" }
    );
    users = await data.json();
    // console.log(users);
  } catch (err) {
    console.log(err);
  }
  console.log("users...", users);
  return users;
}

async function displayUsers() {
  const users = await getUsers();
  // console.log(users);
  const userList = document.querySelector(".user-list");
  userList.innerHTML = ""; // Wipping the old data

  users.forEach((user) => {
    console.log(user.avatar);
    // innerText - text, innerHTML - html elements - h2
    // interpolation - ${}, template literal  `` (backticks)

    // Loading the new data
    userList.innerHTML += `<div class="user-container">
        <img class="user-avatar" src="${user.avatar}" />
        <div>
          <h2 class="user-name">${user.name}</h2>
          <button onclick="deleteUser(${user.id})"> DELETE </button>
        </div>
      </div>`;
  });
}

displayUsers();

async function deleteUser(id) {
  console.log("Deleting user", id);
  const data = await fetch(
    "https://61ab0dc8bfb110001773f383.mockapi.io/users/" + id,
    { method: "DELETE" }
  );

  // Delete button -> User deleting happens -> Refresh the list -> displayUsers (getUsers) (copy)
  displayUsers();
}
// C - Create  - POST - Done
// R - Read    - GET - Done
// U - Update  - PUT - Its the combination of DELETE & POST
// D - Delete  - DELETE - Done

async function addUser() {
  // console.log("Adding user");
  const userName = document.querySelector(".add-user-name").value;
  const userAvatar = document.querySelector(".add-user-avatar").value;
  // console.log(name, avatar);

  // 1. method - POST
  // 2. provide data in the - body - stringfy
  // 3. Specify - data format in headers - JSON

  const data = await fetch(
    "https://61ab0dc8bfb110001773f383.mockapi.io/users",
    {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        avatar: userAvatar,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Add button -> User creation happens & when it is done -> Refresh the list -> displayUsers (getUsers) (copy)
  displayUsers();
}
