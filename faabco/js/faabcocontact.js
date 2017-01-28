function submitForm(){
    // Initiate Variables With Form Content
    formProcess();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var subject = $("#subject").val();
    var desc = $("#desc").val();

    $.ajax({
        type: "POST",
        url: "http://faabco.in/php/faabcomail.php",
        data: "name=" + name +"&email=" + email + "&phone=" + phone + "&subject=" + subject +  "&desc=" + desc, 
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
    $("#contact_form").addClass("hidden");
    $("#msgprocess").removeClass("hidden");
}

function formSuccess(){
    $('#contact_form').each(function(){
        this.reset();
    });
    $("#msgprocess").addClass("hidden");
    $( "#msgSubmit" ).removeClass( "hidden" );
}

function formFailed() {
    $('#contact_form').each(function(){
        this.reset();
    });
    $("#msgprocess").addClass("hidden");
    $( "#msgFail" ).removeClass( "hidden" );
}

$("#contact_form").submit(function(event){
    console.log("here I am 2");
    // cancels the form submission
    event.preventDefault();
    submitForm();
});