let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
let cartCount = document.querySelector("#cart-count");

cartCount.innerText = cartArray.length;


document.addEventListener("DOMContentLoaded", function () {
        newcard();
});


document.querySelector("#cartBTN").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "cart.html";
});

function newcard() {
        let prodlist = JSON.parse(localStorage.getItem("prodlist")) || []
        let newdupcard = ''
        prodlist.forEach((ele) => {
                newdupcard += `
                <div class="box" data-id="${ele.productid}">
                    <div class="top img6">
                        <img class="img-1" src="${ele.imgurl1}" alt="">
                        <img class="img-2" src="${ele.imgurl2}" alt="">
                        <div class="icons">
                            <button type="button" class="eye"><i class="fa-regular fa-eye"></i></button>
                              
                        </div>
                    </div>
                    <div class="bottom">
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                class="fa-solid fa-star-half-stroke"></i></p>
                        <h4 class="prodname">${ele.productname}</h4>
                        <div class="cart">
                            <p class="prices">₹<span class="pricelist">${ele.prices}</span></p>
                            <button type="button" class="addtocart">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                `




        })

        document.querySelector(".newcards").innerHTML = newdupcard
}




document.querySelectorAll(".row2").forEach(e => {
        e.addEventListener("click", (but => {
                let adbtn = but.target.closest(".addtocart")

                document.addEventListener("click", (e) => {
                        let EYE = e.target.closest(".eye");
                        let card = EYE.closest(".box");
                        let imgSrc = card.querySelector(".img-2").src;
                        Swal.fire({
                                imageUrl: imgSrc,
                                imageHeight: 500,
                                imageAlt: "A tall image"
                        });
                })
                let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
                if (adbtn) {

                        let card = adbtn.closest(".box");
                        let productid = card.dataset.id

                        let exist = cartArray.find(e => e.id == productid)

                        if (!exist) {

                                let prdd = createpd(productid, adbtn, cartArray)
                                cartArray.push(prdd)
                                localStorage.setItem("cartArray", JSON.stringify(cartArray))
                                cartCount.innerText = cartArray.length;
                                Swal.fire({
                                        icon: "success",
                                        text: "Product added to cart!"
                                });
                        } else {
                                Swal.fire({
                                        icon: "error",
                                        text: "You already added this product to cart!",
                                });
                        }




                } else {

                }

        }))
})


function createpd(cardid, button) {
        let card = button.closest(".box");
        debugger;
        let product = {
                id: cardid,
                img1: card.querySelector(".img-1").src,
                img2: card.querySelector(".img-2").src,
                name: card.querySelector(".prodname").innerText,
                price: Number(card.querySelector(".pricelist").innerText),
                quantity: 1
        }

        return product
}