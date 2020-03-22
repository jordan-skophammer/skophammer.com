$(document).ready(function(){

    console.log('DOM Ready')

    function scrollToSection(id) {
        id = id.replace("link", "")

        $('html, body').animate({
            scrollTop: $('#'+id).offset().top},
            'slow')
    }

    $('.nav-wrapper > ul > li > a').click(function(event) {

        event.preventDefault()

        scrollToSection($(this).attr('id'))
    })

    $('.dropdown-trigger').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, 
        hover: false, 
        gutter: 0, 
        belowOrigin: false 
    });

    $('#submit').click((event) => {
        event.preventDefault()

        $.ajax({
            url:'https://hooks.zapier.com/hooks/catch/3782172/qc0vup/',
            type:'post',
            data:$('#contact-form').serialize(),
            success:() => {
                $('#success_message').toggle(function(){$(this).toggle(6000)})
                $('.validate').val('').removeClass('valid')
                $('input[data-recaptcha]').val('').trigger('change')
                grecaptcha.reset()
                $('#submit').prop('disabled', 'disabled')
            }
        });        
    });

    $(function() {
        $('.validate').keyup(function() {
            $('.validate').each(function() {
                if(!$(this).hasClass('valid')){
                    $('#submit').prop('disabled', 'disabled')
                }else {
                    $('#submit').prop('disabled', false)                    
                }
            })
        })
        
       window.verifyRecaptchaCallback = function (response) {
            $('input[data-recaptcha]').val(response).trigger('change')

            if($('.callback-response').val() == '') {               
               $('#submit').prop('disabled', 'disabled')
            }else{
                $('#submit').prop('disabled', false)
            }
        }
    
        window.expiredRecaptchaCallback = function () {
            $('input[data-recaptcha]').val("").trigger('change')
            $('#submit').prop('disabled', 'disabled')
        }
    })
})