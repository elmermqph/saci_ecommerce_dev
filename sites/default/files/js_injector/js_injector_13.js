(function($){
	$(document).ready(function(){
		$(".ajax-cart-submit-form-button").attr("value","+ Add to cart");
		$(".node-add-to-cart").attr("value","+ Add to cart");
		$(".node-add-to-cart").click(function(){
                       $("#block-block-18 h2.title").addClass("flag-waiting");
                       $("#block-block-18 .content").load("/block-cart-page #content #block-system-main #node-88 .field-item.even", function(response, status, xhr) {
				if (status == "success") {
					$("#block-block-18 h2.title").removeClass("flag-waiting");
				}
			});
			$(".moving-image").stop();
			$(".moving-image").remove();
			var s = $(this).attr("id");
			s = s.substr(12,s.length - 12);
			$(".moving-image").remove();
			$('html, body').animate({scrollTop:0},'fast',function(){
				$("#main-menu-inner").append("<div class='moving-image'>" + $(".image-" + s).html() + "</div>");
				$('.moving-image').css({
					'margin-top': '2px',
					'margin-left': '496px',
				});
				if($("body").hasClass('chrome')){
					$('.moving-image').animate({
						left: '+=330',
						top: '-=10',
						height: '60px',
						width: '60px',
						opacity: 0,
						
					}, 1500, function() {
						$(".moving-image").remove();
					});
				}else{
					$('.moving-image').animate({
						left: '+=330',
						top: '-=40',
						height: '60px',
						width: '60px',
						opacity: 0,
					}, 1500, function() {
						$(".moving-image").remove();
					});
				}
			});
			$("#block-block-18 h2.title").fadeOut('normal');
		       $("#block-block-18 h2.title").fadeIn('normal');
                        $('#ajaxCartUpdate').ajaxStart().ajaxStop(function() {
                                $("#block-block-18 .content").load("/block-cart-page #block-system-main .node .field-item", function(response, status, xhr) {
				  if (status == "success") {
					$("#block-block-18 h2.title").removeClass("flag-waiting");
				 }
			        });                       
                        });
                     
		});
		
		$('.product-teaser-image').zoom();	
		$("#popup-box-container .node-add-to-cart").live("click",function(){
			var id=$(this).attr("id");
			$('.views-field-addtocartlink #'+id).click();
			return false;
                 });
	});
})(jQuery);