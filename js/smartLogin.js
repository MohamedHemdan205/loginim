let welcomeName = document.getElementById("welcomeName");
let ahmed = JSON.parse(localStorage.getItem("productContainer"));

for (let i = 0; i < ahmed.length; i++) {
  welcomeName.innerHTML = ahmed[i].name;
}
