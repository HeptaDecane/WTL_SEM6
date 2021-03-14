let dateOfBirth = document.getElementById("date_of_birth")
let currentYear = new Date().getFullYear();
let minYear = currentYear - 70
let maxYear = currentYear - 17
dateOfBirth.setAttribute("min",minYear+"-01-01")
dateOfBirth.setAttribute("max", maxYear+"-12-31")


let form = document.getElementById("registration_form")
let elements = Array.from(form.elements)
elements.forEach((element)=>{
    if(element.tagName.toLowerCase()==="input"){
        element.onfocus = (event)=>{
            element.style.borderColor = "#116dff"
        }
        element.onblur = (event)=>{
            element.style.borderColor = "#ccc"
        }
    }
})

let registrationForm = document.getElementById("registration_form")
registrationForm.onsubmit = (e)=>{
    console.log(e)
    let submit = true
    let firstName = document.getElementById("first_name")
    let middleName = document.getElementById("middle_name")
    let lastName = document.getElementById("last_name")
    let dateOfBirth = document.getElementById("date_of_birth")
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

    if(dateOfBirth.value === ""){
        dateOfBirth.style.borderColor = "#F58485"
        errors += "<li>- Date of Birth missing</li>"
        submit = false
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
    } else {
        let reg = /^\S+@\S+$/
        if(!reg.test(email.value)){
            email.style.borderColor = "#F58485"
            errors += "<li>- Invalid email format</li>"
            submit = false
        }
    }

    if(mobile.value === ""){
        mobile.style.borderColor = "#F58485"
        errors += "<li>- Mobile No. can't be left empty</li>"
        submit = false
    } else {
        let reg = /^[0-9]{10}$/
        if(!reg.test(mobile.value)){
            mobile.style.borderColor = "#F58485"
            errors += "<li>- Invalid Mobile number</li>"
            submit = false
        }
    }

    if(password01.value === ""){
        password01.style.borderColor = "#F58485"
        password02.style.borderColor = "#F58485"
        errors += "<li>- Password is required field</li>"
        submit = false
    }else {
        if(password01.value.length < 8){
            password01.style.borderColor = "#F58485"
            password02.style.borderColor = "#F58485"
            errors += "<li>- Password requires min 8 characters</li>"
            submit = false
        } else if(password01.value !== password02.value){
            password01.style.borderColor = "#F58485"
            password02.style.borderColor = "#F58485"
            errors += "<li>- Passwords didn't match</li>"
            submit = false
        } else {
            password01.style.borderColor = "#CCC"
            password02.style.borderColor = "#CCC"
        }
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