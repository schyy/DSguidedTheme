$(document).ready(function(){
  $(window).on('hashchange', function(e){
    $('.price').html($('.price').html().replace("*","" ));
  });
});
