$(document).ready(function() {
    $("#heart").click(function() {
        $(".heart").fadeOut(500, function() {
            $("#message").fadeIn(500);
        });
    });

    $(".close-btn").click(function() {
        $("#message").fadeOut(500, function() {
            $(".heart").fadeIn(500);
        });
    });
});
