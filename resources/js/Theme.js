$(document).ready(function(){
  if($('.variation-select').show()){
    alert("select ist da");
  }
  if(!$('.variation-select').show()){
    alert("select ist NICHT da");
  }
  $('.add-to-basket-container').remove();

  if(!$('.variation-select').show()){
		$('.add-to-basket-container').remove();
	}
  $('option[disabled="disabled"]').val().append("-ausverkauft");
});
