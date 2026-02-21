// document.querySelector("#logout").addEventListener("click", (e) => {
//     e.preventDefault();
//     Swal.fire({
//         title: "Site Logged out successfully!",
//         icon: "success",
//         confirmButtonText: "OK"
//     }).then(() => {
//         window.location.href = "../index.html";
//     });
// });

// localStorage.setItem("user", JSON.stringify(userData));

// document.querySelector("#logout").addEventListener("click", function (e) {
//     e.preventDefault();

//     // Remove only login data
//     localStorage.removeItem("user");

//     Swal.fire({
//         icon: "success",
//         title: "Logged out successfully!",
//         timer: 1500,
//         showConfirmButton: false
//     });

//     setTimeout(() => {
//         window.location.href = "index.html";
//     }, 1500);
// });