$(function() {
    $('.hero-content h3').click(function() {
        var subText = $(this).text();
        $(this).text(subText + '!');
    });

    var onHoverAction = function(e) {
        console.log('hover action triggered');
        $(this).animate({'margin-top': '10px'});
    };
    var offHoverAction = function(e) {
        console.log('off-hover action triggered');
        $(this).animate({'margin-top': '0px'});
    };
    $('.selling-points .point').hover(onHoverAction, offHoverAction);
});