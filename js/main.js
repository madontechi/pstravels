(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);



$(document).ready(function () {
	const slider = $(".slider");
	const slideGroups = $(".slide-group");
	const totalSlides = slideGroups.length;
	let currentSlide = 0;

	const dotsContainer = $(".slider-dots");
	for (let i = 0; i < totalSlides; i++) {
		dotsContainer.append(`<div class="dot ${i === 0 ? "active" : ""}"></div>`);
	}

	$(".next-btn").click(() => navigate(1));
	$(".prev-btn").click(() => navigate(-1));

	$(".dot").click(function () {
		const index = $(this).index();
		goToSlide(index);
	});

	function navigate(direction) {
		currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
		goToSlide(currentSlide);
	}

	function goToSlide(index) {
		slider.css("transform", `translateX(-${index * 100}%)`);
		$(".dot").removeClass("active").eq(index).addClass("active");
		currentSlide = index;
	}

	$(".card").each(function () {
		const card = $(this);

		card.on("mousemove", function (e) {
			const rect = this.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = ((y - centerY) / centerY) * 15;
			const rotateY = ((centerX - x) / centerX) * 15;

			this.style.setProperty("--card-rotate-x", `${rotateX}deg`);
			this.style.setProperty("--card-rotate-y", `${rotateY}deg`);
		});

		card.on("mouseleave", function () {
			this.style.setProperty("--card-rotate-x", "0deg");
			this.style.setProperty("--card-rotate-y", "0deg");
		});
	});

	let touchStartX = 0;
	let touchEndX = 0;

	slider.on("touchstart", function (e) {
		touchStartX = e.originalEvent.touches[0].clientX;
	});

	slider.on("touchend", function (e) {
		touchEndX = e.originalEvent.changedTouches[0].clientX;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > 50) {
			navigate(diff > 0 ? 1 : -1);
		}
	});

	const $bokehBackground = $("#bokeh-background");
	const numBokeh = 25;
	const colors = [
		// { start: "rgba(255, 69, 0, .6)", end: "rgba(255, 69, 0, 0.25)" },
		// { start: "rgba(255, 0, 0, .6)", end: "rgba(255, 0, 0, 0.25)" },
		// { start: "rgba(255, 165, 0, .6)", end: "rgba(255, 165, 0, 0.25)" },
		// { start: "rgba(255, 20, 147, .6)", end: "rgba(255, 20, 147, 0.25)" },
		// { start: "rgba(238, 130, 238, .6)", end: "rgba(238, 130, 238, 0.25)" },
		// { start: "rgba(148, 0, 211, .6)", end: "rgba(148, 0, 211, 0.25)" }
	];

	for (let i = 0; i < numBokeh; i++) {
		const $bokeh = $("<div>").addClass("bokeh");
		const size = Math.random() * 120 + 50;
		const left = Math.random() * 100;
		const top = Math.random() * 100;
		const color = colors[Math.floor(Math.random() * colors.length)];
		const background = `radial-gradient(circle, ${color.start} 0%, ${color.end} 100%)`;
		const animationDelay = `${Math.random() * 2}s`;
		const animationDuration = `${Math.random() * 10 + 10}s`;

		$bokeh.css({
			width: `${size}px`,
			height: `${size}px`,
			left: `${left}%`,
			top: `${top}%`,
			background: background,
			animationDelay: animationDelay,
			animationDuration: animationDuration
		});

		$bokehBackground.append($bokeh);
	}
});

