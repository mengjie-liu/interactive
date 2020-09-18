$(document).ready(function () {
    $(".draggable").children("img").mousedown(function () {
        $(this).css("opacity", 0.5);
        $(this).siblings("img").css("opacity", 0.5);
    }).mouseup(function () {
        $(this).css("opacity", 1);
        $(this).siblings("img").css("opacity", 1);
    });

    $("#drag-5").mousedown(function () {
        $("#danm").css("opacity", 1);
    });
});