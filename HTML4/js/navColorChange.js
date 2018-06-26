/*
The styles for the navigation bar color change on scroll
*/
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $drop = $(".dropdown-content");
    $drop.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
