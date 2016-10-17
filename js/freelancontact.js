function submitFreelanForm(){
    // Initiate Variables With Form Content
    freelanformProcess();
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var website = $("#website").val();
    var expertise = $("#expertise").val();
    var desc = $("#desc").val();

    $.ajax({
        type: "POST",
        url: "http://awesomists.com/php/freelanmail.php",
        data: "name=" + name +"&email=" + email + "&mobile=" + mobile + "&website=" + website + "&expertise=" + expertise + "&desc=" + desc, 
        success : function(text){
            if (text == "success"){
                console.log("success");
                freelanformSuccess();
            }
            else
            {
                console.log(text );
                freelanformFailed();
            }
        }
    });
    console.log("here I am");
}

function freelanformProcess(){
    $("#freelanForm").addClass("hidden");
    $("#msgprocess").removeClass("hidden");
}

function freelanformSuccess(){
    $('#freelanForm').each(function(){
        this.reset();
    });
    $("#msgprocess").addClass("hidden");
    $( "#msgSubmit" ).removeClass( "hidden" );
}

function freelanformFailed() {
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
    submitFreelanForm();
});