document.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
  text: "Are You sure logout the page?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#32291d",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes Logout"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      text: "logout successfully",
      icon: "success"
    });
    window.location.href="../index.html"
  }
});
});

