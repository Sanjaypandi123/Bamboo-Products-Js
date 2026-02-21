let arrays = JSON.parse(localStorage.getItem("UserList")) || []

document.querySelector("#registbtn").addEventListener("click", function (e) {
    e.preventDefault()
    register()
})

let register = () => {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")
    let cpass = document.getElementById("cpass")
    
    //======================================================
    //error text
    
    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")
    let passErr = document.getElementById("passErr")
    let cpassErr = document.getElementById("cpassErr")
    
    //=======================================================
    
    let isname = false,
    isemail = false,
    ispass = false,
    iscpass = false
    

    // let ischeck = true

    if (name.value === "") {
        nameErr.innerText = "Pleace Enter Your Name"
        isname = false
    } else {
        nameErr.innerText = ""
        isname=true
    }
    //===========================================================
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        emailErr.innerText = "Please Enter Your Email";
        isemail = false;
    } else if (!email.value.match(emailPattern)) {
        emailErr.innerText = "Please Enter Valid Email";
        isemail = false;
    } else {
        emailErr.innerText = "";
        isemail=true
    }
   
    //===========================================================
    if (pass.value === "") {
        passErr.innerText = "Pleace Enter Your password"
        ispass = false
    }
    else if (pass.value.length < 6){
        passErr.innerText = "Password Must Be At Least 6 Characters"
        ispass=false

    }
     else {
        passErr.innerText = ""
        ispass=true
    }
    //===========================================================
    if (cpass.value === "") {
        cpassErr.innerText = "Pleace Enter Your confirm password"
        iscpass = false
    } else if (cpass.value === pass.value) {

        cpassErr.innerText = ""
        iscpass=true

    } else {
        cpassErr.innerText = "Your password is Mismatched"
    }
    //===========================================================

    if (isname && isemail && ispass && iscpass) {
        // alert('Form Submitted Successfully!')
        let objects = {
            UserName: name.value,
            Email: email.value,
            Password: pass.value,
            Confirm_Password: cpass.value
        }
        arrays.push(objects)
        localStorage.setItem("UserList",JSON.stringify(arrays))

        name.value=""
        email.value=""
        pass.value=""
        cpass.value=""
        Swal.fire({
            title: "Register Successfully😊",
            icon: "success",
            draggable: true
        });
        setInterval(() => {
            window.location.href="./index.html"
        }, 1000);
    }
}