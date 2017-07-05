$(function(){
	'use strict'
	$('.thumb img').on('click', function(){
		var cover = $('.cover img');
		var thumb = $(this).attr('src');

		if (cover.attr('src') !== thumb) {
			cover.fadeTo('200', '0', function(){
				cover.attr('src', thumb);
				cover.fadeTo('150', '1');
			});

			$('.thumb img').removeClass('ativo');
			$(this).addClass('ativo');
		}
	});

	var width = (parseInt($('.thumb').outerWidth() + parseInt($('.thumb').css('margin-right')))) * $('.thumb').length;
	$('.carousel').css('width', width);

	var numImages = 4;
	var marginPadding = 17;

	var ident = 0;
	var count = ($('.thumb').length / numImages) - 1;
	var slide = (numImages * marginPadding) + ($('.thumb').outerWidth() * numImages);

	$('.next').on('click', function(){
		if(ident < count){
			ident++;
			$('.carousel').animate({'margin-left': '-=' +slide+ 'px'}, '500');
		}
	});

	$('.back').on('click', function(){
		if(ident >= 1){
			ident--;
			$('.carousel').animate({'margin-left': '+=' +slide+ 'px'}, '500');
		}
	});
});