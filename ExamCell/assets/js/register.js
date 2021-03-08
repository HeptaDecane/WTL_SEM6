let registrationForm = document.getElementById("registration_form")
registrationForm.onsubmit = (e)=>{
    console.log(e)
    let submit = true
    let firstName = document.getElementById("first_name")
    let middleName = document.getElementById("middle_name")
    let lastName = document.getElementById("last_name")
    let idNo = document.getElementById("id_no")
    let email = document.getElementById("email")
    let mobile = document.getElementById("mobile")
    let password01 = document.getElementById("password")
    let password02 = document.getElementById("confirm_password")
    let errorList = document.getElementById("error_list")
    let errors = ""

    if(firstName.value === ""){
        firstName.style.borderColor = "#F58485"
        errors += "<li>- First Name can't be left empty</li>"
        submit = false
    } else {
        let reg = /^[a-z]+$/i
        if(!reg.test(firstName.value)){
            firstName.style.borderColor = "#F58485"
            errors += "<li>- First Name should only contain Alphabets</li>"
            submit = false
        }
    }

    if(/^[a-z]*$/i.test(middleName.value) === false){
        middleName.style.borderColor = "#F58485"
        errors += "<li>- Middle Name should only contain Alphabets</li>"
        submit = false
    }

    if(lastName.value === ""){
        lastName.style.borderColor = "#F58485"
        errors += "<li>- Last Name can't be left empty</li>"
        submit = false
    } else {
        let reg = /^[a-z]+$/i
        if(!reg.test(lastName.value)){
            lastName.style.borderColor = "#F58485"
            errors += "<li>- Lastname Name should only contain Alphabets</li>"
            submit = false
        }
    }

    if(idNo.value === ""){
        idNo.style.borderColor = "#F58485"
        errors += "<li>- Identity No. can't be left empty</li>"
        submit = false
    } else {
        let reg = /^[a-z0-9]+$/i
        if(!reg.test(idNo.value)){
            idNo.style.borderColor = "#F58485"
            errors += "<li>- Identity No. should be Alphanumeric</li>"
            submit = false
        }
    }

    if(email.value === ""){
            email.style.borderColor = "#F58485"
            errors += "<li>- Email field can't be left empty</li>"
            submit = false
    }

    if(mobile.value === ""){
        mobile.style.borderColor = "#F58485"
        errors += "<li>- Mobile No. can't be left empty</li>"
        submit = false
    }

    if(password01.value === ""){
        password01.style.borderColor = "#F58485"
        password02.style.borderColor = "#F58485"
        errors += "<li>- Password is required field</li>"
        submit = false
    }
    errorList.innerHTML = errors
    return submit
}


showPassword = ()=>{
    let showBox = document.getElementById("show_password")
    let password01 = document.getElementById("password")
    let password02 = document.getElementById("confirm_password")
    if(showBox.checked) {
        password01.type = "text"
        password02.type = "text"
    } else {
        password01.type = "password"
        password02.type = "password"
    }
}