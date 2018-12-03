$(document).ready(function(){
  if(!$('.m-b-1').find('.variation-select')){
		$('.m-y-1').remove();
	}
  $('option[disabled="disabled"]').val().append("-ausverkauft");
});
