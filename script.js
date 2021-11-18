async function getAlldata() {
  try {
    var data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );
    var obj = await data.json();
    //console.log(obj);
    for (var i = 0; i < obj.length; i++) {
      var mydiv = document.createElement("div");
      mydiv.setAttribute("class", "flex-box");
      var h4 = document.createElement("h4");
      mydiv.appendChild(h4);
      h4.innerText = "Product:" + " " + obj[i].name;
      var cost = document.createElement("p");
      mydiv.appendChild(cost);
      cost.innerText = "Price:" + " " + obj[i].price;
      var h5 = document.createElement("h5");
      mydiv.appendChild(h5);
      h5.innerText = "Brand:" + " " + obj[i].brand;
      var imgLink = document.createElement("a");
      mydiv.appendChild(imgLink);
      imgLink.setAttribute("href", obj[i].image_link);
      imgLink.innerText = "Image link" + " ";
      var br = document.createElement("br");
      mydiv.appendChild(br);

      var prodLink = document.createElement("a");
      mydiv.appendChild(prodLink);
      prodLink.setAttribute("href", obj[i].product_link);
      prodLink.innerText = "Product Link";
      var p = document.createElement("p");
      mydiv.appendChild(p);
      p.innerText = "Description:" + " " + obj[i].description;

      document.getElementById("main").appendChild(mydiv);

      //console.log(obj[i]);
      // console.log(obj[i].name);
      // console.log(obj[i].brand);
      // console.log(obj[i].description);
      // console.log(obj[i].image_link);
      // console.log(obj[i].product_link);
    }
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAlldata();
