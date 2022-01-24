$("#lselect").click(function(){
    $("#signup-div").hide();
    $("#login-div").show();
});

$("#sselect").click(function(){
    $("#login-div").hide();
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
