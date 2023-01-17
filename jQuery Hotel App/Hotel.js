function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "pavan@starmark.com" && password == "starmark123") {
        alert("Login successfull!");
        window.location = "HotelMenuP.html"; // Redirecting to other page.
        return false;
    }
    else {

        alert("Wrong Information");


    }
}




