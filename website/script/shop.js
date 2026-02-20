let cartCount = document.querySelector("#cart-count");
let cartbtn = document.querySelectorAll("#addtocart")


document.querySelector("#cartBTN").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "cart.html";
});

let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []

cartCount.innerText = cartArray.length;
cartbtn.forEach((element) => {
        element.addEventListener("click", () => {
                let card = element.closest(".box");
                let productid = card.dataset.id
                // console.log(productid)

                let product = {
                        id: productid,
                        img1: card.querySelector(".img-1").src,
                        img2: card.querySelector(".img-2").src,
                        name: card.querySelector(".prodname").innerText,
                        price: card.querySelector(".prices").innerText,
                        quantity: 1
                };
                let exists = cartArray.filter((item) => item.id === product.id);
                if (exists.length > 0) {
                        Swal.fire({
                                icon: "error",
                                text: "You already added this product to cart!",
                        });

                } else {
                        cartArray.push(product);
                        localStorage.setItem("cartArray", JSON.stringify(cartArray));
                        alert("Product added to cart!");
                }

                cartCount.innerText = cartArray.length;


        })

})





let barIcon = document.querySelector("#barIcon")

let cat = document.querySelector(".cat")
barIcon.addEventListener("click", () => {
        cat.classList.toggle("tog")
})











































// let cart = JSON.parse(localStorage.getItem("cart")) || []

// // Add to Cart Button Click
// document.querySelectorAll(".add-cart").forEach(button => {

//     button.addEventListener("click", function () {

//         let id = this.dataset.id
//         let name = this.dataset.name
//         let price = parseFloat(this.dataset.price)

//         let existing = cart.find(item => item.id == id)

//         if (existing) {
//             existing.quantity += 1
//         } else {
//             cart.push({
//                 id: id,
//                 name: name,
//                 price: price,
//                 quantity: 1
//             })
//         }

//         localStorage.setItem("cart", JSON.stringify(cart))

//         updateCartCount()
//         alert("Added to cart")
//     })

// })


// // Update Cart Count
// function updateCartCount() {

//     let totalQty = 0

//     cart.forEach(item => {
//         totalQty += item.quantity
//     })

//     document.getElementById("cart-count").innerText = totalQty
// }

// updateCartCount()


// function increaseQty(id) {
//     let item = cart.find(p => p.id == id)
//     item.quantity++
//     saveCart()
// }

// function decreaseQty(id) {
//     let item = cart.find(p => p.id == id)
//     if (item.quantity > 1) {
//         item.quantity--
//     }
//     saveCart()
// }

// function saveCart() {
//     localStorage.setItem("cart", JSON.stringify(cart))
//     updateCartCount()
// }



// let count = 0

// let number = document.getElementById("cart-count")

// let inc = () => {
//     if (count < 10) {
//         count++
//         number.innerText = count
//     } else {
//         alert("only <= 10 numbers")
//     }
// }