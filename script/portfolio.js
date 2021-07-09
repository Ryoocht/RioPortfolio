$(document).ready(function(){
    //overlap_content siled function
    $('#portfolio .portfolio_grid_cell').hover(function(){
        $(this).children(".overlap_content").slideDown();
    },
    function(){
        $(this).children(".overlap_content").fadeOut();
    });

    //Create div tag at right before closing body tag
    const stalker = document.createElement('div');
    stalker.id = 'mouse_stalker';
    document.body.appendChild(stalker);
    //Make mouse_stalker tag follow the mouse
    document.addEventListener('mousemove', function(e){
        //When mouse moves, get the position of the mouse coordinates.
        // Insert acqired coordinates into translate (X, Y)
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
});