let arrays = JSON.parse(localStorage.getItem("UserList")) || []

document.querySelector("#registbtn").addEventListener("click", function (e) {
    e.preventDefault()
    register()
})

let register = () => {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let pass = document.getElementById("pass")
    let cpass = document.getElementById("cpass")
    
    //======================================================
    //error text
    
    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")
    let phoneErr = document.getElementById("phoneErr")
    let passErr = document.getElementById("passErr")
    let cpassErr = document.getElementById("cpassErr")
    
    //=======================================================
    
    let isname = false,
    isemail = false,
    isphone = false,
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
    // if (email.value === "") {
    //     emailErr.innerText = "Pleace Enter Your E-Mail-Id"
    //     isemail = false
    // } else {
    //     emailErr.innerText = ""
    //     isemail = true
    // }
    //===========================================================

    let phonePattern = /^[0-9]{10}$/;
    if (phone.value.trim() === "") {
        phoneErr.innerText = "Please Enter Your Phone Number";
        isphone = false;
    } else if (!phone.value.match(phonePattern)) {
        phoneErr.innerText = "Enter Valid 10 Digit Phone Number";
        isphone = false;
    } else {
        phoneErr.innerText = "";
        isphone=true
    }

    // if (phone.value === "") {
    //     phoneErr.innerText = "Pleace Enter Your Phone-Number"
    //     isphone = false
    // } else {
    //     phoneErr.innerText = ""
    //     isphone = true
    // }
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

    if (isname && isemail && isphone && ispass && iscpass) {
        // alert('Form Submitted Successfully!')
        let objects = {
            UserName: name.value,
            Email: email.value,
            PhoneNo: phone.value,
            Password: pass.value,
            Confirm_Password: cpass.value
        }
        arrays.push(objects)
        localStorage.setItem("UserList",JSON.stringify(arrays))

        name.value=""
        email.value=""
        phone.value=""
        pass.value=""
        cpass.value=""
        Swal.fire({
            title: "Register Successfully😊",
            icon: "success",
            draggable: true
        });
        setInterval(() => {
            window.location.href="./index.html"
        }, 3000);
    }
}