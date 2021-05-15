let settingsForm = document.getElementById("settings_form")
let settingsBtn = document.getElementById("settings")
let modalBlock = document.getElementById("settings_modal");
let closeBtn = document.getElementById("close_modal")
settingsBtn.onclick = ()=>{
    modalBlock.style.display = "block";
    Array.from(settingsForm.elements).forEach((element)=>{
        if(element.tagName.toLowerCase()==="input"){
                element.style.borderColor = "#ccc"
        }
    })
}
closeBtn.onclick = ()=>{
    modalBlock.style.display = "none"
}

Array.from(settingsForm.elements).forEach((element)=>{
    if(element.tagName.toLowerCase()==="input"){
        element.onfocus = (event)=>{
            element.style.borderColor = "#116dff"
        }
        element.onblur = (event)=>{
            element.style.borderColor = "#ccc"
        }
    }
})

settingsForm.onsubmit = (e)=>{
    let submit = true
    let examDate = document.getElementById("exam_date")
    let maxMarks = document.getElementById("max_score")
    if(maxMarks.value==="" || maxMarks.value<10){
        maxMarks.style.borderColor = "#F58485"
        submit = false
    }
    if(examDate.value === ""){
        examDate.style.borderColor = "#F58485"
        submit = false
    }

    return submit

}