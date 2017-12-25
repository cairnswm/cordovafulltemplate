// app is a singleton
var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
    // Phonegap is now ready...
    onDeviceReady: function() {
        console.log("device ready, start making you custom calls!");

        // Start adding your code here....        
        $("#registersubmit").bind("click", function () { SubmitRegistration(); });
        $("#forgotsubmit").bind("click", function () { SubmitForgot(); });
        $("#loginsubmit").bind("click", function () { SubmitLogin(); });
    }
};

// New rule to confirm password - only for registration page
jQuery.validator.addMethod("ConfirmPassword", function(value, element) {
    pwd = $("#registerpassword").val();
    return (value == pwd); // return true if field is ok or should be ignored
}, "The passwords dont match.");

function SubmitRegistration()
{
  $('#registerpage form').validate({
        rules: {
            registeruser: {
                required: true                
            },
            registerpassword: {
                required: true
            },
            registerconfirm: {
                required: true,
                ConfirmPassword: true
            },
            registeremail: {
                required: true,
                email: true
            }
        },
        messages: {
            registeruser: {
                required: "Please enter a username."
            },
            registeremail: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            registerpassword: {
                required: "Please enter a password."
            },
            registerconfirm: {
                required: "Please confirm your password.",
                depends: "Passwords dont match"
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent().prev());
        },
        submitHandler: function (form) {
            // do the send to server, on success move to 'home' page
            $.ajax({
              method: "POST",
              dataType: "json",
              url: "http://localhost:81/cordovafulltemplatephp/ajaxUser.php?action=register",
              data: { registeruser: $('#registeruser').val(), 
                      registerpassword: $('#registerpassword').val(),
                      registerconfirm: $('#registerconfirm').val(),
                      registeremail: $('#registeremail').val() }
            })
              .done(function( data ) {                
                if (data.status == "S")
                {
                    saveLoginToken(data.data.token);
                    $(':mobile-pagecontainer').pagecontainer('change', 'index2.html#mainpage', {
                        allowSamePageTransition: true });
                }
                if (data.status == "E")
                {
                  alert( data.message );
                }
              })
              .fail(function( data ) {
                alert( data.responseText );
              });            
            return false;
        }
    });
};

function SubmitForgot()
{
  $('#forgotpage form').validate({
        rules: {
            forgotuser: {
                required: true                
            }
        },
        messages: {
            forgotuser: {
                required: "A username or email addresss is required."
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent().prev());
        },
        submitHandler: function (form) {
            // do the send to server, on success move to 'home' page
                alert("success");
  
            $(':mobile-pagecontainer').pagecontainer('change', '#success', {
                reload: false
            });
            return false;
        }
    });
};

function SubmitLogin()
{
  $('#loginpage form').validate({
        rules: {
            loginuser: {
                required: true                
            },
            loginpassword: {
                required: true
            }
        },
        messages: {
            loginuser: {
                required: "A username is required."
            },
            loginpassword: {
                required: "Your password is required."
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent().prev());
        },
        submitHandler: function (form) {
            $.ajax({
              method: "POST",
              dataType: "json",
              url: "http://localhost:81/cordovafulltemplatephp/ajaxUser.php?action=login",
              data: { loginuser: $('#loginuser').val(), loginpassword: $('#loginpassword').val() }
            })
              .done(function( data ) {                
                if (data.status == "S")
                {
                    saveLoginToken(data.data.token);
                    $(':mobile-pagecontainer').pagecontainer('change', 'index2.html#mainpage', {
                        allowSamePageTransition: true });
                }
                if (data.status == "E")
                {
                  alert( data.message );
                }
              })
              .fail(function( data ) {
                alert( data.responseText );
              });            
            return false;
        }
    });
};

function LoadData()
{
  i = 0;
  $.ajax({
    method: "POST",
    dataType: "json",
    url: "http://localhost:81/cordovafulltemplatephp/ajaxData.php?action=list",
    data: { }
  })
  .done(function( data ) {                
    if (data.status == "S")
    {
        content = "";
        $('#listview').html("");
        $.each(data.data, function (key, item){
          content = content + '<div data-role="collapsible" id="item'+i+'" data-collapsed-icon="flat-time" data-expanded-icon="flat-cross" data-collapsed="false">'+
                   '  <h3>'+item.name+'</h3>'+
                   '  <p>'+item.detail+'</p>'+
                   '</div>';                    
        });
        i = i + 1;
        $('#listview').html(content).collapsibleset('refresh');
        $("#item0").collapsible( "option", "collapsed", false );
    }
    if (data.status == "E")
    {
      alert( data.message );
    }
  })
  .fail(function( data ) {
    alert( data.responseText );
  }); 
 
}
              