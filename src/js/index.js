import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import 'owl.carousel';


+function ($) {
    $('.nav-events .owl-carousel').owlCarousel({
	margin: 0,
	loop: false,
	dots: false,
	nav: false,
	navText: [
	    '<span class="left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M8.1 10l7.5-7.5c.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8l-.7-.7c-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.8.3L4.4 9.2c-.2.2-.3.5-.3.8 0 .3.1.6.3.8l8.9 8.9c.2.2.5.3.8.3.3 0 .6-.1.8-.3l.7-.7c.4-.4.4-1.1 0-1.5L8.1 10z"></path></svg></span>',
	    '<span class="right"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M4.5 17.5c-.5.4-.5 1.1 0 1.5l.7.7c.1.2.4.3.7.3.3 0 .6-.1.8-.3l8.9-8.9c.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8L6.6.3C6.4.1 6.2 0 5.9 0c-.3 0-.6.1-.8.3l-.7.7c-.2.2-.3.5-.3.7 0 .3.1.6.3.8l7.5 7.5-7.4 7.5z"></path></svg></span>'],
	autoWidth: true,
	items: 4,
	responsive: {
	    768: {
		nav: true,
	    },
	}
    });
    $('.nav-countries .owl-carousel').owlCarousel({
	margin: 10,
	loop: false,
	dots: false,
	nav: false,
	navText: [
	    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M8.1 10l7.5-7.5c.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8l-.7-.7c-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.8.3L4.4 9.2c-.2.2-.3.5-.3.8 0 .3.1.6.3.8l8.9 8.9c.2.2.5.3.8.3.3 0 .6-.1.8-.3l.7-.7c.4-.4.4-1.1 0-1.5L8.1 10z"></path></svg>',
	    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M4.5 17.5c-.5.4-.5 1.1 0 1.5l.7.7c.1.2.4.3.7.3.3 0 .6-.1.8-.3l8.9-8.9c.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8L6.6.3C6.4.1 6.2 0 5.9 0c-.3 0-.6.1-.8.3l-.7.7c-.2.2-.3.5-.3.7 0 .3.1.6.3.8l7.5 7.5-7.4 7.5z"></path></svg>'],
	autoWidth: true,
	items: 4,
	responsive: {
	    768: {
		nav: true,
	    },
	}
    });
}(jQuery);