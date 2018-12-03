$(document).ready(function(){
  if($('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').length{
    alert("select ist da");
  }
  if(!$('.col-xs-12 .col-md-6 .col-lg-4 .variation-select').length{
    alert("select ist NICHT da");
  }
  $('.add-to-basket-container').remove().append("AUSVERKAUFT !");

  if(!$('.variation-select').show()){
		$('.add-to-basket-container').remove();
	}
  $('option:disabled').val().append("-ausverkauft");
});
