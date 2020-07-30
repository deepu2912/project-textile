
//jquery added by suraj for update preferred language
$(".editlanguage").click(function () {
    $(this).hide();
    $("#prefredlanguage").hide();
    $("#languageselect").show();
    $(".savelanguage").show();
    $(".cancellanguage").show();

})


$(".savelanguage").click(function (e) {
    e.stopImmediatePropagation();
    $(".editlanguage").show();
    $(".cancellanguage").hide()
    $("#languageselect").hide();
    var SelectLanguage = $("#languageselect").val();
    if (SelectLanguage == "अंग्रेज़ी") {
        SelectLanguage = "English";
    }
    else if (SelectLanguage == "हिन्दी") {
        SelectLanguage = "Hindi";
    }
    else if (SelectLanguage == "Hindi") {
        SelectLanguage = "Hindi";
    }
    else {
        SelectLanguage = "English";
    }

    var User_ID = $('#User_ID').val();
    if (SelectLanguage.length == "") {
        showpopup('Please select  preferred language');
    }
    else {
        $.ajax({
            type: 'POST',
            url: '../../Patient/profile.aspx/updatepreferredlanguage',
            data: '{ "SelectLanguage" : "' + SelectLanguage + '","User_ID":"' + User_ID + '"}',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                if (data != "") {
                    $(".savelanguage").hide();
                    location.reload();
                }

            },
        });
    }


})



$(".cancellanguage").click(function () {
    $(this).hide();
    $("#prefredlanguage").show();
    $("#languageselect").hide();
    $(".editlanguage").show();
    $(".savelanguage").hide();

})




$('.datepicker, #Reschedule_Date').datepicker({
    autoclose: true,
    dateFormat: 'DD, dd MM yyyy'
});

$('.timepicker, #Reschedule_Time ').timepicker({

    showInputs: false,
    fontAwesome: 'font-awesome'
});


