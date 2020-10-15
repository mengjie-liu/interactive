$(function () {
  $(".draggable").on("mouseenter", function () {
    $(this)
      .append(function () {
        return `
        <div id='back'>
            <img src='img/back.png'>
        </div>
        <div id='up'>
            <img src='img/up.png'>
        </div>
        `;
      })
      .on("mouseleave", function () {
        $("#back").remove();
        $("#up").remove();
      });
    $("#back").css({
      left: 0,
      top: 0,
    });
    $("#up").css({
      right: 0,
      top: 0,
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
  $(".draggable").resizable();

  $(".icon").click(function () {
    $(".start").fadeOut("slow");
  });
  $("#str").click(function () {
    $("#street")
      .fadeIn("slow")
      .siblings("div")
      .removeClass("current")
      .fadeOut("slow");
  });
  $("#riv").click(function () {
    $("#river")
      .fadeIn("slow")
      .siblings("div")
      .removeClass("current")
      .fadeOut("slow");
  });
  $("#home").click(function () {
    location.reload();
  });

  $("#nhs1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#nhs1").addClass("selected");
    },
    drag: function (e, o) {
      $("#nhs1").css("background-position-x", -o.offset.left + "px");
      $("#nhs1").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#nhs1").removeClass("selected");
    },
  });
  $("#nhs2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#nhs2").addClass("selected");
    },
    drag: function (e, o) {
      $("#nhs2").css("background-position-x", -o.offset.left + "px");
      $("#nhs2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#nhs2").removeClass("selected");
    },
  });
  $("#nhs3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#nhs3").addClass("selected");
    },
    drag: function (e, o) {
      $("#nhs3").css("background-position-x", -o.offset.left + "px");
      $("#nhs3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#nhs3").removeClass("selected");
    },
  });
  $("#bjs1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjs1").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjs1").css("background-position-x", -o.offset.left + "px");
      $("#bjs1").css("background-position-y", -o.offset.top + "px");
      $("#bjs1").offset().left = o.offset.left;
    },
    stop: function (e, o) {
      $("#bjs1").removeClass("selected");
    },
  });
  $("#bjs2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjs2").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjs2").css("background-position-x", -o.offset.left + "px");
      $("#bjs2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#bjs2").removeClass("selected");
    },
  });
  $("#bjs3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjs3").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjs3").css("background-position-x", -o.offset.left + "px");
      $("#bjs3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#bjs3").removeClass("selected");
    },
  });
  $("#bjs4").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjs4").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjs4").css("background-position-x", -o.offset.left + "px");
      $("#bjs4").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#bjs4").removeClass("selected");
    },
  });
  $("#shs1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shs1").addClass("selected");
    },
    drag: function (e, o) {
      $("#shs1").css("background-position-x", -o.offset.left + "px");
      $("#shs1").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shs1").removeClass("selected");
    },
  });
  $("#shs2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shs2").addClass("selected");
    },
    drag: function (e, o) {
      $("#shs2").css("background-position-x", -o.offset.left + "px");
      $("#shs2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shs2").removeClass("selected");
    },
  });
  $("#shs3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shs3").addClass("selected");
    },
    drag: function (e, o) {
      $("#shs3").css("background-position-x", -o.offset.left + "px");
      $("#shs3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shs3").removeClass("selected");
    },
  });
  $("#shs4").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shs4").addClass("selected");
    },
    drag: function (e, o) {
      $("#shs4").css("background-position-x", -o.offset.left + "px");
      $("#shs4").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shs4").removeClass("selected");
    },
  });
  $("#kts1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#kts1").addClass("selected");
    },
    drag: function (e, o) {
      $("#kts1").css("background-position-x", -o.offset.left + "px");
      $("#kts1").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#kts1").removeClass("selected");
    },
  });
  $("#kts2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#kts2").addClass("selected");
    },
    drag: function (e, o) {
      $("#kts2").css("background-position-x", -o.offset.left + "px");
      $("#kts2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#kts2").removeClass("selected");
    },
  });
  $("#kts3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#kts3").addClass("selected");
    },
    drag: function (e, o) {
      $("#kts3").css("background-position-x", -o.offset.left + "px");
      $("#kts3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#kts3").removeClass("selected");
    },
  });
  $("#kts4").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#kts4").addClass("selected");
    },
    drag: function (e, o) {
      $("#kts4").css("background-position-x", -o.offset.left + "px");
      $("#kts4").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#kts4").removeClass("selected");
    },
  });
  $("#kts5").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#kts5").addClass("selected");
    },
    drag: function (e, o) {
      $("#kts5").css("background-position-x", -o.offset.left + "px");
      $("#kts5").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#kts5").removeClass("selected");
    },
  });

  $("#nhr1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#nhr1").addClass("selected");
    },
    drag: function (e, o) {
      $("#nhr1").css("background-position-x", -o.offset.left + "px");
      $("#nhr1").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#nhr1").removeClass("selected");
    },
  });
  $("#nhr2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#nhr2").addClass("selected");
    },
    drag: function (e, o) {
      $("#nhr2").css("background-position-x", -o.offset.left + "px");
      $("#nhr2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#nhr2").removeClass("selected");
    },
  });
  $("#nhr3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#nhr3").addClass("selected");
    },
    drag: function (e, o) {
      $("#nhr3").css("background-position-x", -o.offset.left + "px");
      $("#nhr3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#nhr3").removeClass("selected");
    },
  });
  $("#bjr1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjr1").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjr1").css("background-position-x", -o.offset.left + "px");
      $("#bjr1").css("background-position-y", -o.offset.top + "px");
      $("#bjr1").offset().left = o.offset.left;
    },
    stop: function (e, o) {
      $("#bjr1").removeClass("selected");
    },
  });
  $("#bjr2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjr2").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjr2").css("background-position-x", -o.offset.left + "px");
      $("#bjr2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#bjr2").removeClass("selected");
    },
  });
  $("#bjr3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjr3").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjr3").css("background-position-x", -o.offset.left + "px");
      $("#bjr3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#bjr3").removeClass("selected");
    },
  });
  $("#bjr4").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#bjr4").addClass("selected");
    },
    drag: function (e, o) {
      $("#bjr4").css("background-position-x", -o.offset.left + "px");
      $("#bjr4").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#bjr4").removeClass("selected");
    },
  });
  $("#shr1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shr1").addClass("selected");
    },
    drag: function (e, o) {
      $("#shr1").css("background-position-x", -o.offset.left + "px");
      $("#shr1").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shr1").removeClass("selected");
    },
  });
  $("#shr2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shr2").addClass("selected");
    },
    drag: function (e, o) {
      $("#shr2").css("background-position-x", -o.offset.left + "px");
      $("#shr2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shr2").removeClass("selected");
    },
  });
  $("#shr3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shr3").addClass("selected");
    },
    drag: function (e, o) {
      $("#shr3").css("background-position-x", -o.offset.left + "px");
      $("#shr3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shr3").removeClass("selected");
    },
  });
  $("#shr4").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#shr4").addClass("selected");
    },
    drag: function (e, o) {
      $("#shr4").css("background-position-x", -o.offset.left + "px");
      $("#shr4").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#shr4").removeClass("selected");
    },
  });
  $("#ktr1").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#ktr1").addClass("selected");
    },
    drag: function (e, o) {
      $("#ktr1").css("background-position-x", -o.offset.left + "px");
      $("#ktr1").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#ktr1").removeClass("selected");
    },
  });
  $("#ktr2").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#ktr2").addClass("selected");
    },
    drag: function (e, o) {
      $("#ktr2").css("background-position-x", -o.offset.left + "px");
      $("#ktr2").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#ktr2").removeClass("selected");
    },
  });
  $("#ktr3").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#ktr3").addClass("selected");
    },
    drag: function (e, o) {
      $("#ktr3").css("background-position-x", -o.offset.left + "px");
      $("#ktr3").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#ktr3").removeClass("selected");
    },
  });
  $("#ktr4").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#ktr4").addClass("selected");
    },
    drag: function (e, o) {
      $("#ktr4").css("background-position-x", -o.offset.left + "px");
      $("#ktr4").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#ktr4").removeClass("selected");
    },
  });
  $("#ktr5").draggable({
    containment: "window",
    scroll: false,
    start: function (e, o) {
      $("#ktr5").addClass("selected");
    },
    drag: function (e, o) {
      $("#ktr5").css("background-position-x", -o.offset.left + "px");
      $("#ktr5").css("background-position-y", -o.offset.top + "px");
    },
    stop: function (e, o) {
      $("#ktr5").removeClass("selected");
    },
  });
});
