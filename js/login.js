document.getElementById("submit-btn").addEventListener("click", function () {
    // get the input from an user
    const inputEmail = document.getElementById("email");
    const userEmail = inputEmail.value;
    const inputPassword = document.getElementById("password");
    const userPassword = inputPassword.value;
    inputEmail.value = "";
    inputPassword.value = "";

    if (userEmail == "bank@gmail.com" && userPassword == "money") {
        window.location.href = "./bank.html";
    }
    else if(userEmail == "" || userPassword == "") {
        alert("Please input your information.")
    } else {
        alert("User not valid.")
    }
});
