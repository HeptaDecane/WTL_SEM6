let maxMarks = document.getElementById("max_marks").innerText.split(" ")[2]
let valid = true;
let errorList = document.getElementById("error_list")
let form = document.getElementById("score_form")
let button = document.getElementById("save_changes")
let elements = Array.from(form.elements)
let integer = /^[0-9]+$/


elements.forEach((element)=>{
    if(element.tagName.toLowerCase()==="input"){
        element.addEventListener("change",(e)=>{
            let score = parseInt(element.value)
            if(!integer.test(element.value)) {
                element.style.backgroundColor = "#F58485"
                valid = false
            }
            else if(score<0 || score>parseInt(maxMarks)) {
                element.style.backgroundColor = "#F58485"
                valid = false
            }
            else {
                element.style.backgroundColor = "#FFFFFF"
                valid = true
            }

            if(!valid) {
                button.disabled = true
                button.style.background = "gray"
                errorList.innerHTML = "<li>- Invalid Score(s)</li>"
            }
            else {
                button.disabled = false
                button.style.background = "#7278bf"
                errorList.innerHTML = ""
            }
        })
    }
})
