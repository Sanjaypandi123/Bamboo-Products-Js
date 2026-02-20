document.querySelector("#adminbtn").addEventListener("click", function (e) {
    e.preventDefault()
    adminlogin()
})

let adminlogin = () => {


    let admin = document.querySelector("#admin")
    let pass = document.querySelector("#adminpass")

    let adminErr = document.querySelector("#adminErr")
    let adminpassErr = document.querySelector("#adminpassErr")



    

    if (admin.value === "") {
        adminErr.innerText = "Please enter user name"
    } else {
        if (admin.value === "Admin") {
            adminErr.innerText = ""
        } else {
            adminErr.innerText = "Invalid User Name"
        }
    }

    if(pass.value===""){
        adminpassErr.innerText="please enter your password"
    }
    else{
        if(pass.value==="Admin@123"){
            adminpassErr.innerText=""
            Swal.fire({
            title: "Login Successfully😊",
            icon: "success",
            draggable: true
        });
            window.location.href="./admin/index.html"
        }
        else{
            adminpassErr.innerText="Invalid Password"
        }
    }
}