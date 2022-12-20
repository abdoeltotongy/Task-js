/** @format */
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
// var signEmail = document.getElementById("signingE-mail");
// var signPassword = document.getElementById("signingPassword");
var users = [];
if (localStorage.getItem("user") != null) {
	users = JSON.parse(localStorage.getItem("user"));
} else {
	users = [];
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateInputs();
});
const setError = (element) => {
	const formGroup = element.parentElement;
	const errorDisplay = formGroup.querySelector(".error");
	errorDisplay.innerText = "";
	formGroup.classList.add("success");
	formGroup.classList.remove("error");
};

const isValidateEmail = (email) => {
	const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (usernameValue === "") {
		setError(username, "Username is required");
	} else {
		setSuccess(username);
	}

	if (emailValue.value === "") {
		setError(email, "Email is required");
	} else if (!isValidateEmail(emailValue)) {
		setError(email, "Provide a Valid Email Address");
	} else {
		setSuccess(email);
	}

	if (passwordValue === "") {
		setError(password, "password is required");
	} else if (passwordValue.length < 8) {
		setError(password, "Password Must Be at least  8 characters");
	} else {
		setSuccess(password);
	}

	if (password2Value === "") {
		setError(password2, "Please Confirm Your Password");
	} else if (password2Value !== passwordValue) {
		setError(password2, "Password doesn't Match");
	} else {
		setSuccess(password2);
	}
};
// var user = document.getElementById("user");
// user.innerHTML(username);
