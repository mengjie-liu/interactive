$(function () {
  $(".draggable").on("mouseenter", function () {
    if ($(this).find("#back")) {
      $(this).find("#back").remove();
      $(this).find("#up").remove();
      $(this).find("#drag").remove();
    }
    $(this)
      .append(function () {
        return `
        <div id='back'>
            <img src='img/back.png'>
        </div>
        <div id='up'>
            <img src='img/up.png'>
        </div>
        <div id='drag'>
            <img src='img/drag.png'>
        </div>
        `;
      })
      .on("mouseleave", function () {
        $("#back").remove();
        $("#up").remove();
        $("#drag").remove();
      });
    $("#back").css({
      left: 0,
      top: 0,
    });
    $("#up").css({
      right: 0,
      top: 0,
    });
    $("#drag").css({
      right: 0,
      bottom: 0,
    });
    $("#back").on("click", function () {
      $(this).parent(".draggable").fadeOut("slow");
    });
    $("#up").on("click", function () {
      let z = $(this).parent(".draggable").css("z-index");
      //console.log(z);
      if (z === "auto") {
        z = 90;
      }
      $(this)
        .parent(".draggable")
        .css("z-index", z + 1);
    });
  });
  $(".draggable").resizable({
    handles: "se",
    create: function (event, ui) {
      $(".ui-resizable-se").css("cursor", "url(img/ribo.png) 40 38, se-resize");
    },
  });

  $(".icon").click(function () {
    $(".start").fadeOut("slow");
  });
  $("#str").click(function () {
    $("#street")
      .fadeIn(1600)
      .removeClass("hide")
      .addClass("current")
      .siblings("div")
      .fadeOut(1500)
      .removeClass("current")
      .addClass("hide");
  });
  $("#riv").click(function () {
    $("#river")
      .fadeIn(1600)
      .removeClass("hide")
      .addClass("current")
      .siblings("div")
      .fadeOut(1500)
      .removeClass("current")
      .addClass("hide");
  });
  $("#home").click(function () {
    location.reload();
  });

  $(".draggable").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $(this).find("#back").remove();
      $(this).find("#up").remove();
      $(this).find("#drag").remove();
      $(this).addClass("selected").siblings().css({
        filter: "blur(9px)",
        opacity: "0.75",
      });
      $(".icon").fadeOut();
    },

    drag: function (e, o) {
      if ($(this).find("#back")) {
        $(this).find("#back").remove();
        $(this).find("#up").remove();
        $(this).find("#drag").remove();
      }
      $(this).css("background-position-x", -o.offset.left + "px");
      $(this).css("background-position-y", -o.offset.top + "px");
    },

    stop: function (e, o) {
      if ($(this).find("#back")) {
        $(this).find("#back").remove();
        $(this).find("#up").remove();
        $(this).find("#drag").remove();
      }
      $(this)
        .append(function () {
          return `
        <div id='back'>
            <img src='img/back.png'>
        </div>
        <div id='up'>
            <img src='img/up.png'>
        </div>
        <div id='drag'>
            <img src='img/drag.png'>
        </div>
        `;
        })
        .on("mouseleave", function () {
          $("#back").remove();
          $("#up").remove();
          $("#drag").remove();
        });
      $("#back").css({
        left: 0,
        top: 0,
      });
      $("#up").css({
        right: 0,
        top: 0,
      });
      $("#drag").css({
        right: 0,
        bottom: 0,
      });
      $("#back").on("click", function () {
        $(this).parent(".draggable").fadeOut("slow");
      });
      $("#up").on("click", function () {
        let z = $(this).parent(".draggable").css("z-index");
        if (z === "auto") {
          z = 90;
        }
        $(this)
          .parent(".draggable")
          .css("z-index", z + 1);
      });
      $(this).removeClass("selected").siblings().css({
        filter: "blur(0px)",
        opacity: "1",
      });
      $(".icon").fadeIn();
    },
  });
});
