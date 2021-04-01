var $links = $(".item");
$links.click(function(e) {
    $links.removeClass("active");
    var clicked = e.target;
    clicked = $(clicked);
    var position = clicked.attr("data-post");
    var transformvalue = "translate3d(" + position * 25 + "%, 0, 0)";
    $("#wrapper").css({
        transform: transformvalue
    });
    clicked.addClass("active");
});

$($links[0]).addClass("active");