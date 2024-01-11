var container = document.querySelector(".container");
var form = document.querySelector(".signuppage");

var heading = document.createElement("h1");
heading.textContent = "Sign UP Here";
heading.classList.add("signup");

var div = document.createElement("div");
div.classList.add("signupfrom");

var form = document.createElement("form");
form.classList.add("signuppage");


form.addEventListener("submit",function (e) {
    e.preventDefault();

    var  emailValue = inputEmail.value;
    var passwordValue = inputPassword.value;
    var conformPassword = inputCnfPassword.value;

    var userData = {
        email: emailValue,
        password: passwordValue,
        cnfPassword: conformPassword,

    }

    if (!isValidEmail(emailValue)) {
        alert("Invalid email address format.");
        return;
    }

    if (passwordValue.length < 8) {
        alert("Password must be at least eight characters long.");
        return;
    }
    if (passwordValue !== conformPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }


    var userDataJSON = JSON.stringify(userData);

    localStorage.setItem("userData", userDataJSON);

    console.log("User Data Stored:", userData)

    console.log("Email:", emailValue);
    console.log("Password", passwordValue);
    console.log("conformPasssword", conformPassword);

    window.location.href = "index.html";
    alert("Your Signup Sucess")


})

function isValidEmail(email) {
    // Regular expression for a simple email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

var email = document.createElement("h4");
email.classList.add("email-head");
email.textContent="Email"

var inputEmail = document.createElement("input");
inputEmail.classList.add("email");
inputEmail.type= "email";
inputEmail.placeholder= "Enter Email";


var password = document.createElement("h4");
password.classList.add("password-head");
password.textContent="Password"

var inputPassword = document.createElement("input");
inputPassword.classList.add("password");
inputPassword.type= "password";
inputPassword.placeholder= "Enter Password";
// 
var conformPassword = document.createElement("h4");
conformPassword.classList.add("conform-password-head");
conformPassword.textContent="ConformPassword"

var inputCnfPassword = document.createElement("input");
inputCnfPassword.classList.add("conform-password");
inputCnfPassword.type= "password";
inputCnfPassword.placeholder= "Renter Your Password";

var btn = document.createElement("button");
btn.classList.add("loginbtn");
btn.textContent= "Sign Up"
btn.type="submit"

// btn.addEventListener("click", function(){
//     window.location.href = "login.html";
//     alert("Your Signup Sucess")

// })



container.appendChild(heading);
container.appendChild(div);
div.appendChild(form);
form.appendChild(email);
form.appendChild(inputEmail);
form.appendChild(password);
form.appendChild(inputPassword);
form.appendChild(conformPassword);
form.appendChild(inputCnfPassword);
form.appendChild(btn)


