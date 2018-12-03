$(document).ready(function(){
  var lengthOfSelect = $('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').length
  alert("length = " + lengthOfSelect);

  if(!$('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').length){
		$('.add-to-basket-container').html("AUSVERKAUFT");
	}
  else{
    $('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').find('select').nextAll('option:first:enabled').val();
  }
  $('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').find('select').nextAll('option:disabled').val().append("-ausverkauft");
  //$('option:disabled').val().append("-ausverkauft");
});
