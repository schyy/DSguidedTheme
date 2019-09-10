$(document).ready(function(){
  var lengthOfSelect = $('div.col-xs-12.col-md-6.col-lg-4.variation-select').length

  /*if($('.col-xs-12.col-md-6.col-lg-4.variation-select').length<1){
		$('.add-to-basket-container').html("<div class='ausverkauft'><h1>AUSVERKAUFT</h1></div>");
	}
  else{
    //$('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select').find("option:not(:disabled):first").prop('selected',true);
  }*/
  var disabledText, isSelected = false;
  $('.variation-select > .input-unit > select > option').each(function(){
    console.log($(this).text);
    if($(this).is(':disabled')){
      disabledText = $(this).text();
      $(this).text(disabledText += "- Ausverkauft");
    }
    else if(!isSelected){
      $(this).val();
      isSelected = true;
    }
  });
  //$('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select').nextAll("option:disabled").text("-SOLD");
  //$('option:disabled').val().append("-ausverkauft");

  $('.panel-body').hide();
	$('.panel-heading').css('cursor','pointer');
	$('.glyphicon').css('font-size','12px');
	$('.glyphicon').css('margin-right','10px');
	$('.panel-heading').click(function(e){
		if($(this).next().is(":visible")){
			$(this).next().slideUp();
			$(this).find('.glyphicon-chevron-down').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
		}
		else{
			$('.panel-body').slideUp().prev().find('.glyphicon-chevron-down').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
			$(this).next().slideDown();
			$(this).find('.glyphicon-chevron-right').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
		}
	});
  
});
