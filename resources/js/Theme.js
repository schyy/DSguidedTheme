$(document).ready(function(){
  var lengthOfSelect = $('div.col-xs-12.col-md-6.col-lg-4.variation-select').length

  if($('.col-xs-12.col-md-6.col-lg-4.variation-select').length<1){
		$('.add-to-basket-container').html("<div class='ausverkauft'>AUSVERKAUFT</div>");
	}
  else{
    $('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select > option:not([disabled]):first').val();
  }
  $('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select > option:disabled:first').nextAll('option:disabled').val().append("-ausverkauft");
  //$('option:disabled').val().append("-ausverkauft");
});
