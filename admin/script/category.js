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
    let iscatup = false
    if (ischeck) {
        if (CATid.value == "") {
            let object = {
                id: Date.now(),
                Category: CATEGORY.value
            }
            categorylist.push(object)
            iscatup = true
        } else {
            categorylist = categorylist.map((e) => {
                if (CATid.value == e.id) {
                    return {
                        id: CATid.value,
                        Category: CATEGORY.value
                    }
                }
                // else if(CATEGORY.value===CATEGORY.value){
                //     alert("hi")
                // }
                return e
            })
        }

        if (iscatup) {
            Swal.fire({
                title: "New Category is Added",
                icon: "success",
                draggable: true
            });
            iscatup = false
        }else {
            Swal.fire({
                title: "Category is Updated",
                icon: "success",
                draggable: true
            });
        }
        CATEGORY.value = ""
        localStorage.setItem("categorylist", JSON.stringify(categorylist))

    }
    cattabledata()
}

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
        CATid.value = updatecat.id,
            CATEGORY.value = updatecat.Category
    }

}

function catdelt(upid) {
    // let sure = confirm("You Want to delete the category?")

    Swal.fire({
        title: "Are you sure?",
        text: "You Want to delete the category?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            categorylist = categorylist.filter((e) => {
                if (e.id != upid) {
                    return e
                }
            })
            Swal.fire({
                title: "Your Category is Deleted",
                icon: "success",
                draggable: true
            });
            localStorage.setItem("categorylist", JSON.stringify(categorylist))
            cattabledata()

        } else {
            Swal.fire({
                title: "Your Category is Safe",
                icon: "success",
                draggable: true
            });
        }
    });
}
cattabledata()