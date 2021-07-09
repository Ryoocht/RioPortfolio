$(document).ready(function(){
    $('#portfolio .portfolio_grid_cell').hover(function(){
        $(this).children(".overlap_content").slideDown();
    },
    function(){
        $(this).children(".overlap_content").fadeOut();
    });
});