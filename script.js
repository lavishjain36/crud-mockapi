//select the html button
let btn = document.getElementById("btn");

let data = document.getElementById("data");

const url = "https://breakingbadapi.com/api/quote/random";

btn.addEventListener("click", async function () {
  try {
    let res = await fetch(url);
    let obj = await res.json();
    // console.log(obj);
    data.innerHTML = `
  <div>Quote ID:${obj[0].quote_id}</div>
  <div>Quote:${obj[0].quote}</div>
  <div>Author:${obj[0].author}</div>
  <div>Series:${obj[0].series}</div> 
    `;
  } catch (err) {
    console.log(err);
  }
});
