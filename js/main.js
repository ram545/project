$("document").ready(function(){
    
    $("#container_main").show().siblings().hide();
    $("#home").addClass("active");
    $("#search").click(function(){
         $("#search_content").show().siblings().hide();
         $('a').removeClass("active");
         $(this).addClass("active");
    });
    
    $("#return").click(function(){
         $("#return_content").show().siblings().hide();
         $('a').removeClass("active");
         $(this).addClass("active");
     });
    
    $("#renew").click(function(){
         $("#renew_content").show().siblings().hide();
         $('a').removeClass("active");
         $(this).addClass("active");
     });
    
    $("#home").click(function(){
         $("#container_main").show().siblings().hide();
         $('a').removeClass("active");
         $(this).addClass("active");
     });
    
    $("#password").click(function(){
         $("#change_password").show().siblings().hide();
         $('a').removeClass("active");
     });
    
    
    $("#feedback").click(function(){
         $("#feedback_form").show().siblings().hide();
         $('a').removeClass("active");
     });
    
    $("#profile").click(function(){
         $("#my_profile").show().siblings().hide();
         $('a').removeClass("active");
     });
});