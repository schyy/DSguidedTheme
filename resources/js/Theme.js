$(document).ready(function(){
  var lengthOfSelect = $('div.col-xs-12.col-md-6.col-lg-4.variation-select').length

  if($('.col-xs-12.col-md-6.col-lg-4.variation-select').length<1){
		$('.add-to-basket-container').html("<div class='ausverkauft'>AUSVERKAUFT</div>");
	}
  else{
    $('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select').children('option:enabled:first').eq(0).prop('selected',true);
  }
  $('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select').children('option:disabled').text().append("-SOLD");
  //$('option:disabled').val().append("-ausverkauft");
});
