let categorylist = JSON.parse(localStorage.getItem("categorylist")) || []
document.querySelector("#formbtn").addEventListener("click", function (e) {
    e.preventDefault()
    categoryform()
    cattabledata()
})
let CATEGORY = document.getElementById("CATEGORY")
let CATid = document.getElementById("catid")
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
        if (CATid.value == "") {
            let object = {
                id: Date.now(),
                Category: CATEGORY.value
            }
            categorylist.push(object)
        } else {
            categorylist = categorylist.map((e) => {
                if (CATid.value == e.id) {
                    return {
                        id: CATid.value,
                        Category: CATEGORY.value
                    }
                }
                return e
            })
        }
        CATEGORY.value = ""
        localStorage.setItem("categorylist", JSON.stringify(categorylist))
    }
    cattabledata()
}

// let catinsert = () => {
//     let addcategory = ""
//     categorylist.forEach(element => {
//         addcategory += `
//                             <option value="category 1">${element.Category}</option>
//                         `
//     });
//     document.querySelector("#category").innerHTML = addcategory
// }

// catinsert()

let cattabledata = () => {
    let trow = ""
    if (categorylist.length > 0) {
        categorylist.forEach((element) => {
            trow += ` 
        <tr align=center>
    
        <td>${element.Category}</td>
                            
                            <td>
                                <button type="button" onclick="catupdate(${element.id})"><i class="fa-solid fa-marker"></i></button>
                            </td>
                            <td><button type="button" onclick="catdelt(${element.id})"><i class="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>`
        })
    } else {
        trow += `
        <tr>
        <td colspan=2 align=center>No Record Found</td>
        </tr>`
    }


    document.querySelector("#catBody").innerHTML = trow
}





function catupdate(upId) {
    let updatecat = categorylist.find((e) => e.id == upId)

    if (updatecat) {
        alert("hii")
        CATid.value = updatecat.id,
            CATEGORY.value = updatecat.Category
    }

}

function catdelt(upid) {
    let sure = confirm("You Want to delete the category?")
    if (sure) {
        categorylist = categorylist.filter((e) => {
            if (e.id != upid) {
                return e
            }
        })
        localStorage.setItem("categorylist",JSON.stringify(categorylist))
    }
    else{
        alert("Your Category safe!!! ")
    }
    cattabledata()
}
cattabledata()