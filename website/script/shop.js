let cartCount = document.querySelector("#cart-count");
// let cartbtn = document.querySelectorAll(".addtocart");

document.addEventListener("DOMContentLoaded", function () {
    newcard();
});


document.querySelector("#cartBTN").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "cart.html";
});

// document.querySelectorAll(".row2").forEach(box=>{
//         ccaarrtt(box)
// })



// let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []

// cartCount.innerText = cartArray.length;
// cartbtn.forEach((element) => {
//         element.addEventListener("click", () => {
//                 let card = element.closest(".box");
//                 let productid = card.dataset.id
//                 // console.log(productid)

//                 let product = {
//                         id: productid,
//                         img1: card.querySelector(".img-1").src,
//                         img2: card.querySelector(".img-2").src,
//                         name: card.querySelector(".prodname").innerText,
//                         price: card.querySelector(".prices").innerText,
//                         quantity: 1
//                 };
//                 let exists = cartArray.filter((item) => item.id === product.id);
//                 if (exists.length > 0) {
//                         Swal.fire({
//                                 icon: "error",
//                                 text: "You already added this product to cart!",
//                         });

//                 } else {
//                         cartArray.push(product);
//                         localStorage.setItem("cartArray", JSON.stringify(cartArray));
//                         cartCount.innerText = cartArray.length;
//                         setTimeout(() => {
//                                 alert("Product added to cart!");
//                         }, 200);
//                 }  
//         })

// })

newcard()


function newcard(){
        // debugger
         let prodlist = JSON.parse(localStorage.getItem("prodlist")) || []
         let newdupcard = ''
         prodlist.forEach((ele)=>{
                newdupcard+=`
                <div class="box" data-id="${ele.id}">
                    <div class="top img6">
                        <img class="img-1" src="${ele.imgurl1}" alt="">
                        <img class="img-2" src="${ele.imgurl2}" alt="">
                        <div class="icons">
                            <button type="button"><i class="fa-regular fa-heart"></i></button>
                            <button type="button"><i class="fa-regular fa-eye"></i></button>
                              
                        </div>
                    </div>
                    <div class="bottom">
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                class="fa-solid fa-star-half-stroke"></i></p>
                        <h4 class="prodname">${ele.productname}</h4>
                        <div class="cart">
                            <p class="prices">₹${ele.prices}</p>
                            <button type="button" class="addtocart" onclick="ccaarrtt(${ele.id})">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                `


         })

        //  console.log(newdupcard);
         

         document.querySelector(".newcards").innerHTML=newdupcard
        //  console.log(newdupcard);
         
}











function ccaarrtt(ip){
        let cartbtn = document.querySelectorAll(".addtocart");
 
        
let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
// console.log(cartbtn);

cartCount.innerText = cartArray.length;
cartbtn.forEach((element) => {
       
        element.addEventListener("click", () => {
                let card = element.closest(".box");
                // let productid = card.dataset.id
                let productid = ip
                console.log(productid)

                let product = {
                        id: productid,
                        img1: card.querySelector(".img-1").src,
                        img2: card.querySelector(".img-2").src,
                        name: card.querySelector(".prodname").innerText,
                        price: Number(card.querySelector(".prices").innerText),
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
                        cartCount.innerText = cartArray.length;
                        setTimeout(() => {
                                alert("Product added to cart!");
                        }, 200);
                }  
        })

})


}