$('#CovidTime').timepicker({
    showInputs: false,
    fontAwesome: 'font-awesome'
});
$(document).ready(function () {


    $('#ResendSendOtp').hide();
    $('#btnSubmitChangeMobileNumber').hide();
    $("#SugarDate").datepicker({ dateFormat: "dd-MM-yyyy" }).datepicker("setDate", new Date());
    $("#Alarm_Date ,#Select_DOB, #BPDate, #OtherDate, #Attachment_Date, .datepicker, #Reschedule_Date ,#CovidDate").datepicker({ dateFormat: "dd-MM-yyyy" }).datepicker("setDate", new Date());

    var Patient_ID = $('#PatientID').val();
    var User_ID = $('#User_ID').val();
    //var flipAPI = "http://localhost:14537/api/patient/GetUserDetails1?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserDetails?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    
 
        $.ajax(flipAPI, 
        {
            dataType: 'json', // type of response data
            timeout: 500,     // timeout milliseconds
            success: function (data,status,xhr) {   // success callback function
           
                if (data != "") {
                    // var get_data = data[0];
                    get_data =  Object.values(data[0]);
                    $('#Patient_ID').val(get_data[0]);
                    $('#AgeCount').text(get_data[7]);
                    $('#Gender').text(get_data[2]);
                    if (get_data[9] != '0') {
                        $('#Height').text(data[0].Height);
                    }
                    $('#Relation_ID').val(get_data[18])
                    $('#UserName').text(get_data[1]);
                    $('#Patient_name').text(get_data[1]);
                    $('#UserMobile').text(get_data[5]);
                    $('#Appointment_date').text(get_data[11]);
                    $('#Clinic_name').text(get_data[10]);
                    $('#Appointment_date1').text(get_data[11]);
                    $('#Clinic_name1').text(get_data[10]);
                    $('#title').text(get_data[12]);
                    $('#name').text(get_data[1]);
                    if (get_data[3] == "N") {
                        $('#MartialStatus').text("Single");
                    }
                    else {
                        $('#MartialStatus').text("Married");
                    }
                    if (get_data[2] == "M") {
                        $('#gender').text("Male");
                    }
                    else {
                        $('#gender').text("Female");
                    }
                    $('#DOB').text(get_data[13]);
                    $('#Mobile').text(get_data[5]);
                    $('#AlterMobile').text(get_data[6]);
                    $('#Email').text(get_data[4]);
                    $('#Address').html(get_data[15]);
                    $('#City').text(get_data[16]);
                    if (get_data[17] != '' || get_data[17] != null) {
                        var profilePic = '/Patient_Images/' + get_data[17];
                        $('#photo').attr('src', profilePic);
                        $('#profilePic').attr('src', profilePic);
                    }
                    else {
                        $('#photo').attr('src', '../Subscription_master/images/doc-default.png');
                        $('#profilePic').attr('src', '../Subscription_master/images/doc-default.png');
                    }
                    if (get_data[18] == "0" || get_data[18] == "-1") {
                        $('#SHowSpan').hide();
                    }
                    else {
                        $('#MoreAppointments').text(get_data[18]);
                    }
                    $('#SHowSpan').attr('patient_id', get_data[0]);
                    fnGetUserAllergyDetails(Patient_ID, User_ID);
                }
                else {
                    showpopup('system under maintainence! Please try after sometime.')
                    window.location.href = "../../";
                }
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback 
                alert('Error: ' + errorMessage);
            }
        });
    
    
    
    // $.ajax({
    //     url: flipAPI, 
    //     type: "GET",
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json", 
    //     data: "{}",
    //     success: function (data) {
    //         if (data != "") {
    //             var get_data = data.split(',');
    //             $('#Patient_ID').val(get_data[0]);
    //             $('#AgeCount').text(get_data[7]);
    //             $('#Gender').text(get_data[2]);
    //             if (get_data[9] != '0') {
    //                 $('#Height').text(data[0].Height);
    //             }
    //             $('#Relation_ID').val(get_data[18])
    //             $('#UserName').text(get_data[1]);
    //             $('#Patient_name').text(get_data[1]);
    //             $('#UserMobile').text(get_data[5]);
    //             $('#Appointment_date').text(get_data[11]);
    //             $('#Clinic_name').text(get_data[10]);
    //             $('#Appointment_date1').text(get_data[11]);
    //             $('#Clinic_name1').text(get_data[10]);
    //             $('#title').text(get_data[12]);
    //             $('#name').text(get_data[1]);
    //             if (get_data[3] == "N") {
    //                 $('#MartialStatus').text("Single");
    //             }
    //             else {
    //                 $('#MartialStatus').text("Married");
    //             }
    //             if (get_data[2] == "M") {
    //                 $('#gender').text("Male");
    //             }
    //             else {
    //                 $('#gender').text("Female");
    //             }
    //             $('#DOB').text(get_data[13]);
    //             $('#Mobile').text(get_data[5]);
    //             $('#AlterMobile').text(get_data[6]);
    //             $('#Email').text(get_data[4]);
    //             $('#Address').html(get_data[15]);
    //             $('#City').text(get_data[16]);
    //             if (get_data[17] != '' || get_data[17] != null) {
    //                 var profilePic = '/Patient_Images/' + get_data[17];
    //                 $('#photo').attr('src', profilePic);
    //                 $('#profilePic').attr('src', profilePic);
    //             }
    //             else {
    //                 $('#photo').attr('src', '../Subscription_master/images/doc-default.png');
    //                 $('#profilePic').attr('src', '../Subscription_master/images/doc-default.png');
    //             }
    //             if (get_data[18] == "0" || get_data[18] == "-1") {
    //                 $('#SHowSpan').hide();
    //             }
    //             else {
    //                 $('#MoreAppointments').text(get_data[18]);
    //             }
    //             $('#SHowSpan').attr('patient_id', get_data[0]);
    //             fnGetUserAllergyDetails(Patient_ID, User_ID);
    //         }
    //         else {
    //             showpopup('system under maintainence! Please try after sometime.')
    //             window.location.href = "../../";
    //         }
    //     }
    // })
    var ImageUrl = '';
    var Url = '';
    $('#imageUpload').on('change', function () {
        $image_crop = $('#image_demo').croppie({
            enableExif: true,
            viewport: {
                width: 200,
                height: 200,
                type: 'square' //circle
            },
            boundary: {
                width: 300,
                height: 300
            }
        });
        var reader = new FileReader();
        reader.onload = function (event) {
            $image_crop.croppie('bind', {
                url: event.target.result
            }).then(function () {
                console.log('jQuery bind complete');
            });
        }
        reader.readAsDataURL(this.files[0]);
        $('#uploadimageModal').modal('show');
    });
    ImageUrl = Url;
    $('.crop_image').click(function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        Image = $("#imageUpload").val();
        var Image1 = $('#imageUpload')[0].files[0];
        var NameImage = Image1.name;
        $('#image_name').val(Image1.name);
        $image_crop.croppie('result', {
            type: 'canvas',
            size: 'viewport'
        }).then(function (response) {
            $('#uploadimageModal').modal('hide');
            Url = response;
            $('#imageUpload').attr('src', Url);
            $('#photo').attr('src', Url);
            $('#imageUpload').attr('imgsrc', Url);
            var Patient_ID = $('#Patient_ID').val();
            if ($('#imageUpload').val() == "") {
                showpopup('Please select image');
            }
            else {
                $.ajax({
                    type: 'POST',
                    url: '../../Patient/profile.aspx/UploadUserProfilePic',
                    data: '{ "imageData" : "' + Url.replace(/^data:image\/(png|jpg|jpeg);base64,/, "") + '","fileUploadDocument":"' + NameImage
                        + '","Patient_ID":"' + Patient_ID + '"}',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {
                        if (msg.d == 1) {
                            showpopup('Your profile pic has been changed successfully');
                            window.location.href = window.location.href;
                        }
                        else {
                            showpopup('Please try again!');
                        }
                    },
                });
            }
        })
    });
    $("#SaveImg").click(function (e) {
        e.preventDefault();
        $('#imagename').val($('#imageUpload').val());
        $('#Doctor_Image').attr('src', Url);
    });
})
function fnGetUserAllergyDetails(Patient_ID, User_ID) {
    //var flipAPI1 = "http://localhost:14537/api/patient/GetUserAllergyDetails?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI1 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserAllergyDetails?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI1,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#Alergies').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable + '<span>' + data[i].AllergyName + '</span><i allergy_name ="' + data[i].AllergyName + '" class="fa fa-trash DeleteUserAllergy mt-1" Serial_No=' + data[i].Serial_No + ' aria-hidden="true" style="float: right; padding-right: 50px; cursor: pointer;"></i><br />';
                }
                $('#Alergies').append(datatable);
                $('.DeleteUserAllergy').click(function (e) {
                    e.stopImmediatePropagation();
                    var Serial_No = $(this).attr('serial_no');
                    var Allergy_Name = $(this).attr('allergy_name');
                    var checkstr = confirm('are you sure you want to remove ' + Allergy_Name + ' from your list?');
                    if (checkstr == true) {
                        //var flipAPI2 = "http://localhost:14537/api/patient/DeleteUserAllergyRecords?Serial_No=" + Serial_No;
                        var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUserAllergyRecords?Serial_No=" + Serial_No;
                        $.ajax({
                            url: flipAPI2,
                            type: "GET",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: "{}",
                            success: function (data) {
                                if (data != "") {
                                    showpopup('Allergy removed successfully');
                                    window.location.href = window.location.href;
                                }
                            }
                        })
                    }
                    else {
                        return false;
                    }
                })
            }
            fnGetUserMedicalHistoryDetails(Patient_ID, User_ID);
        }
    })
}
function fnGetUserMedicalHistoryDetails(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserMedicalHistoryDetails?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserMedicalHistoryDetails?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#Medical_History').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable + '<span>' + data[i].Medical_History_name + '</span><i medical_name ="' + data[i].Medical_History_name + '" class="fa fa-trash DeleteUserMedicalHistory mt-1" Serial_No=' + data[i].Serial_No + ' aria-hidden="true" style="float: right; padding-right: 50px; cursor: pointer;"></i><br />';
                }
                $('#Medical_History').append(datatable);

                $('.DeleteUserMedicalHistory').click(function (e) {
                    e.stopImmediatePropagation();
                    var Serial_No = $(this).attr('serial_no');
                    var Medical_Name = $(this).attr('medical_name');

                    var checkstr = confirm('are you sure you want to remove ' + Medical_Name + ' from your list?');
                    if (checkstr == true) {
                        var flipAPI2 = "https://localhost:14537/api/patient/DeleteUserMedicalRecords?Serial_No=" + Serial_No;
                        $.ajax({
                            url: flipAPI2,
                            type: "GET",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: "{}",
                            success: function (data) {
                                if (data != "") {
                                    showpopup('Medical history removed successfully');
                                    window.location.href = window.location.href;
                                }
                            }
                        })
                    }
                    else {
                        return false;
                    }
                })
            }
            fnGetUserpreviousPrescriptions(Patient_ID, User_ID);
        }
    })
}
function fnGetUserpreviousPrescriptions(Patient_ID, User_ID) {
    //var flipAPI3 = "http://localhost:14537/api/patient/GetUserpreviousPrescriptions?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI3 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserpreviousPrescriptions?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI3,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#Previous_Prescriptions').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable + '<div appointment_id =' + data[i].AppointmentID + '  class="card m-1 zoom ViewPrescription" id="Prescription_' + i + '" prescription_id = ' + data[i].PrescriptionID + ' title="click to view prescription" style="box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2); border: 1px solid grey;">' +
                        '<span style="margin-left: 20px;">' + data[i].AppointmentDate + ' ' + data[i].Dr_Name + ' at ' + data[i].Clinic_name + '</span></div>';
                }
                $('#Previous_Prescriptions').append(datatable);
                var i = 0;
                $('.ViewPrescription').each(function (e) {
                    $('.viewmore').hide();
                    if (i < 5) {
                        $("#Prescription_" + i).show();
                    } else {
                        $("#Prescription_" + i).hide();
                        $('.viewmore').show();
                    }
                    i++;
                })
                $('.viewmore').click(function (e) {
                    if ($(this).find('a').text() == '+view more') {
                        $('.ViewPrescription').show();
                        $(this).html('<span style="width: 96%;"><a href="Javascript:void(0)">-view less</a></span>');
                    }
                    else {
                        $('.ViewPrescription').each(function (e) {
                            if (i < 5) {
                                $("#Prescription_" + i).show();
                            } else {
                                $("#Prescription_" + i).hide();
                            }
                            i++;
                        })
                        $(this).html('<span style="width: 96%;"><a href="Javascript:void(0)">+view more</a></span>');
                    }
                })
                function convertdate(str) {
                    var month, day, year, hours, minutes, seconds;
                    var date = new Date(str),
                        month = ("0" + (date.getMonth() + 1)).slice(-2),
                        day = ("0" + date.getDate()).slice(-2);
                    hours = ("0" + date.getHours()).slice(-2);
                    minutes = ("0" + date.getMinutes()).slice(-2);
                    seconds = ("0" + date.getSeconds()).slice(-2);
                    var mySQLDate = [date.getFullYear(), month, day].join("-");
                    return mySQLDate;
                }
                $('.ViewPrescription').click(function (e) {
                    var newdate = new Date();
                    convertdate(newdate)
                    var prescriptionID = $(this).attr('prescription_id'), pDate = '1900-01-01', appID = $(this).attr('appointment_id');
                    var URL = '';
                    var diagnosis = '&diagnosis=2';
                    URL = '../prescription_report.aspx?PID=' + prescriptionID + '&pDate=' + pDate + '&appID=' + appID + '&Type=1' + diagnosis;
                    window.open(' ' + URL, 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,_blank', 'width=800,height=800,location=no,left=200px');
                })
            }
            fnGetUserpreviousSugarRecords(Patient_ID, User_ID);
        }
    })
}
function fnGetUserpreviousSugarRecords(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserpreviousSugarRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserpreviousSugarRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#SugarHistroy').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable +
                        '<div class=" card zoom m-1" style="border: 1px solid grey; box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2);">' +
                        '<div class="" style="width: 100%; display: -webkit-box; margin-left: 10px; height: 25px;">' +
                        '<div style="width: 25%"><a style="font-size: 12px; font-family: calibri;">' + data[i].TEST_DATE + '</a></div>' +
                        '<div style="width: 15%"><a style="font-size: 12px; font-family: calibri;">' + data[i].FASTING + '</a></div>' +
                        '<div style="width: 20%; text-align: center;"><a style="font-size: 12px; font-family: calibri;">' + data[i].PP + '</a></div>' +
                        '<div style="width: 25%"><a style="font-size: 12px; font-family: calibri;">' + data[i].RANDOM + '</a></div>' +
                        '<div style="width: 5%" pt_id=' + data[i].PT_ID + ' class="mt-1 DeleteSugarRecord" title="click to delete this record">' +
                        '<i class="fa fa-trash " aria-hidden="true" style="float: left; padding-right: 20px; cursor: pointer;"></i></div></div></div>';
                }
                $('#SugarHistroy').append(datatable);
                $('.DeleteSugarRecord').click(function (e) {
                    e.stopImmediatePropagation();

                    var current = $(this);
                    var pt_id = $(this).attr('pt_id');
                    var Patient_ID = $('#Patient_ID').val();
                    //var flipAPI = "http://localhost:14537/api/patient/DeleteUsersTestData?Patient_ID=" +
                    //Patient_ID + "&PT_ID=" + pt_id;
                    var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUsersTestData?Patient_ID=" +
                        Patient_ID + "&PT_ID=" + pt_id;
                    $.ajax({
                        url: flipAPI,
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        data: "{}",
                        success: function (data) {
                            if (data != '') {
                                showpopup('Removed successfully');
                                window.location.href = window.location.href;
                            }
                            else {
                                showpopup('Please try again');
                            }
                        }
                    })
                })
            }
            fnGetUserpreviousBPRecords(Patient_ID, User_ID);
        }
    })
}
function fnGetUserpreviousBPRecords(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserpreviousBPRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserpreviousBPRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#BPHistroy').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable +
                        '<div class=" card zoom m-1" style="border: 1px solid grey; box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2);">' +
                        '<div class="" style="width: 100%; display: -webkit-box; margin-left: 10px; height: 25px;">' +
                        '<div style="width: 25%"><a style="font-size: 12px; font-family: calibri;">' + data[i].TEST_DATE + '</a></div>' +
                        '<div style="width: 15%"><a style="font-size: 12px; font-family: calibri;">' + data[i].SYSTOLIC_UPPER + '</a></div>' +
                        '<div style="width: 20%; text-align: center;"><a style="font-size: 12px; font-family: calibri;">' + data[i].DIASTOLIC_LOWER + '</a></div>' +
                        '<div style="width: 25%"><a style="font-size: 12px; font-family: calibri;">' + data[i].PULSE + '</a></div>' +
                        '<div style="width: 5%" pt_id=' + data[i].PT_ID + ' class="mt-1 DeleteBPRecord" title="click to delete this record">' +
                        '<i class="fa fa-trash " aria-hidden="true" style="float: left; padding-right: 20px; cursor: pointer;"></i></div></div></div>';
                }
                $('#BPHistroy').append(datatable);
                $('.DeleteBPRecord').click(function (e) {
                    e.stopImmediatePropagation();

                    var current = $(this);
                    var pt_id = $(this).attr('pt_id');
                    var Patient_ID = $('#Patient_ID').val();
                    //var flipAPI = "http://localhost:14537/api/patient/DeleteUsersTestData?Patient_ID=" + Patient_ID + "&PT_ID=" + pt_id;
                    var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUsersTestData?Patient_ID=" + Patient_ID + "&PT_ID=" + pt_id;
                    $.ajax({
                        url: flipAPI,
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        data: "{}",
                        success: function (data) {
                            if (data != '') {
                                showpopup('Removed successfully');
                                window.location.href = window.location.href;
                            }
                            else {
                                showpopup('Please try again');
                            }
                        }
                    })
                })
            }
            fnGetUserpreviousHeightWeightRecords(Patient_ID, User_ID);
            fnGetUserpreviousCovidRecords(Patient_ID, User_ID)
        }
    })
}

