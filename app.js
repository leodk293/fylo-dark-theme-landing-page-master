const inputEmail = document.querySelector("input")
const btn = document.querySelector(".input button")

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btn.addEventListener("click", handleEmail)
function handleEmail(){
    if(!(regex.test(inputEmail.value))){
        inputEmail.classList.add("error")
    }
    else{
        inputEmail.classList.remove("error")
        alert("email sent with success")
    }
}