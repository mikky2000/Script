$(document).ready(function(){

  $("#kolo").click(function(){
    $(".col4").toggle().addClass(" animate__animated animate__backInRight");
    $(".col3").toggle().fadeOut("slow");

  });


  $("#closeBtn").click(function(){
      $(".col4").hide();
        $(".col3").toggle().fadeOut("slow");
  });



});
