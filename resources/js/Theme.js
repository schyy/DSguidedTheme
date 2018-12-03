$(document).ready(function(){
  if(!$('.m-b-1').find('.variation-select')){
		$('.m-y-1').remove();
	}
  $('select option:disabled').value("ausverkauft");
    //$(this).value = $(this).value + " - Ausverkauft";
  }
});
