$(document).ready(function(){
  alert("length = "$('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').length);

  if(!$('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').length){
		$('.add-to-basket-container').remove().parent().append("AUSVERKAUFT");
	}
  $('option:disabled').val().append("-ausverkauft");
});
