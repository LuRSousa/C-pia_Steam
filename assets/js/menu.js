const userBtn = document.querySelector("#name")
const userDropdown = document.querySelector("#user-dropdown-menu")

function showDropdown(){
    if (userDropdown.style.display == "none"){

        userDropdown.style.display = "flex"
    
    } else {
        userDropdown.style.display = "none"
    }
}

userBtn.addEventListener("click", showDropdown)




 

