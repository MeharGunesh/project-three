var container = document.querySelector(".container");
var form = document.querySelector(".loginpage");

var heading = document.createElement("h1");
heading.textContent = "Login Here";
heading.classList.add("login");

var div = document.createElement("div");
div.classList.add("inputfrom");

var form = document.createElement("form");
form.classList.add("loginpage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var emailValue = inputEmail.value;
    var passwordValue = inputPassword.value;

    var storedUserData = localStorage.getItem("userData");
    
    if (!storedUserData) {
        alert("No user data found. Please sign up first.");
        return;
    }

    try {
        // Parse stored user data from local storage
        var userData = JSON.parse(storedUserData);

        // Validate login details
        if (emailValue === userData.email && passwordValue === userData.password) {
            alert("Login successful!");
            // Redirect to the desired page after successful login
            window.location.href = "dashbord.html"; // Replace with the actual URL
        } else {
            alert("Invalid email or password. Please try again.");
        }
    } catch (error) {
        console.error("Error parsing stored user data:", error);
        alert("An error occurred. Please try again later.");
    }
});

var email = document.createElement("h4");
email.classList.add("email-head");
email.textContent = "Email";

var inputEmail = document.createElement("input");
inputEmail.classList.add("email");
inputEmail.type = "email";
inputEmail.placeholder = "Enter Email";

var password = document.createElement("h4");
password.classList.add("password-head");
password.textContent = "Password";

var inputPassword = document.createElement("input");
inputPassword.classList.add("password");
inputPassword.type = "password";
inputPassword.placeholder = "Enter Password";

var btn = document.createElement("button");
btn.classList.add("loginbtn");
btn.textContent = "Log in";
btn.type = "submit";

var linkToSignup = document.createElement("a");
linkToSignup.textContent = "SignUp Here";
linkToSignup.classList.add("signuptext");
linkToSignup.href = "./signup.html";

container.appendChild(heading);
container.appendChild(div);
div.appendChild(form);
form.appendChild(email);
form.appendChild(inputEmail);
form.appendChild(password);
form.appendChild(inputPassword);
form.appendChild(btn);
form.appendChild(linkToSignup);
