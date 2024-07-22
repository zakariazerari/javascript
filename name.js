
let button= document.getElementById("btn")



button.addEventListener("click", function login(e) { 
    e.preventDefault()

   

    let email= document.getElementById("email").value

let password= document.getElementById("password").value

let error= document.getElementById("error")


if ( "zakaria@gmail.com" == email && password == "zakaria123") {


   error.innerText = "email and password valid "

  } else {
    console.log("email and password non valid" .innerText )
    
    

  }



  })





