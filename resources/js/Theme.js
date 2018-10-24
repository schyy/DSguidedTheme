$(document).ready(function(){
  console.log("test");
  $(window).on('hashchange', function(e){
    $('.price').html($('.price').html().replace("*","" ));
  });
});
