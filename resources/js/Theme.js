$(document).ready(function(){
  var lengthOfSelect = $('div.col-xs-12.col-md-6.col-lg-4.variation-select').length

  if($('.col-xs-12.col-md-6.col-lg-4.variation-select').length<1){
		$('.add-to-basket-container').html("<div class='ausverkauft'><h1>AUSVERKAUFT</h1></div>");
	}
  else{
    //$('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select').find("option:not(:disabled):first").prop('selected',true);
  }
  var disabledText, isSelected = false;
  $('.variation-select > input-unit > select > option').each(function(){
    console.log(this.text);
    if(this.is(':disabled')){
      disabledText = this.text();
      this.text(disabledText += "-SOLD");
    }
    else if(!isSelected){
      this.val();
      isSelected = true;
    }
  });
  //$('.col-xs-12.col-md-6.col-lg-4.variation-select > .input-unit > select').nextAll("option:disabled").text("-SOLD");
  //$('option:disabled').val().append("-ausverkauft");
});
