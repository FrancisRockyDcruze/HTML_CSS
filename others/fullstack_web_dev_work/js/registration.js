(() => {
    

    
})();

var change_Signup = () =>
{   
    $('.signinBX').css("display", "none");
    $('.signup_BX').css("display", "block");
    $('.forgot_password').css("display", "none");
}
var change_Signin = () =>
{   
    $('.signinBX').css("display", "block");
    $('.signup_BX').css("display", "none");
    $('.forgot_password').css("display", "none");
}
var change_forgotPassword = () =>
{   
    $('.signinBX').css("display", "none");
    $('.signup_BX').css("display", "none");
    $('.forgot_password').css("display", "block");
}
