app.addModule('count', function () {
	this.init = function () {
		$('.count_left').click(function () {
			var input = $(this).closest('.count').find('.count_input');
			var val = parseInt(input.val());
			
			if (val > 1 ) {
				input.val(val - 1);
			}
		});
		$('.count_right').click(function () {
			var input = $(this).closest('.count').find('.count_input');
			var val = parseInt(input.val());
			
			input.val(val + 1);
		});
		$('.count_input').on('input', function () {
			var val = parseInt($(this).val());
			
			if (isNaN(val) || val < 1) {
				$(this).val(1);
			} else {
				$(this).val(val);
			}
		});
	};
});
app.addModule('filter', function () {
	this.init = function () {
		$('.filter_heading').click(function () {
			$(this).toggleClass('active').next().slideToggle();
		})
	};
});
app.addModule('header', function () {
	this.init = function () {
		
	};
});
app.addModule('left-menu', function () {
	this.init = function () {
		$('.left-menu_heading').click(function (e) {
			if ($(window).width() < 1100) {
				e.preventDefault();
				
				$('.left-menu_content').toggleClass('hidden');
			}
		})
	};
});
app.addModule('mobile-load', function () {
	this.init = function () {
		$('[data-clone-id]').each(function () {
			var element = $('#' + $(this).attr('data-clone-id'));
			
			if (element.length) {
				$(this).append(
					element.clone(true, true).removeAttr('id').addClass('__cloned')
				);
			}
			
			$(this).removeAttr('data-clone-id');
		});
	};
});
app.addModule('order', function () {
	this.init = function () {
		$('.order_heading a').click(function (e) {
			e.preventDefault();
			
			$(this).closest('.order_item').removeClass('checked');
		})
	};
});
app.addModule('popup-form', function () {
	this.init = function () {
		$(document).on('click', '.popup-form-product_thumbs a', function (e) {
			e.preventDefault();
			
			$('.popup-form-product_thumbs a').removeClass('active');
			$(this).addClass('active');
			
			$('.popup-form-product_pic img').attr('src', $(this).attr('href'));
		});
	};
});
app.addModule('popup', function () {
	this.init = function () {
		$('.popup').magnificPopup({
			preloader: false,
			showCloseBtn: false,
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		$('.popup-image').magnificPopup({
			preloader: false,
			showCloseBtn: false,
			removalDelay: 300,
			mainClass: 'mfp-fade',
			type: 'image'
		});
		
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
		
		$('.popup-close').click(function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	};
});
app.addModule('product-detail', function () {
	this.init = function () {
		var col2 = $('.product-detail_col.__2');
		
		$(document).on('scroll', function () {
			if (isVisible(col2, 0, true)) {
				$('.product-detail_fixed').addClass('__fix');
			} else {
				$('.product-detail_fixed').removeClass('__fix');
			}
		});
		
		$('.product-detail_nav-link').click(function (e) {
			e.preventDefault();
			
			var block = $($(this).attr('href'));
			
			$('html, body').animate({
				scrollTop: block.offset().top
			}, 500);
		})
	};
});
app.addModule('product-element', function () {
	this.init = function () {
		$('.product-element_thumbs a').hover(function (e) {
			$('.product-element_thumbs a').removeClass('active');
			$(this).addClass('active');
			
			$('.product-element_image img').attr('src', $(this).attr('href'));
		});
		
		$('.product-element_delivery-title').click(function (e) {
			e.preventDefault();
			$(this).toggleClass('active').next().slideToggle();
		})
	};
});
app.addModule('products-view', function () {
	this.init = function () {
		$('.products-view_slider').slick({
			slidesToShow: 8,
			
			responsive: [
				{
					breakpoint: 1350,
					settings: {
						slidesToShow: 6
					}
				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1
					}
				},
			]
		});
		
		$('.products-view_header a').click(function (e) {
			e.preventDefault();
			
			$('.products-view_header a, .products-view_content').removeClass('active');
			
			var block = $($(this).attr('href'));
			
			$(this).addClass('active');
			block.addClass('active');
			
			$('.products-view_slider').slick('refresh');
		});
	};
});
app.addModule('sort-block', function () {
	this.init = function () {
		$('.sort-block_button').click(function (e) {
			e.preventDefault();
			$('.sort-block_filter').toggleClass('active');
			$(this).toggleClass('active');
		})
	};
});
app.addModule('top-header', function () {
	this.init = function () {
		$('.top-header_bar-btn').click(function (e) {
			e.preventDefault();
			
			$('.top-header_bar-list').toggleClass('active');
		});
		$('.top-header_lk-link').click(function (e) {
			e.preventDefault();
		});
		
		$(document).click(function (e) {
			if (!$(e.target).closest('.top-header_bar').length) {
				$('.top-header_bar-list').removeClass('active');
			}
		})
	};
});
jQuery(function () {
	app.callModules();
});