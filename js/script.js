const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

/*****************************Header Nav-links. Pages not created so commented/deactivated until added header pages created**********
 * 
const activePage = window.location.pathname;
 const navLinks = document.querySelectorAll('nav .nav-link a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
*
**********Header Nav-links Deactivation Ends ***************/

$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** Click event on toggle menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })



    //Owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //Scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

//AOS Instance
AOS.init();

});