function fnGetUserpreviousCovidRecords(Patient_ID, User_ID) {
    // var flipAPI2 = "http://localhost:14537/api/patient/GetUserpreviousFluRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserpreviousFluRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#FeverHistroy').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable +
                        '<div class=" card zoom m-1" style="border: 1px solid grey; box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2);">' +
                        '<div class="" style="width: 100%; display: -webkit-box; margin-left: 10px; height: 25px;">' +
                        '<div style="width: 20%"><a style="font-size: 12px; font-family: calibri;">' + data[i].TEST_DATE + '</a></div>' +
                        '<div style="width: 15%"><a style="font-size: 12px; font-family: calibri;">' + data[i].Test_Time + '</a></div>' +
                        '<div style="width: 27%"><a style="font-size: 12px; font-family: calibri;">' + data[i].FEVER + '</a></div>' +
                        '<div style="width: 25%; text-align: center;"><a style="font-size: 12px; font-family: calibri;">' + data[i].OXYGEN_LEVEL + '</a></div>' +
                        '<div style="width: 5%" pt_id=' + data[i].PT_ID + ' class="mt-1 deleteCovidRecords" title="click to delete this record">' +
                        '<i class="fa fa-trash " aria-hidden="true" style="float: left; padding-right: 20px; cursor: pointer;"></i></div></div></div>';
                }
                $('#FeverHistroy').append(datatable);
                $('.deleteCovidRecords').click(function (e) {
                    e.stopImmediatePropagation();

                    var current = $(this);
                    var pt_id = $(this).attr('pt_id');
                    var Patient_ID = $('#Patient_ID').val();
                    // var flipAPI = "http://localhost:14537/api/patient/DeleteUsersTestData?Patient_ID=" + Patient_ID + "&PT_ID=" + pt_id;
                    var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUsersTestData?Patient_ID=" + Patient_ID + "&PT_ID=" + pt_id;
                    $.ajax({
                        url: flipAPI,
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        data: "{}",
                        success: function (data) {
                            if (data != '') {
                                showpopup('Removed successfully');
                                window.location.href = window.location.href;
                            }
                            else {
                                showpopup('Please try again');
                            }
                        }
                    })
                })
            }

        }
    })
}


