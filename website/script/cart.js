let cartCount = document.querySelector("#cart-count");
let addcard = document.querySelector("#addcard-page")

function createdcard() {
    let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
    cartCount.innerText = cartArray.length;

    let dupcard = ''
    let totalPrice = 0
    cartArray.forEach(element => {
        let perPrice = element.price * element.quantity;
        totalPrice += perPrice;

        dupcard += `
        <div class="cartbox">
                <div class="left">
                    <div class="box" data-id="${element.productid}">
                        <div class="top img6">
                            <img class="img-1" src="${element.img1}" alt="">
                            <img class="img-2" src="${element.img2}" alt="">
                        </div>
                        <div class="bottom">
                            <h4 class="prodname">${element.name}</h4>
                        </div>
                    </div>
                </div>

                <div class="cartprice">
                    <div class="cart1">
                        <p class="prices"><b>Product Price :</b>₹${parseFloat(element.price)}</p>
                    </div>
                    <div class="cart2">
                        <div class="top">
                            <p class="prices"><b>Total :</b>₹${perPrice}</p>
                        </div>
                        <div class="bottom">
                            <button type=button onclick="subqty(${element.id})"><i class="fa-solid fa-minus"></i></button>
                            <span>${element.quantity}</span>
                            <button type=button onclick="addqty(${element.id})"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>

                </div>
                <div class="right">
                    <button type="button" id="cartRemove" onclick="cardremove(${element.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            `
    });

    dupcard += `
        <div class="cartbox totalprice">
                <div class="tot">
                    <h1>₹${totalPrice.toFixed(2)}</h1>
                </div>
                <div class="buy">
                    <button type="button" onclick="over()">Buy Now</button>
                </div>
            </div>
    `
    addcard.innerHTML = dupcard


}
createdcard()

function addqty(pdid) {
    let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
    cartArray.forEach((e) => {
        if (e.id == pdid) {
            if (e.quantity < 10) {
                e.quantity++
            } else {
                alert("Maximum Quantity Reached")
            }
        }
    })
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    createdcard()

}

function subqty(pdid) {
    let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
    cartArray.forEach((e) => {
        if (e.id == pdid) {
            if (e.quantity > 1) {
                e.quantity--
            } else {
                alert("Minimum Quantity Reached")
            }
        }
    })
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    createdcard()

}

let over = () => {
    let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
    if (cartArray.length > 0) {
        let sure = confirm("Are you sure buy the products!!!..")
        if (sure) {
            localStorage.setItem("cartArray", JSON.stringify([]))
            Swal.fire({
                title: "Successfully Purchased!",
                icon: "success",
                draggable: true
            });
            createdcard()
        } else {
            Swal.fire({
                icon: "error",
                text: "Purchase cancelled ❌"
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Add the Products You want",
        });

        setTimeout(() => {
            window.location.href = "./shop.html"
        }, 1000);
    }
}



function cardremove(proid) {

    let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

    // cartArray = cartArray.filter(element => element.id != proid);

    // localStorage.setItem("cartArray", JSON.stringify(cartArray));
    
    Swal.fire({
        title: "Are you sure?",
        text: "You want to Remove the product from the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove it!"
    }).then((result) => {
        if (result.isConfirmed) {
            cartArray = cartArray.filter(element => element.id != proid);
             localStorage.setItem("cartArray", JSON.stringify(cartArray));
            Swal.fire({
                title: "Deleted!",
                text: "Product is Removed.",
                icon: "success"
            });
        }else{
            Swal.fire({
                text: "Product is Safed.",
                icon: "success"
            });

        }
    });

    createdcard();
}