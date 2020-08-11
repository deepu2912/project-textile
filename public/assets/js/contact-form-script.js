/*==============================================================*/
// Raque Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    // $("#contactForm").validator().on("submit", function (event) {
    //     debugger;
    //     if (event.isDefaultPrevented()) {
    //         // handle the invalid form...
    //         formError();
    //         submitMSG(false, "Did you fill in the form properly?");
    //     } else {
    //         // everything looks good!
    //         event.preventDefault();
    //         submitForm();
    //     }
    // });

    $("#contactFormButton").click(function (event) {
        debugger;
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm() {
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();

        debugger;
        if (name.length == 0 && email.length == 0 && msg_subject.length == 0 && message.length == 0 && phone_number.length == 0) {
            alert('Please enter all details');
            $('#image-loader').fadeOut();

            return false;
        }

        var data = 'contactName=' + name + '&contactEmail=' + email +
            '&contactSubject=' + msg_subject + '&contactMessage=' + message + '&Phone Number=' + phone_number;

        Email.send({
            Host: "smtp.gmail.com",
            Username: "deepanshu2912@gmail.com",
            Password: "Priya@1996",
            To: 'ahujadeepu29@gmail.com',
            From: email,
            Subject: msg_subject,
            Body: data
        }).then(
            message => formSuccess()
        );


        Email.send({
            Host: "smtp.gmail.com",
            Username: "deepanshu2912@gmail.com",
            Password: "Priya@1996",
            To: email,
            From: 'deepanshu2912@gmail.com',
            Subject: 'Thanks for the enquiry',
            Body: 'Hi ' + name + ' , \n Thanks for your interest we will catch early.'
        })

        return false;


    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h4 tada animated text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict