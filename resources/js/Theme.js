$(document).ready(function(){
  if(!$('.variation-select').show()){
		$('.add-to-basket-container').remove();
	}
  $('option[disabled="disabled"]').val().append("-ausverkauft");
});
