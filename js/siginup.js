let nameInput = document.getElementById("nameInput");
let emailInpet = document.getElementById("emailInpet");
let passwordInpet = document.getElementById("passwordInpet");
let addSignUp = document.getElementById("btnSignUp");

let removeP = document.getElementById("removeP");
let daneP = document.getElementById("daneP");
let productList = [];

if (localStorage.getItem("productContainer")!== null) {
  productList = JSON.parse(localStorage.getItem("productContainer"));
}

addSignUp.addEventListener("click", function () {
  // Create an object for the new user's data
  let product = {
    name: nameInput.value,
    email: emailInpet.value,
    password: passwordInpet.value,
  };
  let emailexist;

    if (localStorage.getItem("productContainer") !== null) {
      let hamda = JSON.parse(localStorage.getItem("productContainer"));
      for (let i = 0; i < hamda.length; i++) {
        emailexist = hamda[i].email;
      }
      
    }

  // let hamda = JSON.parse(localStorage.getItem("productContainer"));
  
  // if (localStorage.getItem("productContainer") !== null) {
  //   let hamda = JSON.parse(localStorage.getItem("productContainer"));
  //   emailexist = hamda[0].email;
  // }

  if (emailexist == product.email) {
    removeP.classList.remove("d-none");
    daneP.classList.add("d-none");
  } else {
    daneP.classList.remove("d-none");
    removeP.classList.add("d-none");
    productList.push(product);
    localStorage.setItem("productContainer", JSON.stringify(productList));
    console.log(productList);
    clearform();
  }
});

function clearform() {
  nameInput.value = null; //Clear the input fields
  emailInpet.value = null;
  passwordInpet.value = null;
}

nameInput.addEventListener("input", function () {
  let regex = /^[a-zA-Z]+$/;
  let name = nameInput.value;
  if (regex.test(name)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    document.getElementById("massegeName").classList.add("d-none");
  } else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    document.getElementById("massegeName").classList.remove("d-none");
  }
});

emailInpet.addEventListener("input", function () {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let name = emailInpet.value;
  if (regex.test(name)) {
    emailInpet.classList.add("is-valid");
    emailInpet.classList.remove("is-invalid");
    document.getElementById("masege").classList.add("d-none");
  } else {
    emailInpet.classList.add("is-invalid");
    emailInpet.classList.remove("is-valid");
    document.getElementById("masege").classList.remove("d-none");
  }
});
passwordInpet.addEventListener("input", function () {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let name = passwordInpet.value;
  if (regex.test(name)) {
    passwordInpet.classList.add("is-valid");
    passwordInpet.classList.remove("is-invalid");
    document.getElementById("massege").classList.add("d-none");
  } else {
    passwordInpet.classList.add("is-invalid");
    passwordInpet.classList.remove("is-valid");
    document.getElementById("massege").classList.remove("d-none");
  }
});


// function nameInput(params , callback) {
//   if (regex.test(name)) {
//     nameInput.classList.add("is-valid");
//     nameInput.classList.remove("is-invalid");
//     document.getElementById("massegeName").classList.add("d-none");
//   } else {
//     nameInput.classList.add("is-invalid");
//     nameInput.classList.remove("is-valid");
//     document.getElementById("massegeName").classList.remove("d-none");
//   }
// }
