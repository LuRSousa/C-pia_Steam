const userBtn = document.querySelector("#name")
const userDropdown = document.querySelector("#user-dropdown-menu")

function showInfo(){
    userDropdown.style.display = "flex"
}
function hideInfo(){
    userDropdown.style.display = "none"
}

if (userDropdown.style.display = "none"){

    userBtn.addEventListener("click", showInfo)

} else if (userDropdown.style.display = "flex"){

    userBtn.style.color = "#fff"
    userBtn.addEventListener("click", hideInfo)

}





 

