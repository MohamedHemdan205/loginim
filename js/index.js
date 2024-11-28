let emailInpet = document.getElementById("floatingInput");
let passwordInpet = document.getElementById("floatingPassword");
let addlogin = document.getElementById("btnLogin");

let removeInput = document.getElementById("valdichenInput");
let addInput = document.getElementById("addInput");

let productList = JSON.parse(localStorage.getItem("productContainer"));

addlogin.addEventListener("click", function () {
  let product = {
    email: emailInpet.value,
    password: passwordInpet.value,
  };
   for (let i = 0; i < productList.length; i++){

   
  if (
    productList[i].email == product.email &&
    productList[i].password == product.password
  ) {
    location.assign("http://127.0.0.1:5500/smartlogin.html");
    
  } else {
    removeInput.classList.remove("d-none");
  }
}
  productList.push(product);
  console.log(productList);
  clearform();
});

function clearform() {
  emailInpet.value = null;
  passwordInpet.value = null;
}



