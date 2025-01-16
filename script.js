$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 800, function(){
                window.location.hash = hash;
                $(hash).addClass('active');
                setTimeout(function() {
                    $(hash).removeClass('active');
                }, 1500);
            });
        }
    });

    // Add wow animation for portfolio cards
    $('.card').hover(function() {
        $(this).addClass('wow animate__animated animate__pulse');
    }, function() {
        $(this).removeClass('wow animate__animated animate__pulse');
    });
});
