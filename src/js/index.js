import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import 'owl.carousel';


+function ($) {
    $('.nav-events').owlCarousel({
	margin: 0,
	loop: false,
	dots: false,
	nav: true,
	autoWidth: true,
	items: 4
    });
}(jQuery);