function fnGetUserpreviousHeightWeightRecords(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserpreviousHeightWeightRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserpreviousHeightWeightRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#HeightWeightHistroy').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable +
                        '<div class=" card zoom m-1" style="border: 1px solid grey; box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2);">' +
                        '<div class="" style="width: 100%; display: -webkit-box; margin-left: 10px; height: 25px;">' +
                        '<div style="width: 25%"><a style="font-size: 12px; font-family: calibri;">' + data[i].TEST_DATE + '</a></div>' +
                        '<div style="width: 27%"><a style="font-size: 12px; font-family: calibri;">' + data[i].Height + 'cm' + '</a></div>' +
                        '<div style="width: 33%; text-align: center;"><a style="font-size: 12px; font-family: calibri;">' + data[i].PATIENT_WEIGHT + ' kg' + '</a></div>' +
                        '<div style="width: 5%" pt_id=' + data[i].PT_ID + ' class="mt-1 deleteHeightWeightRecord" title="click to delete this record">' +
                        '<i class="fa fa-trash " aria-hidden="true" style="float: left; padding-right: 20px; cursor: pointer;"></i></div></div></div>';
                }
                $('#HeightWeightHistroy').append(datatable);
                $('.deleteHeightWeightRecord').click(function (e) {
                    e.stopImmediatePropagation();

                    var current = $(this);
                    var pt_id = $(this).attr('pt_id');
                    var Patient_ID = $('#Patient_ID').val();
                    //var flipAPI = "http://localhost:14537/api/patient/DeleteUsersTestData?Patient_ID=" + Patient_ID + "&PT_ID=" + pt_id;
                    var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUsersTestData?Patient_ID=" + Patient_ID + "&PT_ID=" + pt_id;
                    $.ajax({
                        url: flipAPI,
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        data: "{}",
                        success: function (data) {
                            if (data != '') {
                                showpopup('Removed successfully');
                                window.location.href = window.location.href;
                            }
                            else {
                                showpopup('Please try again');
                            }
                        }
                    })
                })
            }
            fnGetUserEmergencyContactRecords(Patient_ID, User_ID);
        }
    })
}
function fnGetUserEmergencyContactRecords(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserEmergencyContactRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserEmergencyContactRecords?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#EmerName').html(data[0].EmerContactName);
                $('#EmerContact').html(data[0].EmerContNo);
                $('#Relation_with_patient').html(data[0].RelationName);
                $('#EmerAddress').html(data[0].Address);
                $('.edit_emergency').attr('patient_id', data[0].PaitentID);
            }
            fnGetUserRelationRecords(Patient_ID, User_ID);
        }
    })
}
function fnGetUserRelationRecords(Patient_ID, User_ID) {

    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserRelationRecords?User_ID=" + User_ID + "&Patient_ID=" + Patient_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserRelationRecords?User_ID=" + User_ID + "&Patient_ID=" + Patient_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#FamilyFriendsHistory').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable + '<div class="col-sm-6 col-12 mt-2 mb-2 card zoom familyNfriends" style="border: 1px solid grey; box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2);" patient_id=' + data[i].PaitentID + '><div class="row"><div class="col-sm-4 col-4 mt-1">' +
                        '<img src="../../style/images_all/cropimages/no-image.jpg" alt="" style="width: 60px;">' +
                        '</div><div class="col-sm-8 col-8 mt-2"><span>' + data[i].PaitentName + '</span><br /><span>' + data[i].Mobile_No + '</span><br /><span>' + data[i].RelationName + '</span>' +
                        '</div></div></div>';
                }
                $('#FamilyFriendsHistory').append(datatable);
                $('.familyNfriends').click(function (e) {
                    var Patient_ID = $(this).attr('patient_id')
                    window.location.href = '../Patient/Patient_Relative_Login.aspx?q=' + Patient_ID;
                })
            }
            fnGetUserAlarmsReminders(Patient_ID, User_ID);
        }
    })
}
function fnGetUserAlarmsReminders(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserAlarmsReminders?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserAlarmsReminders?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#AlarmRemindersHistory').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    var flag = data[i].FLAG;
                    var checkB = '';
                    if (flag == '1') {
                        checkB = 'checked';
                    }
                    datatable = datatable +
                        '<div class="card zoom m-1" appointment_id=' + data[i].AppointmentID + ' style="border: 1px solid grey; box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2);">' +
                        '<div class="" style="display: -webkit-box; margin-left: 10px; height: auto;">' +
                        //'<div style="width: 9%"><a style="font-size: 14px; font-family: calibri;">' + data[i].Day_Name + ' </a></div>' +
                        //'<div style="width: 15%"><a style="font-size: 14px; font-family: calibri;">' + data[i].AppointmentDate + '</a></div>' +
                        //'<div style="width: 18%; text-align: center;"><a style="font-size: 14px; font-family: calibri;">' + data[i].AppointmentTime + '</a></div>' +
                        //'<div style="width: 19%"><a style="font-size: 14px; font-family: calibri;">' + data[i].Dr_Name + '</a></div>' +
                        //'<div style="width: 23%"><a style="font-size: 14px; font-family: calibri;"  >' + data[i].Clinic_name + '</a></div>' +
                        '<div style="width: 88%"><a style="font-size: 14px; font-family: calibri;">' + data[i].Day_Name + ' </a> | <a style="font-size: 14px; font-family: calibri;">' + data[i].AppointmentDate + '</a> | ' +
                        '<a style="font-size: 14px; font-family: calibri;">' + data[i].AppointmentTime + ' </a> with <a style="font-size: 14px; font-family: calibri;">' + data[i].Dr_Name + '</a> at ' +
                        '<a style="font-size: 14px; font-family: calibri;">' + data[i].Clinic_name + ' </a></div>' +
                        '<div style="width: 7%"  class="mt-1 "   title="click to delete this record">' +




                        '<i class="fa fa-trash UserRemindersRecord" pa_id =' + data[i].PA_ID + ' aria-hidden="true" appointment_id=' + data[i].AppointmentID + ' style="float: left; padding-right: 20px; cursor: pointer;"></i></div>' +
                        '<div style="width: 4%" pa_id =' + data[i].PA_ID + ' class="cboxtoRemindeRecord" appointment_id=' + data[i].AppointmentID + '  title="click to delete this record">' +
                        '<input type="checkbox" ' + checkB + ' class="form-control cbox" title="click to notify yourself" style="margin-top:-3px;cursor:pointer;" /></div></div></div>';
                }
                $('#AlarmRemindersHistory').append(datatable);
                $('.UserRemindersRecord').click(function (e) {
                    e.stopImmediatePropagation();
                    var Patient_ID = $('#Patient_ID').val();
                    var Pa_ID = $(this).attr('pa_id')
                    var Appointment_ID = $(this).attr('appointment_id')
                    var checkstr = confirm('are you sure you want to delete this?');
                    if (checkstr == true) {
                        //var flipAPI3 = "http://localhost:14537/api/patient/DeleteReminderforUser?Patient_ID=" + Patient_ID + "&Appointment_ID=" +
                        //Appointment_ID + "&Pa_ID=" + Pa_ID;
                        var flipAPI3 = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteReminderforUser?Patient_ID=" + Patient_ID + "&Appointment_ID=" +
                            Appointment_ID + "&Pa_ID=" + Pa_ID;
                        $.ajax({
                            url: flipAPI3,
                            type: "GET",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: "{}",
                            success: function (data) {
                                if (data != "") {
                                    showpopup('Alarm removed successfully');
                                    window.location.href = window.location.href;
                                }
                                else {
                                    showpopup('Please try again');
                                }
                            }
                        })
                    } else {
                        return false;
                    }
                })
                $('.cboxtoRemindeRecord').click(function (e) {
                    e.stopImmediatePropagation();
                    var Flag = '';
                    if ($(this).children().is(':checked')) {
                        Flag = '1';
                    }
                    else {
                        Flag = '0';
                    }
                    var Patient_ID = $('#Patient_ID').val();
                    var Pa_ID = $(this).attr('pa_id')
                    var Appointment_ID = $(this).attr('appointment_id')
                    //var flipAPI3 = "http://localhost:14537/api/patient/UpdateReminderStatusFlag?Patient_ID=" + Patient_ID + "&Appointment_ID=" +
                    //    Appointment_ID + "&Pa_ID=" + Pa_ID + "&Flag=" + Flag;
                    var flipAPI3 = "https://drplusapp.iglobalsolutions.org/api/patient/UpdateReminderStatusFlag?Patient_ID=" + Patient_ID + "&Appointment_ID=" +
                        Appointment_ID + "&Pa_ID=" + Pa_ID + "&Flag=" + Flag;
                    $.ajax({
                        url: flipAPI3,
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        data: "{}",
                        success: function (data) {
                            if (data != "") {
                                if (Flag == '1') {
                                    showpopup('Reminder enabled successfully');
                                }
                                else {
                                    showpopup('Reminder disabled successfully');
                                }
                            }
                            else {
                                showpopup('Please try again');
                            }
                        }
                    })
                })
            }
            fnGetUserMedicineHistory(Patient_ID, User_ID);
        }
    })
}
function fnGetUserMedicineHistory(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserMedicineHistory?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserMedicineHistory?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#Current_MedicinesHistory').empty();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {
                    datatable = datatable +
                        '<div class=" card zoom m-1" medicine_id=' + data[i].MED_ID + ' style="border: 1px solid grey; box-shadow: -4px 4px 4px 1px rgba(0,0,0,0.2);">' +
                        '<div class="" style="display: -webkit-box; margin-left: 10px; height: auto;">' +
                        '<div style="width: 30%"><a style="font-size: 14px; font-family: calibri;">' + data[i].Medicine + ' </a></div>' +
                        '<div style="width: 18%"><a style="font-size: 14px; font-family: calibri;">' + data[i].DOSAGE + '</a></div>' +
                        '<div style="width: 22%;"><a style="font-size: 14px; font-family: calibri;">' + data[i].DURATION + '</a></div>' +
                        '<div style="width: 21%;"><a style="font-size: 14px; font-family: calibri;">' + data[i].Day_Name + '</a></div>' +
                        '<div style="width: 5%" class="mt-1 deleteUserMedicineRecord" medicine_id=' + data[i].MED_ID + '  title="click to delete this record">' +
                        '<i class="fa fa-trash " aria-hidden="true" style="float: left; padding-right: 20px; cursor: pointer;"></i>' +
                        '</div></div></div>';
                }
                $('#Current_MedicinesHistory').append(datatable);
                $('.deleteUserMedicineRecord').click(function (e) {
                    e.stopImmediatePropagation();
                    var Patient_ID = $('#Patient_ID').val();
                    var Med_ID = $(this).attr('medicine_id');
                    var checkstr = confirm('are you sure you want to delete this?');
                    if (checkstr == true) {
                        //var flipAPI3 = "http://localhost:14537/api/patient/DeleteUserMedicine?Patient_ID=" + Patient_ID + "&Med_ID=" + Med_ID;
                        var flipAPI3 = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUserMedicine?Patient_ID=" + Patient_ID + "&Med_ID=" + Med_ID;
                        $.ajax({
                            url: flipAPI3,
                            type: "GET",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: "{}",
                            success: function (data) {
                                if (data != "") {
                                    showpopup('Medicine removed successfully');
                                    window.location.href = window.location.href;
                                }
                                else {
                                    showpopup('Please try again');
                                }
                            }
                        })
                    } else {
                        return false;
                    }
                })
            }
            fnGetUserTestReportHistory(Patient_ID, User_ID);
        }
    })
}
function fnGetUserTestReportHistory(Patient_ID, User_ID) {
    //var flipAPI2 = "http://localhost:14537/api/patient/GetUserTestReportHistory?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    var flipAPI2 = "https://drplusapp.iglobalsolutions.org/api/patient/GetUserTestReportHistory?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI2,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {
                $('#attachmentlists').empty();
                for (var i = 0; i < data.length; i++) {
                    var title = '';
                    if (data[i].Title == '' || data[i].Title == null) {
                        title = '';
                    }
                    else {
                        title = data[i].Title;
                    }
                    var date = '';
                    if (data[i].dateAppointment == '' || data[i].dateAppointment == null) {
                        date = '';
                    }
                    else {

                        var date1 = data[i].dateAppointment;
                        var spl = date1.split(' ');
                        var splt = spl[0].split('/');
                        date = splt[1] + '-' + splt[0] + '-' + splt[2];

                    }
                    var Description = '';
                    if (data[i].Description == '' || data[i].Description == null) {
                        Description = '';
                    }
                    else {
                        Description = data[i].Description;
                    }
                    var img = '<div class=" card zoom m-1" style="border: 1px solid gray;"><div class="row mt-2"><div class="col-sm-5 col-4" style=""><a href="Javascript:void(0)" class="openimg" path="/' + data[i].Attachment_Path_Name + '" /" ><img style="border: grey solid;width:68%;height: 68px;padding: 3px;" src="/' + data[i].Attachment_Path_Name + '" /></a></div>' +
                        '<div class="col-sm-6 col-8" style="margin-left: -40px;"><span style="font-size: 14px;">' + title + '</span><br/><span style="font-size: 14px;">' + date + '</span><br/><span style="font-size: 14px;">' + Description + '</span></div><div class="col-sm-1 col-1"><i class="fa fa-trash deletePicture" userid ="' + data[i].Attachment_ID + '"  aria-hidden="true" style="cursor: pointer;margin-left: -8px;"></i></div></div></div>';
                    $('#attachmentlists').prepend(img);
                    $('.deletePicture').click(function (e) {
                        e.stopImmediatePropagation();
                        var ID = $(this).attr("userid");
                        var Patient_ID = $('#Patient_ID').val();
                        var checkstr = confirm('are you sure you want to delete this record?');
                        if (checkstr == true) {
                            //var flipAPI3 = "http://localhost:14537/api/patient/DeleteUserTestRecord?Patient_ID=" + Patient_ID + "&ID=" + ID;
                            var flipAPI3 = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUserTestRecord?Patient_ID=" + Patient_ID + "&ID=" + ID;
                            $.ajax({
                                url: flipAPI3,
                                type: "GET",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                data: "{}",
                                success: function (data) {
                                    if (data != "") {
                                        showpopup('Image removed successfully');
                                        window.location.href = window.location.href;
                                    }
                                    else {
                                        showpopup('Please try again');
                                    }
                                }
                            })
                        } else {
                            return false;
                        }
                    })
                    $('.openimg').click(function (e) {
                        e.preventDefault();
                        var path = $(this).attr('path');
                        window.open(path, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=400,height=600');
                    })
                }
            }
        }
    })
}

