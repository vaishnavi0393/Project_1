

$("#lselect").click(function(){
    $("#signup-div").hide();
    $("[name='l_form']").trigger("reset");
    document.getElementsByClassName("email_msg")[1].innerHTML="";
    document.getElementsByClassName("psw_msg")[1].innerHTML="";
    $("#login-div").show();
});

$("#sselect").click(function(){
    $("#login-div").hide();
    $("[name='s_form']").trigger("reset");
    document.getElementsByClassName("uname_msg")[0].innerHTML="";
    document.getElementsByClassName("email_msg")[0].innerHTML="";
    document.getElementsByClassName("psw_msg")[0].innerHTML="";
    $("#signup-div").show();
});

$(document).ready(function(){
    
    $("[name='vis_psw']").click(function(){
        if ($("[name='vis_psw']").attr("class")=="glyphicon glyphicon-eye-open p-2")
        {   
            $("[name='psw']").attr("type","password");
            $("[name='vis_psw']").attr("class","glyphicon glyphicon-eye-close p-2");
            $("[name='vis_psw']").attr("title","Show Password");
        }
        else
        {
            $("[name='psw']").attr("type","text");
            $("[name='vis_psw']").attr("class","glyphicon glyphicon-eye-open p-2");
            $("[name='vis_psw']").attr("title","Hide Password");
        }
    });
});

$("#signup-div").submit(function(e) {
    e.preventDefault();
});

$("#login-div").submit(function(e) {
    e.preventDefault();
});


function validateForm(f_name) {
    var i;
    if (f_name=="s_form")
    {
        var uname = document.forms["s_form"]["uname"].value;
        var email = document.forms["s_form"]["new_email"].value;
        var psw = document.forms["s_form"]["new_password"].value;
        var only_spaces = uname.match(/[ \n\r\t\f]+/g).toString().length;
        var test1 = uname.match(/\W/g).toString()!=uname.match(/\s/g).toString();
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
        if (/\d/g.test(uname)==true || test1 || uname.length==only_spaces)
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