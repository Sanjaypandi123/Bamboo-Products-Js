document.querySelector("#sumitbtn").addEventListener("click", function (e) {
    e.preventDefault()
    login()
})



let login = () => {
    let arrays = JSON.parse(localStorage.getItem("UserList")) || []

    console.log(arrays);

    debugger
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    //======================================================
    //error text

    let emailErr = document.getElementById("emailErr")
    let passErr = document.getElementById("passErr")

    //=======================================================

    let ischeck = true

    if (email.value === "") {
        emailErr.innerText = "Pleace Enter Your E-Mail-Id"
        ischeck = false
    } else {
        emailErr.innerText = ""
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        emailErr.innerText = "Please Enter Your Email";
        ischeck = false;
    } else if (!email.value.match(emailPattern)) {
        emailErr.innerText = "Please Enter Valid Email";
        ischeck = false;
    } else {
        emailErr.innerText = "";
    }
    //===========================================================

    if (pass.value === "") {
        passErr.innerText = "Pleace Enter Your password"
        ischeck = false
    } else {
        passErr.innerText = ""
    }
    //===========================================================

    if (!ischeck) return;

    let user = arrays.find(u => u.Email === email.value && u.Password === pass.value)

    if (user) {
        email.value = ""
        pass.value = ""
        Swal.fire({
            title: "Login Successfully😊",
            icon: "success",
            draggable: true
        });
        setInterval(() => {
            window.location.href="./website/index.html"
        }, 3000);

    } else {
        Swal.fire({
            icon: "error",
            text: "Invalid Gmail or Password"
        });

    }


}