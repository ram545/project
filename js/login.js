$(function() {
    $("#log").show().siblings().hide();
    
    $("#forgot").click(function(){
        $("#forgot_password").show().siblings().hide();
    });
    
    $("#log_ret").click(function(){
        $("#log").show().siblings().hide();
    });
});    
/*
$("#sign_up_form").validate({
    debug: false,
    errorClass: "authError",
    errorElement: "span",
    rules: {
      username: "required",
      phonenumber: "required",
      email: {
          required: true,
          email: true
      },
      password: {
          required: true,
          minlength: 6
      }
  },
  messages: {
      username: "User Name field cannot be blank!",
      phonenumber:"Phone number field cannot be blank!",
      password: {
      required: "Password field cannot be blank!",
      minlength: "Your password must be at least 6 characters long"
      },
      email: "Please enter a valid email address"
  },
  highlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
  },
  submitHandler: function(form){
    form.submit();
  }
  });
$("#log_in_form").validate({
    debug: false,
    errorClass: "authError",
    errorElement: "span", 
    rules: {
         username: required,
         password: {
             required:true,
             minlength: 6
         }
     }
     messages: {
         username: "Username field cannot be blank!", 
         password: {
            required: "Password field cannot be blank!",
            minlength: "Valid password is more than 6 characters"
         }
     }
     highlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
     },
     submitHandler: function(form){
       form.submit();
     }                         
  });
*/
