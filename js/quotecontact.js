function submitForm(){
    // Initiate Variables With Form Content
    formProcess();
    var name = $("#qName").val();
    var email = $("#qEmail").val();
    var mobile = $("#qMobile").val();
    var company = $("#qCompany").val();
    var desc = $("#qDesc").val();
    
    if ($('#cms').is(":checked"))
    {
        var cms = 'cmsYes';
    }
    else{
        var cms = 'cmsNo'
    }

    if ($('#graphics').is(":checked"))
    {
        var graphics = 'graphicsYes';
    }
    else{
        var graphics = 'graphicsNo'
    }

    if ($('#host').is(":checked"))
    {
        var host = 'hostYes';
    }
    else{
        var host = 'hostNo'
    }

    if ($('#domain').is(":checked"))
    {
        var domain = 'domainYes';
    }
    else{
        var domain = 'domainNo'
    }

    if ($('#ecomm').is(":checked"))
    {
        var ecomm = 'ecommYes';
    }
    else{
        var ecomm = 'ecommNo'
    }

    console.log(cms);

    $.ajax({
        type: "POST",
        url: "http://awesomists.com/php/quotemail.php",
        data: "name=" + name +"&email=" + email + "&mobile=" + mobile + "&company=" + company +  "&desc=" + desc  + "&cms=" + cms + "&graphics=" + graphics 
        + "&host=" + host + "&domain=" + domain + "&ecomm=" + ecomm, 
        success : function(text){
            if (text == "success"){
                console.log("success");
                formSuccess();
            }
            else
            {
                console.log(text );
                formFailed();
            }
        }
    });
    console.log("here I am");
}

function formProcess(){
    $("#quotationForm").addClass("hidden");
    $("#qMsgprocess").removeClass("hidden");
}

function formSuccess(){
    $('#freelanForm').each(function(){
        this.reset();
    });
    $("#qMsgprocess").addClass("hidden");
    $( "#qMsgSubmit" ).removeClass( "hidden" );
}

function formFailed() {
    $('#quotationForm').each(function(){
        this.reset();
    });
    $("#qMsgprocess").addClass("hidden");
    $( "#qMsgFail" ).removeClass( "hidden" );
}

$("#quotationForm").submit(function(event){
    console.log("here I am 2");
    // cancels the form submission
    event.preventDefault();
    submitForm();
});