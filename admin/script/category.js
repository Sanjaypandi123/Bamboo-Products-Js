let categorylist = JSON.parse(localStorage.getItem("categorylist")) || []
document.querySelector("#formbtn").addEventListener("click", function (e) {
    e.preventDefault()
    categoryform()
    cattabledata()
})
let CATEGORY = document.getElementById("CATEGORY")
let CATEGORYErr = document.getElementById("CATEGORYErr")

let ischeck = false
let categoryform = () => {
    if (CATEGORY.value === "") {
        CATEGORYErr.innerText = "Please Enter Your Category"
        CATEGORYErr.style.color = "red"
        ischeck = false
    } else {
        CATEGORYErr.innerText = ""
        ischeck = true
    }

    if (ischeck) {
        let object = {
            Category: CATEGORY.value
        }
        categorylist.push(object)
        CATEGORY.value = ""
        localStorage.setItem("categorylist", JSON.stringify(categorylist))
    }
    catinsert()
}

let catinsert = () => {
    let addcategory = ""
    categorylist.forEach(element => {
        addcategory += `
                            <option value="category 1">${element.Category}</option>
                        `
    });
    document.querySelector("#category").innerHTML = addcategory
}

catinsert()

let cattabledata = () => {
    let trow = ""
    if (categorylist.length > 0) {
        categorylist.forEach((element) => {
            trow += ` 
        <tr align=center>
                            
                            <td>${element.Category}</td>
                            
                            <td>
                                <button type="button" style="padding: 5px; font-size: 1rem; border-radius: 20px; border: none; outline: none; cursor: pointer;" onclick="catupdate(${element.Category})"><i class="fa-solid fa-marker"></i></button>
                            </td>
                            <td><button type="button" style="padding: 5px; font-size: 1rem; border-radius: 20px; border: none; outline: none; cursor: pointer;" onclick="catdelt(${element.Category})"><i class="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>`
        })
    } else {
        trow += `
        <tr>
        <td colspan=9 align=center>No Record Found</td>
        </tr>`
    }


    document.querySelector("#catBody").innerHTML = trow
}

cattabledata()