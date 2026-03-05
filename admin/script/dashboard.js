let regarr=JSON.parse( localStorage.getItem("UserList")) || []


document.querySelector("#userreg").innerHTML=regarr.length



let totprolist =JSON.parse(localStorage.getItem("prodlist")) || []

document.querySelector("#totprod").innerHTML=totprolist.length 

let totstock = totprolist.reduce((a,e)=>{
    return a+Number(e.stocks)
},0)

document.querySelector("#totstock").innerHTML=totstock 





let totcatlist =JSON.parse(localStorage.getItem("categorylist")) || []

document.querySelector("#totcatlist").innerHTML=totcatlist.length 












let barIcon=document.querySelector("#barIcon")

let flex1=document.querySelector(".flex1")
barIcon.addEventListener("click",()=>{
    flex1.classList.toggle("tog")
})

