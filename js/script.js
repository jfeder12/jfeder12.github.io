$(function() {

    // Change class of errors and place them after element's parent
    $.validator.setDefaults({
        errorClass: 'text-danger',
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());
        }
    });

    // Custom email validation RegExp
    $.validator.methods.email = function(value, element){
        return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }

    // Validate form using jquery-validation library
    $("form[name='emailForm']").validate({
        rules: {
            name: {
                required: true,
                lettersonly: true
            },
            _replyto:{
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: {
                required: "Please enter your name",
                lettersonly: "Please enter only letters"
            },
            _replyto: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            message: "Please enter your message"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});

window.onscroll = function() {fadeTopBtn()};

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function fadeTopBtn(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 300)
        $("#topBtn").fadeIn();  
    else
        $("#topBtn").fadeOut();
}