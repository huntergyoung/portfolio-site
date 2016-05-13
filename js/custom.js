
// Navbar collapse //

function collapseNavbar() {
    if ($(".navbar").offset().top > 350) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// Page scroll ease //

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Project paragraph collapse //

$('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});

// Box fade //

var $imgs = $(".fadeInImage").hide();

function fadeOneByOne(i){
   if(i >= $imgs.size()) return;
   $imgs.eq(i).fadeIn(function(){ fadeOneByOne(i+1); })
}

fadeOneByOne(0);

