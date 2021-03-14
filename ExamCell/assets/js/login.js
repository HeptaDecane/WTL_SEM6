$("#login_form").each(function (){
    $(this).find(':input').focus(function (){
        $(this).css("border-color","#116dff")
    })

    $(this).find(':input').blur(function (){
        $(this).css("border-color","#ccc")
    })
})

$("#login_form").submit(function (e){
    let submit = true
    let errors = ""
    if($("#username").val() === ""){
        $("#username").css("border-color","#F58485")
        errors += "<li>- Username field is required</li>"
        submit = false
    }

    if($("#password").val() === ""){
        $("#password").css("border-color","#F58485")
        errors += "<li>- Password field is required</li>"
        submit = false
    }

    $("#error_list").html(errors)
    return submit
})


