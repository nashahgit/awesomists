function submitForm(){
    // Initiate Variables With Form Content
    formProcess();
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var website = $("#website").val();
    var expertise = $("#expertise").val();
    // var fileupload = $("#fileupload").val();
    var desc = $("#desc").val();
 
    $.ajax({
        type: "POST",
        url: "http://localhost/awesomists/freelanmail.php",
        data: "name=" + name +"&email=" + email + "&mobile=" + mobile + "&website=" + website + "&expertise=" + expertise + "&desc=" + desc, 
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
    $("#freelanForm").addClass("hidden");
    $("#msgprocess").removeClass("hidden");
}

function formSuccess(){
    $('#freelanForm').each(function(){
        this.reset();
    });
    $("#msgprocess").addClass("hidden");
    $( "#msgSubmit" ).removeClass( "hidden" );
}

function formFailed() {
    $('#freelanForm').each(function(){
        this.reset();
    });
    $("#msgprocess").addClass("hidden");
    $( "#msgFail" ).removeClass( "hidden" );
}

$("#freelanForm").submit(function(event){
    console.log("here I am 2");
    // cancels the form submission
    event.preventDefault();
    submitForm();
});