$('#SHowSpan, .appmnttime').click(function (e) {
    var Patient_ID = $('#Patient_ID').val();
    var User_ID = $('#User_ID').val();
    var flipAPI = "https://localhost:14537/api/patient/GetUserAppointmentID?Patient_ID=" + Patient_ID + "&User_ID=" + User_ID;
    $.ajax({
        url: flipAPI,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{}",
        success: function (data) {
            if (data != "") {

                $('#appendAppointments').empty();
                $('#MoreAppontmentsPopup').modal();
                var datatable = '';
                for (var i = 0; i < data.length; i++) {

                    datatable = datatable +
                        '<div class="col-12 col-md-12 pb-2 pt-2 future_Appointments">' +
                        '<div class="row"><div class="col-8 col-sm-6"><span class="appointmentDateNTime">' + data[i].AppointmentDate + '-' + data[i].AppointmentTime + '</span>' +
                        '</div><div class="col-2 col-sm-3 text-right"><i class="fa fa-check update_appointment  pr-2" appointment_id =' + data[i].AppointmentID + ' style="display: none;"></i>' +
                        '<i class="fa fa-times canceledit pr-2" style="display: none;"></i><i class="fa fa-edit edit_Appointment pr-2" appointment_id =' + data[i].AppointmentID + '></i></div><div class="col-2 col-sm-3 text-right">' +
                        '<i class="fa fa-trash Del_Appointment" appointment_id =' + data[i].AppointmentID + '></i></div></div><div class="row"><div class="col-8"><span>' + data[i].Clinic_name + '</span>' +
                        '</div></div></div>';
                }
                $('#appendAppointments').append(datatable);
                $('.Del_Appointment').click(function (e) {
                    var Appointment_ID = $(this).attr('appointment_id');
                    var checkstr = confirm('are you sure you want to delete this record?');
                    if (checkstr == true) {
                        //var flipAPI = "http://localhost:14537/api/patient/DeleteUserAppointment?Appointment_ID=" + Appointment_ID + "&Patient_ID=" + Patient_ID;
                        var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/DeleteUserAppointment?Appointment_ID=" + Appointment_ID + "&Patient_ID=" + Patient_ID;
                        $.ajax({
                            url: flipAPI,
                            type: "GET",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: "{}",
                            success: function (data) {
                                if (data != "NOT EXISTS") {
                                    showpopup('Appointment removed successfully');
                                    window.location.href = window.location.href;
                                }
                                else {
                                    showpopup('Please try again');
                                }
                            }
                        })
                    }
                    else {
                        return false;
                    }
                })

                $('.edit_Appointment').click(function (e) {
                    var Appointment_ID = $(this).attr('appointment_id');
                    $('#ReSchedule').modal();
                    $('#AppointmentReschedule').click(function (e) {
                        e.stopImmediatePropagation();
                        //var AppointmentDate = $('#RescheduleDate').val();
                        var AppointmentID = Appointment_ID
                        var Date = $('#Reschedule_Date').val();
                        var timeString = $('#Reschedule_Time').val();
                        var Time = timeString;
                        if (Date.length == 0) {
                            showpopup('Please select Date');
                        }
                        else {
                            $.ajax({
                                url: "../../services.aspx/RescheduleAppointment",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                data: '{AppointmentID:' + JSON.stringify(AppointmentID) + ',Date:' + JSON.stringify(Date) + ',Time:' + JSON.stringify(Time) + ',Todoctor:' + JSON.stringify('0') + '}',
                                async: "false",
                                success: function (data) {
                                    if (data.d.length > 0) {
                                        if (data.d[0] == "1") {
                                            AppointmentHandler.GetAppointmentDetails();
                                            showpopup('Appointment rescheduled successfully.');
                                            $('#ReSchedule').modal('hide');
                                            $('#Reschedule_Date').val('');
                                            $('#Reschedule_Time').val('');
                                        }
                                    }
                                }
                            })
                            e.stopImmediatePropagation();
                        }
                    });
                    $('#AppointmentReschedule2').click(function (e) {
                        e.stopImmediatePropagation();
                        //var AppointmentDate = $('#RescheduleDate').val();
                        var AppointmentID = Appointment_ID
                        var Date = $('#Reschedule_Date').val();
                        var timeString = $('#Reschedule_Time').val();
                        var Time = timeString;
                        if (Date.length == 0) {
                            showpopup('Please select Date');
                        }

                        else {
                            $.ajax({
                                url: "../../Patient/profile.aspx/RescheduleAppointmentwithoutSMS",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                data: '{AppointmentID:' + JSON.stringify(AppointmentID) + ',Date:' + JSON.stringify(Date) + ',Time:' + JSON.stringify(Time) + '}',
                                async: "false",
                                success: function (data) {
                                    if (data.d.length > 0) {
                                        if (data.d[0] == "1") {

                                            showpopup('Appointment rescheduled successfully.');
                                            $('#ReSchedule').modal('hide');
                                            $('#Reschedule_Date').val('');
                                            $('#Reschedule_Time').val('');
                                        }
                                    }
                                }
                            })
                            e.stopImmediatePropagation();
                        }
                    });
                    $('#AppointmentReschedule1').click(function (e) {
                        e.stopImmediatePropagation();
                        //var AppointmentDate = $('#RescheduleDate').val();
                        var AppointmentID = Appointment_ID
                        var Date = $('#Reschedule_Date').val();
                        var timeString = $('#Reschedule_Time').val();
                        var Time = timeString;
                        if (Date.length == 0) {
                            showpopup('Please select Date');
                        }
                        else {
                            $.ajax({
                                url: "../../Patient/profile.aspx/RescheduleAppointment",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                data: '{AppointmentID:' + JSON.stringify(AppointmentID) + ',Date:' + JSON.stringify(Date) + ',Time:' + JSON.stringify(Time) + ',Todoctor:' + JSON.stringify('1') + '}',
                                async: "false",
                                success: function (data) {
                                    if (data.d.length > 0) {
                                        if (data.d[0] == "1") {

                                            showpopup('Appointment rescheduled successfully.');
                                            $('#ReSchedule').modal('hide');
                                            $('#Reschedule_Date').val('');
                                            $('#Reschedule_Time').val('');
                                        }
                                    }
                                }
                            })
                            e.stopImmediatePropagation();
                        }
                    });
                })
            }
        }
    })

})

