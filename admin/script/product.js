let arrays = JSON.parse(localStorage.getItem("prodlist")) || []

document.querySelector("#formbtn").addEventListener("click", function (e) {
    e.preventDefault()
    productform()

})

function isValidURL(url) {
    try {
        new URL(url)
        return true
    } catch (err) {
        return false
    }
}
addcat()

function addcat() {
    let categorylist = JSON.parse(localStorage.getItem("categorylist")) || []
    let category = document.querySelector("#category")
    let dupoption = `
            <option value="">Select the Category</option>
        `
    categorylist.forEach((e) => {
        dupoption += `
            <option value="${e.Category}">${e.Category}</option>
        `
    })
    category.innerHTML = dupoption
}

let productform = () => {
    let isimage1 = false,
        isimage2 = false,
        isproduct = false,
        iscategory = false,
        isprice = false,
        isstock = false

    // product------start
    let PROID = document.getElementById("PROID")

    // product------end

    // ===================================================================
    // image------start
    let imgurl1 = document.getElementById("imgurl1")
    let imgurlErr1 = document.getElementById("imgurlErr1")

    if (imgurl1.value.trim() === "") {
        imgurlErr1.innerText = "Enter your image URL"
        imgurlErr1.style.color = "red"
        isimage1 = false
    } else if (!isValidURL(imgurl1.value)) {
        imgurlErr1.innerText = "Enter valid URL (https://...)"
        imgurlErr1.style.color = "red"
        isimage1 = false
    } else {
        imgurlErr1.innerText = ""
        isimage1 = true
    }
    // image------end

    // ===================================================================
    let imgurl2 = document.getElementById("imgurl2")
    let imgurlErr2 = document.getElementById("imgurlErr2")


    if (imgurl2.value.trim() === "") {
        imgurlErr2.innerText = "Enter your image URL"
        imgurlErr2.style.color = "red"
        isimage2 = false
    } else if (!isValidURL(imgurl2.value)) {
        imgurlErr2.innerText = "Enter valid URL (https://...)"
        imgurlErr2.style.color = "red"
        isimage1 = false
    } else {
        imgurlErr2.innerText = ""
        isimage2 = true
    }
    // image------end

    // ===================================================================

    // product------start
    let prodname = document.getElementById("prodname")
    let prodnameErr = document.getElementById("prodnameErr")

    if (prodname.value === "") {
        prodnameErr.innerText = "Enter Your product name"
        prodnameErr.style.color = "red"
        isproduct = false
    } else {
        prodnameErr.innerText = ""
        isproduct = true
    }
    // product------end

    // ===================================================================

    // category-----start
    let category = document.getElementById("category")
    let categoryErr = document.getElementById("categoryErr")

    if (category.value === "") {
        categoryErr.innerText = "Select Your  category"
        categoryErr.style.color = "red"
        iscategory = false
    } else {
        categoryErr.innerText = ""
        iscategory = true
    }
    // category-----end

    // ===================================================================

    // price-------start
    let price = document.getElementById("price")
    let priceErr = document.getElementById("priceErr")

    if (price.value === "") {
        priceErr.innerText = "Enter Your price"
        priceErr.style.color = "red"
        isprice = false
    } else if (price.value > 0) {
        priceErr.innerText = ""
        isprice = true

    } else {
        priceErr.innerText = "Price can't be Negative"
        priceErr.style.color = "red"
        isprice = false
    }
    // price-------end

    // ===================================================================

    // stock-------start
    let stock = document.getElementById("stock")
    let stockErr = document.getElementById("stockErr")

    if (stock.value === "") {
        stockErr.innerText = "Enter Your stock"
        stockErr.style.color = "red"
        isstock = false
    } else if (price.value > 0) {
        stockErr.innerText = ""
        isstock = true

    } else {
        stockErr.innerText = "Stock can't be Negative"
        stockErr.style.color = "red"
        isstock = false
    }
    // stock-------end


    // ===================================================================
    // let isup = false
    let isadd = false
    if (isimage1 && isimage2 && isproduct && iscategory && isprice && isstock) {
        if (PROID.value == "") {

            let objects = {
                productid: Date.now(),
                imgurl1: imgurl1.value,
                imgurl2: imgurl2.value,
                productname: prodname.value,
                categoryname: category.value,
                prices: Number(price.value),
                stocks: stock.value
            }
            arrays.push(objects)
            isadd = true



        } else {
            arrays = arrays.map((e) => {
                if (PROID.value == e.productid) {
                    return {
                        productid: PROID.value,
                        imgurl1: imgurl1.value,
                        imgurl2: imgurl2.value,
                        productname: prodname.value,
                        categoryname: category.value,
                        prices: price.value,
                        stocks: stock.value
                    }

                }

                return e
            })
        }
        if (isadd) {

            Swal.fire({
                title: "New Product is Added",
                icon: "success",
                draggable: true
            });
            isadd = false
        } else {
            Swal.fire({
                title: "Product is Updated",
                icon: "success",
                draggable: true
            });
        }
        PROID.value = ""
        imgurl1.value = ""
        imgurl2.value = ""
        prodname.value = ""
        category.value = ""
        price.value = ""
        stock.value = ""
        localStorage.setItem("prodlist", JSON.stringify(arrays))

    }

    tabledata()
}



let tabledata = () => {
    let trow = ""
    if (arrays.length > 0) {
        arrays.forEach((element) => {
            trow += ` 
        <tr align=center>
                            <td>${element.productid}</td>
                            <td><img src="${element.imgurl1}" alt="" width="100px" height="100px"></td>
                            <td><img src="${element.imgurl2}" alt="" width="100px" height="100px"></td>
                            <td>${element.productname}</td>
                            <td>${element.categoryname}</td>
                            <td>${element.prices}</td>
                            <td>${element.stocks}</td>
                            <td>
                                <button type="button" style="padding: 5px; font-size: 1rem; border-radius: 20px; border: none; outline: none; cursor: pointer;" onclick="update(${element.productid})"><i class="fa-solid fa-marker"></i></button>
                            </td>
                            <td><button type="button" style="padding: 5px; font-size: 1rem; border-radius: 20px; border: none; outline: none; cursor: pointer;" onclick="delt(${element.productid})"><i class="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>`
        })
    } else {
        trow += `
        <tr>
        <td colspan=9 align=center>No Record Found</td>
        </tr>`
    }


    document.querySelector("#prodBody").innerHTML = trow
}



function update(upId) {
    let updateproduct = arrays.find((e) => e.productid == upId)

    if (updateproduct) {
        document.getElementById("PROID").value = updateproduct.productid
        document.getElementById("imgurl1").value = updateproduct.imgurl1
        document.getElementById("imgurl2").value = updateproduct.imgurl2
        document.getElementById("prodname").value = updateproduct.productname
        document.getElementById("category").value = updateproduct.categoryname
        document.getElementById("price").value = updateproduct.prices
        document.getElementById("stock").value = updateproduct.stocks
    }

}



let delt = (prtID) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You Want to delete the Product?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#32291d",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {


        if (result.isConfirmed) {
            arrays = arrays.filter((e) => {
                if (e.productid != prtID) {
                    return e
                }
            })
            Swal.fire({
                title: "Your Product is Deleted",
                icon: "success",
                draggable: true
            });
            localStorage.setItem("prodlist", JSON.stringify(arrays))
            tabledata()
        } else {
            Swal.fire({
                title: "Your Product is Safe",
                icon: "success",
                draggable: true
            });
        }
    });

}
tabledata()