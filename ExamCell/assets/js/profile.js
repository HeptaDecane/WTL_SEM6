$("#password_form").each(function (){
    $(this).find(':input').focus(function (){
        $(this).css("border-color","#116dff")
    })

    $(this).find(':input').blur(function (){
        $(this).css("border-color","#ccc")
    })
})

$("#password_form").submit(function (e){
    let currentPassword = $("#current_password")
    let newPassword01 =  $("#new_password01")
    let newPassword02 = $("#new_password02")
    let submit = true
    let errors = ""

    if(currentPassword.val() === ""){
        currentPassword.css("border-color","#F58485")
        errors += "<li>- Current Password is required</li>"
        submit = false
    }

    if(newPassword01.val() === ""){
        newPassword01.css("border-color","#F58485")
        newPassword02.css("border-color","#F58485")
        errors += "<li>- New Password field is required</li>"
        submit = false
    } else {
        if(newPassword01.val() !== newPassword02.val()){
            newPassword01.css("border-color","#F58485")
            newPassword02.css("border-color","#F58485")
            errors += "<li>- Passwords didn't match</li>"
            submit = false
        }
    }

    $("#error_list").html(errors)
    return submit
})

showPassword = ()=>{
    let showBox = $("#show_password")
    let newPassword01 = $("#new_password01")
    let newPassword02 = $("#new_password02")
    if(showBox.is(":checked")){
        newPassword01.attr("type","text")
        newPassword02.attr("type","text")
    } else {
        newPassword01.attr("type","password")
        newPassword02.attr("type","password")
    }
}