$('.addNewCovid').click(function (f) {
    $('#CovidRecordPopup').modal();
    $('#btnSubmitAddCovidRecord').click(function (e) {
        e.stopImmediatePropagation();
        var Patient_ID = $('#Patient_ID').val();
        var Temperature = $('#Temperature').val();
        var Oxygen_Level = $('#Oxygen_Level').val();
        var Date = $('#CovidDate').val();
        var Time = $('#CovidTime').val();

        if (Temperature.length == 0) {
            showpopup('Please Enter your temperature');
        }

        else {
            //var flipAPI = "http://localhost:14537/api/patient/AddUsercovidDetais?Temperature=" + Temperature + "&Patient_ID=" +
            //  Patient_ID + "&Oxygen_Level=" + Oxygen_Level + "&Date=" + Date + "&Time=" + Time;
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/AddUsercovidDetais?Temperature=" + Temperature + "&Patient_ID=" +
                Patient_ID + "&Oxygen_Level=" + Oxygen_Level + "&Date=" + Date + "&Time=" + Time;
            $.ajax({
                url: flipAPI,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: "{}",
                success: function (data) {
                    if (data != '') {
                        showpopup('Record added successfully');
                        location.reload();
                    }
                    else {
                        showpopup('Please try again');
                    }
                }
            })
        }
    })
})
$('.editUserDetails').click(function (e) {
    $('#Select_name').val($('#name').text())
    $('#Select_DOB').val($('#DOB').text())
    $('#Select_mobileNo').val($('#Mobile').text())
    $('#Select_Alter_mobileNo').val($('#AlterMobile').text())
    $('#Select_City').val($('#City').text())
    $('#Select_Email_id').val($('#Email').text())
    $('#Select_Address').val($('#Address').text())
    $('#updateUserDetailsPopup').modal();
    $('#btnSubmitUpdateUserDetails').click(function (e) {
        e.stopImmediatePropagation();

        var Title = $('#Select_Title option:selected').text();
        var Gender = $('#Select_Gender option:selected').val();
        var Marital_Status = $('#Select_Martial_status option:selected').val();
        var Name = $('#Select_name').val();
        var DOB = $('#Select_DOB').val();
        var Alternate_Mobile_No = $('#Select_Alter_mobileNo').val();
        var City = $('#Select_City').val();
        var Email_ID = $('#Select_Email_id').val();
        var Address = $('#Select_Address').val();
        var Patient_ID = $('#Patient_ID').val();
        if (Name.length == 0) {
            alter('Please input your name')
        }

        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/UpdateUserDetailsRecord?Title=" + Title + "&Patient_ID=" +
                Patient_ID + "&Gender=" + Gender + "&Marital_Status=" + Marital_Status + "&DOB=" + DOB
                + "&Alternate_Mobile_No=" + Alternate_Mobile_No + "&City=" + City + "&Email_ID=" +
                Email_ID + "&Address=" + Address + "&Name=" + Name;
            $.ajax({
                url: flipAPI,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: "{}",
                success: function (data) {
                    if (data != '') {
                        showpopup('Your details has been updated successfully');
                        window.location.href = window.location.href;
                    }
                    else {
                        showpopup('Please try again');
                    }
                }
            })
        }
    })
})
$('.addMedicineRecord').click(function (e) {
    $('#AddMedicinePopup').modal();
    $('#btnSubmitAddMedicineRecord').click(function (e) {
        e.stopImmediatePropagation();
        var Patient_ID = $('#Patient_ID').val();
        var Med_Name = $('#Med_Name').val();
        var Med_dosage = $('#Med_dosage').val();
        var Med_Duration = $('#Med_Duration').val();
        if (Med_Name.length == 0) {
            showpopup('Please Enter Medicine Name');
        }
        else if (Med_dosage.length == 0) {
            showpopup('Please Enter dosage per day');
        }
        else if (Med_Duration.length == 0) {
            showpopup('Please Enter duration of medicine');
        }
        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/AddUserMedicine?Med_Name=" + Med_Name + "&Patient_ID=" +
                Patient_ID + "&Med_dosage=" + Med_dosage + "&Med_Duration=" + Med_Duration;
            $.ajax({
                url: flipAPI,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: "{}",
                success: function (data) {
                    if (data != '') {
                        showpopup('Medicine added successfully');
                    }
                    else {
                        showpopup('Please try again');
                    }
                }
            })
        }
    })
})
$('.addAlarmRemindersRecord').click(function (e) {
    $('#addAlarmRemindersRecordPopup').modal();
    $('#btnSubmitaddAlarmRemindersRecord').click(function (e) {
        e.stopImmediatePropagation();
        var Patient_ID = $('#Patient_ID').val();
        var Alarm_Date = $('#Alarm_Date').val();
        var Alarm_Time = $('#Alarm_Time').val();
        var With = $('#With_Alarm').val();
        var Where = $('#Where_Alarm').val();
        var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/InsertAlarmRemindersRecord?Alarm_Date=" + Alarm_Date + "&Patient_ID=" +
            Patient_ID + "&Alarm_Time=" + Alarm_Time + "&With=" + With + "&Where=" + Where;
        $.ajax({
            url: flipAPI,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{}",
            success: function (data) {
                if (data != '') {
                    showpopup('Reminder added successfully');
                    window.location.href = window.location.href;
                }
                else {
                    showpopup('Please try again');
                }
            }
        })
    })
})
$('.edit_emergency').click(function (e) {
    $('#Relative_Name').val($('#EmerName').text())
    $('#Relative_MobileNo').val($('#EmerContact').text())
    $('#Relative_Address').val($('#EmerAddress').text())
    $('#updateUserEmergencyDetailsPopup').modal();
    $('#btnSubmitUpdateUserEmergencyDetails').click(function (e) {
        e.stopImmediatePropagation();
        var Name = $('#Relative_Name').val();
        var Relation = $('#Relation_with_Patient option:selected').text();
        var Mobile_No = $('#Relative_MobileNo').val();
        var Address = $('#Relative_Address').val();
        var Patient_ID = $('#Patient_ID').val();
        if (Name.length == 0) {
            showpopup('Please input name');
        }
        else if (Mobile_No.length != 10) {
            showpopup('Please input mobile number of 10 characters');
        }
        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/UpdateUserEmergencyDetailsRecord?Name=" + Name + "&Patient_ID=" +
                Patient_ID + "&Relation=" + Relation + "&Mobile_No=" + Mobile_No + "&Address=" + Address;
            $.ajax({
                url: flipAPI,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: "{}",
                success: function (data) {
                    if (data != '') {
                        showpopup('Your emergency contact details has been updated successfully');
                        window.location.href = window.location.href;
                    }
                    else {
                        showpopup('Please try again');
                    }
                }
            })
        }
    })
})
$('.addTestRecord').click(function (e) {
    $('#AttachmentPopup').modal();
})
var Image;
var NameImage;
var url2;
var imageSource;
$("#GetImage").change(function (e) {

    e.stopImmediatePropagation();
    Image = $("#GetImage").val();
    var Image1 = $('#GetImage')[0].files[0];
    NameImage = Image1.name;
    $('#imagename').val(Image1.name);
})
function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {

            url2 = e.target.result;
            $('#prescription').attr('prescsrc', url2);
            $('#prescription')
                .attr('src', url2)
                .width(150)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function setProperties1() {
    $('#prescription').Jcrop({
        setSelect: [0, 0, 340, 320]
    });
}
$("#prescription").change(function () {
    readURL3(this);
});
$("#SaveAttachemntsandShare").click(function (e) {
    e.stopImmediatePropagation();

    var imageSource = $('#prescription').attr('prescsrc').replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
    var NameImage = $('#imagename').val()
    var Patient_ID = $('#Patient_ID').val();
    var Show_To_Patient = "Y";
    var Show_To_Doctor = "Y";
    var Attachment_Date = $('#Attachment_Date').val();
    var Attachment_Title = $('#Attachment_Title').val();
    var Attachment_Description = $('#Attachment_Description').val();
    if ($('#upload_image').val() == "") {
        showpopup('Please select image');
    }
    else {
        $.ajax({
            type: 'POST',
            url: '../../Patient/profile.aspx/UploadImageAttachmentshare',
            data: '{ "imageData" : "' + imageSource + '","fileUploadDocument":"' + NameImage
                + '","Patient_ID":"' + Patient_ID + '" ,"Show_To_Patient":"' + Show_To_Patient
                + '","Show_To_Doctor":"' + Show_To_Doctor + '","Attachment_Date":"' + Attachment_Date + '","Attachment_Title":"' + Attachment_Title
                + '","Attachment_Description":"' + Attachment_Description + '"}',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                if (msg.d == 1) {

                    showpopup('Image save & sent successfully !');
                    $('#AttachmentPopup').modal('hide');
                    window.location.href = window.location.href;
                }
                else {
                    showpopup('Please try again!');
                }
            },
        });
    }
});
$("#SaveAttachemnts").click(function (e) {
    e.stopImmediatePropagation();

    var imageSource = $('#prescription').attr('prescsrc').replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
    var NameImage = $('#imagename').val()
    var Patient_ID = $('#Patient_ID').val();
    var Show_To_Patient = "Y";
    var Show_To_Doctor = "N";
    var Attachment_Date = $('#Attachment_Date').val();
    var Attachment_Title = $('#Attachment_Title').val();
    var Attachment_Description = $('#Attachment_Description').val();
    if ($('#upload_image').val() == "") {
        showpopup('Please select image');
    }
    else {
        $.ajax({
            type: 'POST',
            url: '../../Patient/profile.aspx/UploadImageAttachmentshare',
            data: '{ "imageData" : "' + imageSource + '","fileUploadDocument":"' + NameImage + '","Patient_ID":"' + Patient_ID + '" ,"Show_To_Patient":"' + Show_To_Patient + '","Show_To_Doctor":"' + Show_To_Doctor
                + '","Attachment_Date":"' + Attachment_Date + '","Attachment_Title":"' + Attachment_Title
                + '","Attachment_Description":"' + Attachment_Description + '"}',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                if (msg.d == 1) {

                    showpopup('Image save & sent successfully !');
                    $('#AttachmentPopup').modal('hide');
                    window.location.href = window.location.href;
                }
                else {
                    showpopup('Please try again!');
                }
            },
        });
    }
});
$('.editAllergyDetails').click(function (e) {
    $('#addUserAllergyPopup').modal();
    $('#btnSubmitinsertAllergyDetails').click(function (e) {
        e.stopImmediatePropagation();
        var Allergy_Name = $('#Allergy_Name').val();
        var Description_Name = $('#Description_Name').val();
        var Patient_ID = $('#Patient_ID').val();
        if (Allergy_Name.length == 0) {
            showpopup('Please input your allergy');
        }
        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/InsertUserAllergyRecord?Allergy_Name=" + Allergy_Name + "&Patient_ID=" +
                Patient_ID + "&Description_Name=" + Description_Name;
            $.ajax({
                url: flipAPI,
                type: 'GET',
                data: '{}',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (msg) {
                    if (msg != null) {

                        showpopup('Allergy added successfully !');
                        window.location.href = window.location.href;
                    }
                    else {
                        showpopup('Please try again!');
                    }
                }
            });
        }
    })
})
$('.editMedicalDetails').click(function (e) {
    $('#addUserMedicalHistoryPopup').modal();
    $('#btnSubmitinsertMedicalDetails').click(function (e) {
        e.stopImmediatePropagation();
        var Medical_Name = $('#Medical_Name').val();
        var Description_Name = $('#Medical_Description_Name').val();
        var Patient_ID = $('#Patient_ID').val();
        if (Allergy_Name.length == 0) {
            showpopup('Please input your allergy');
        }
        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/InsertUserMedicalRecord?Medical_Name=" + Medical_Name + "&Patient_ID=" +
                Patient_ID + "&Description_Name=" + Description_Name;
            $.ajax({
                url: flipAPI,
                type: 'GET',
                data: '{}',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (msg) {
                    if (msg != null) {

                        showpopup('Medical added successfully !');
                        window.location.href = window.location.href;
                    }
                    else {
                        showpopup('Please try again!');
                    }
                }
            });
        }
    })
})
$('.addNewSugarRecord').click(function (e) {
    e.stopImmediatePropagation();
    $('#SugarRecordPopup').modal();
    $('#btnSubmitAddSugarRecord').click(function (e) {
        e.stopImmediatePropagation();
        var Patient_ID = $('#Patient_ID').val();
        var Date = $('#SugarDate').val();
        var Fasting = $('#SugarFasting').val();
        var PP = $('#SugarPP').val();
        var Random = $('#SugarRandom').val();
        var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/AddUserSugarData?Date=" + Date + "&Patient_ID=" +
            Patient_ID + "&Fasting=" + Fasting + "&PP=" + PP + "&Random=" + Random;
        $.ajax({
            url: flipAPI,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{}",
            success: function (data) {
                if (data != '') {
                    showpopup('Record added successfully');
                    window.location.href = window.location.href;
                }
                else {
                    showpopup('Please try again');
                }
            }
        })
    })
})
$('.addNewBPRecord').click(function (e) {
    e.stopImmediatePropagation();
    $('#BPRecordPopup').modal();
    $('#btnSubmitAddBPRecord').click(function (e) {
        e.stopImmediatePropagation();
        var Patient_ID = $('#Patient_ID').val();
        var Date = $('#BPDate').val();
        var Systolic = $('#Systolic').val();
        var Diastolic = $('#Diastolic').val();
        var Pulse = $('#Pulse').val();
        var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/AddUserBPData?Date=" + Date + "&Patient_ID=" +
            Patient_ID + "&Systolic=" + Systolic + "&Diastolic=" + Diastolic + "&Pulse=" + Pulse;
        $.ajax({
            url: flipAPI,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{}",
            success: function (data) {
                if (data != '') {
                    showpopup('Record added successfully');
                    window.location.href = window.location.href;
                }
                else {
                    showpopup('Please try again');
                }
            }
        })
    })
})
$('.addHeightWeightRecord').click(function (e) {
    e.stopImmediatePropagation();
    $('#OtherRecordPopup').modal();
    $('#btnSubmitAddOtherRecord').click(function (e) {
        e.stopImmediatePropagation();
        var Patient_ID = $('#Patient_ID').val();
        var Date = $('#OtherDate').val();
        var Patient_Height = $('#Patient_Height').val();
        var Patient_Weight = $('#Patient_Weight').val();
        var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/AddUserOtherTestData?Date=" + Date + "&Patient_ID=" +
            Patient_ID + "&Height=" + Patient_Height + "&Weight=" + Patient_Weight;
        $.ajax({
            url: flipAPI,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{}",
            success: function (data) {
                if (data != '') {
                    showpopup('Record added successfully');
                    window.location.href = window.location.href;
                }
                else {
                    showpopup('Please try again');
                }
            }
        })
    })
})
$('.editMbl_No').click(function (e) {
    e.stopImmediatePropagation();
    $('#editMobileNoPopup').modal();
    $('#btnSubmitChangeMobileNumber').click(function (e) {
        e.stopImmediatePropagation();
        var MobileNo = $('#selectMobileNO').val();
        var Patient_ID = $('#Patient_ID').val();
        var Current_mobile = $('#Mobile').text();
        var User_ID = $('#User_ID').val();
        var Relation_ID = $('#Relation_ID').val();
        if (MobileNo == Current_mobile) {
            showpopup('Please insert your new mobile number')
        }
        else if (MobileNo.length != 10) {
            showpopup('Your mobile number is not of 10 digits')
        }
        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/ChangeUserMobileNumber?Mobile_No=" + MobileNo + "&Patient_ID=" + Patient_ID
                + "&User_ID=" + User_ID + "&Relation_ID=" + Relation_ID + "&Current_mobile=" + Current_mobile;
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: flipAPI,
                data: "{}",
                dataType: "json",
                success: function (data) {
                    if (data != null) {
                        if (Relation_ID == '1') {
                            if (data == 'UPDATE DONE') {
                                window.location.href = window.location.href;
                            }
                            else {
                                window.location.href = 'https://www.doctorplus.biz';
                            }
                        }
                        else {
                            if (data == 'UPDATE DONE') {
                                showpopup('Your current account has been disabled. Your username and password is sent to your new mobile number.')
                            }
                            else {
                                window.location.href = 'https://www.doctorplus.biz';
                            }
                        }
                    }
                }
            })
        }
    })
    $('#SendOtp').click(function (e) {
        e.stopImmediatePropagation();
        var MobileNo = $('#selectMobileNO').val();
        var Patient_ID = $('#Patient_ID').val();
        var Current_mobile = $('#Mobile').text();
        if (MobileNo == Current_mobile) {
            showpopup('Please insert your new mobile number')
        }
        else if (MobileNo.length != 10) {
            showpopup('Your mobile number is not of 10 digits')
        }
        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/SendOTP?MobileNo=" + MobileNo;
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: flipAPI,
                data: "{}",
                dataType: "json",
                success: function (data) {
                    if (data != '') {
                        $('#otpverify').val(data)
                        $('#SendOtp').hide();
                        showpopup('OTP sent successfully');
                        $('#ResendSendOtp').show();
                        $('#txt_Otp').attr("readonly", false);
                    }
                    else
                        showpopup("Please try again !!")
                },
            })
        }
    })
    $('#ResendSendOtp').click(function (e) {
        e.stopImmediatePropagation();
        var MobileNo = $('#selectMobileNO').val();
        var Patient_ID = $('#Patient_ID').val();
        var Current_mobile = $('#Mobile').text();
        var OTP_ID = $('#otpverify').val();
        if (MobileNo == '') {
            showpopup('Please insert your new mobile number')
        }
        else if (MobileNo.length != 10) {
            showpopup('Your mobile number is not of 10 digits')
        }
        else {
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/ReSendOTP?MobileNo=" + MobileNo + "&OTP_ID=" + OTP_ID;
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: flipAPI,
                data: "{}",
                dataType: "json",
                success: function (data) {

                    if (data != '') {
                        $('#otpverify').val(data)
                        $('#SendOtp').hide();
                        showpopup('OTP sent successfully');
                        $('#ResendSendOtp').show();
                        $('#txt_Otp').attr("readonly", false);
                    }
                    else
                        showpopup("Please try again !!")
                },

            })
        }


    })
    $("#txt_Otp").keyup(function (e) {
        e.stopImmediatePropagation();
        if (this.value.length == this.maxLength) {
            $('#Loader').html('<img id="loader-img" alt="" src="/image/ajax-loader.gif" width="20px" height="20px" align="center" />');
            var OtpID = $('#otpverify').val();
            var otp = $("#txt_Otp").val();
            var flipAPI = "https://drplusapp.iglobalsolutions.org/api/patient/VerifyOTP?otp=" + otp + "&OtpID=" + OtpID;
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: flipAPI,
                data: "{}",
                dataType: "json",
                success: function (data) {
                    if (data != null) {
                        if (data == "YES") {
                            setTimeout(function () {
                                $('#ResendSendOtp').hide();
                                $('#Loader').html('Otp Verified.');
                                $("#selectMobileNO").attr('readonly', true)
                                $("#txt_Otp").attr('readonly')
                                $('#Loader').css({ 'color': 'green', 'font-size': '12px' })
                                $('#txt_Otp').attr("readonly", true);
                                var flipAPI1 = "https://drplusapp.iglobalsolutions.org/api/patient/CheckMobileNO?Mobile_No=" + $('#selectMobileNO').val();
                                var Relation_ID = $('#Relation_ID').val();
                                $.ajax({
                                    type: "GET",
                                    contentType: "application/json; charset=utf-8",
                                    url: flipAPI1,
                                    data: "{}",
                                    dataType: "json",
                                    success: function (data) {
                                        if (data != null) {
                                            if (data == 'No') {
                                                $('#btnSubmitChangeMobileNumber').val('Change Mobile No.');
                                                $('#btnSubmitChangeMobileNumber').show();
                                            }
                                            else {
                                                $('<div> This number is already exists with another user. If you want to change your number then you lost your whole data instead of prescription. </div>').insertAfter('#Loader');
                                                $('#btnSubmitChangeMobileNumber').val('Yes & Change Mobile No.');
                                                $('#btnSubmitChangeMobileNumber').show();
                                            }
                                        }
                                    }
                                })
                            }, 2000);
                        } else {
                            $('#Loader').css({ 'color': 'red', 'font-size': '12px' })
                            $('#Loader').html('Wrong OTP. Please try again.');
                        }
                    }
                }
            })
        }
        else {
        }
    });
})
$('#Logout').click(function (e) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../../Services.aspx/Logout_Session",
        data: {},
        dataType: "json",
        success: function (data) {
            location.reload();
        }
    })
})

