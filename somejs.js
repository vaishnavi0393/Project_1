

$("#lselect").on("click", function(){
    $("#signup-div").hide();
    $("[name='l_form']").trigger("reset");
    document.getElementsByClassName("email_msg")[1].innerHTML="";
    document.getElementsByClassName("psw_msg")[1].innerHTML="";
    $("#login-div").show();
});

$("#sselect").on("click", function(){
    $("#login-div").hide();
    $("[name='s_form']").trigger("reset");
    document.getElementsByClassName("uname_msg")[0].innerHTML="";
    document.getElementsByClassName("email_msg")[0].innerHTML="";
    document.getElementsByClassName("psw_msg")[0].innerHTML="";
    $("#signup-div").show();
});

$(function(){
    
    $("[name='vis_psw']").on("click",function(){
        if ($("[name='vis_psw']").attr("class")=="bi bi-eye-fill p-2")
        {
            $("[name='psw']").attr("type","password");
            $("[name='vis_psw']").attr("class","bi bi-eye-slash-fill p-2");
            $("[name='vis_psw']").attr("title","Show Password");
            
        }
        else
        {
            $("[name='psw']").attr("type","text");
            $("[name='vis_psw']").attr("class","bi bi-eye-fill p-2");
            $("[name='vis_psw']").attr("title","Hide Password");
        }
    });
});

$("#signup-div").on("submit",function(e) {
    e.preventDefault();    
    $.fn.validateForm("s_form");
});

$("#login-div").on("submit",function(e) {
    e.preventDefault();
    $.fn.validateForm("l_form");
});




$.fn.validateForm= function(f_name) {
    var i;
    if (f_name=="s_form")
    {
        var uname = document.forms["s_form"]["uname"].value;
        var email = document.forms["s_form"]["new_email"].value;
        var psw = document.forms["s_form"]["new_password"].value;
        var only_spaces = String(uname.match(/[ \n\r\t\f]+/g)).length;
        var pat1 = /^\w+\s+/g;
        i=0;
    }
    
    if (f_name=="l_form"){
        var email = document.forms["l_form"]["email"].value;
        var psw = document.forms["l_form"]["password"].value;
        i=1;
    }
    let check_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g.test(email);
    let test2 = /[ \n\r\t\f]+/g.test(psw);
    if (f_name=="s_form") {
        if (/\d/g.test(uname)==true || pat1.test(uname)==false || uname.length==only_spaces)
        {
            document.getElementsByClassName("uname_msg")[i].innerHTML="Please enter valid name";
        }
    }
    if (check_email==false)
    {
        document.getElementsByClassName("email_msg")[i].innerHTML="Please Enter valid Email Id";
    }
    if (test2)
    {
        document.getElementsByClassName("psw_msg")[i].innerHTML="Please Enter valid Password";
    }
}
