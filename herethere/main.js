$(function () {
  function start() {
    $("#ths").css({
      transition: "all 2s ease-out",
      filter: "blur(0)",
    });
    $("#hs").find("#herew").css({
      transition: "all 2.8s ease-out",
      filter: "blur(10px)",
    });
  }
  start();
  $("#start").delay(2400).fadeOut(1200);

  var place = [
    {
      src: "BNKeO3Pjo5c",
      loc: "VIRGIN ISLANDS",
    },
    {
      src: "4UYV_qFTnys",
      loc: "ICELAND",
    },
    {
      src: "6Dp_EwstjOE",
      loc: "HAWAII",
    },
    {
      src: "KV9KLAMFCsA",
      loc: "MEXICO",
    },
    {
      src: "lqPSQBvq9lQ",
      loc: "MEXICO",
    },
    {
      src: "bW0fJ2PyihQ",
      loc: "CHINA",
    },
    {
      src: "ysmmWXPtevg",
      loc: "CHINA",
    },
    {
      src: "QImncm7lr2w",
      loc: "CHINA",
    },
    {
      src: "ZIabjJhOBr8",
      loc: "NEPAL",
    },
    {
      src: "8hgQsI1CfsY",
      loc: "ROMANIA",
    },
    {
      src: "RM4ZMfxxnus",
      loc: "PORTO SANTO",
    },
    {
      src: "K95E30qdGHw",
      loc: "SOUTH AFRICA",
    },
    {
      src: "hvOtuUgzBsw",
      loc: "RUSSIA",
    },
    {
      src: "biZUJHgwm0M",
      loc: "RUSSIA",
    },
    {
      src: "9pxgWLzW07Y",
      loc: "VIETNAM",
    },
    {
      src: "Nqm28breGxs",
      loc: "MAURITIUS",
    },
    {
      src: "rH6eWspBqWU",
      loc: "KYRGYZSTAN",
    },
    {
      src: "RVibIY8u5-E",
      loc: "THAILAND",
    },
    {
      src: "lplCO6ZIPtg",
      loc: "NEW CALEDONIA",
    },
    {
      src: "TiH7_P0EOLc",
      loc: "NEW ZEALAND",
    },
    {
      src: "vwTEq6nuP48",
      loc: "SPAIN",
    },
    {
      src: "mpd2CHIgJ9A",
      loc: "SPAIN",
    },
    {
      src: "AHcDFwaLuKE",
      loc: "FRANCE",
    },
    {
      src: "1z2coTLH6rQ",
      loc: "FRANCE",
    },
    {
      src: "dz771T7Go98",
      loc: "ALASKA",
    },
    {
      src: "q29jNDSdAzQ",
      loc: "UNITED KINGDOM",
    },
    {
      src: "vZd9GMBnDzY",
      loc: "UNITED KINGDOM",
    },
    {
      src: "St7aTfoIdYQ",
      loc: "UNITED KINGDOM",
    },
    {
      src: "s7hega58ZPk",
      loc: "UNITED KINGDOM",
    },
    {
      src: "6nuRX8rPdV4",
      loc: "NETHERLANDS",
    },
    {
      src: "VYkMYtrNl1I",
      loc: "NETHERLANDS",
    },
    {
      src: "Pkl6l9aie6U",
      loc: "CANADA",
    },
    {
      src: "O4hSj_1bUUM",
      loc: "FINLAND",
    },
    {
      src: "Wax6aoy63cE",
      loc: "KOREA",
    },
    {
      src: "IIXdPJyJibk",
      loc: "JAPAN",
    },
    {
      src: "aGctm3FW89U",
      loc: "JAPAN",
    },
    {
      src: "1jUNKr0ycPU",
      loc: "JAPAN",
    },
    {
      src: "jDP1TUu_EGg",
      loc: "JAPAN",
    },
    {
      src: "TyElel0QjCI",
      loc: "SWITZERLAND",
    },
    {
      src: "RKzSpQoIazw",
      loc: "MALAYSIA",
    },
    {
      src: "rWTszm8UTD0",
      loc: "TUTKS AND CAICOS",
    },
    {
      src: "spSn_4cLh0k",
      loc: "SWEDEN",
    },
    {
      src: "P393gTj527k",
      loc: "ITALY",
    },
    {
      src: "CNLGARxMO9U",
      loc: "MOROCCO",
    },
    {
      src: "zTBOorb0Cj4",
      loc: "GERMANY",
    },
    {
      src: "05lBVgQNKi0",
      loc: "CHILE",
    },
    {
      src: "49Uyt7XBvWw",
      loc: "GREECE",
    },
    {
      src: "474m3prRZDY",
      loc: "PORTUGAL",
    },
    {
      src: "xtDlbGOX470",
      loc: "BELGIUM",
    },
    {
      src: "PywaOYvf4P4",
      loc: "CROATIA",
    },
    {
      src: "_3ALAThPuDo",
      loc: "SERBIA",
    },
    {
      src: "IELAhyaUKVk",
      loc: "HUNGARY",
    },
    {
      src: "Eg5BGHCdY30",
      loc: "BELARUS",
    },
    {
      src: "63LZZrM4miI",
      loc: "DENMARK",
    },
    {
      src: "JJuaHGhd8g8",
      loc: "NORWAY",
    },
  ];
  $("#there")
    .on("mouseenter", function () {
      $(this).find("#white").fadeOut("slow");
      $(this).find("#therel").fadeIn("fast");
      $(this).css({
        transition: "all 0.5s ease-out",
        filter: "blur(0)",
        "box-shadow": "0 0 50px 8px rgba(0, 0, 0, 0.85)",
      });
      $("#here").css({
        transition: "all 0.5s ease-out",
        filter: "blur(10px)",
      });
    })
    .on("mouseleave", function () {
      var ind = Math.floor(Math.random() * place.length);
      var src = place[ind].src;
      var loc = place[ind].loc;
      console.log(ind);
      $(this)
        .find(".skymv")
        .attr(
          "src",
          `http://www.youtube.com/embed/${src}?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&showinfo=0`
        );
      console.log(src);
      $(this).find("#therel").hide().html(`${loc}`);
      $(this).find("#white").show();
      $("#therew").fadeIn("slow");
      $(this).css({
        transition: "all 0.5s ease-out",
        filter: "blur(10px)",
        "box-shadow": "",
      });
      $("#here").css({
        transition: "all 0.5s ease-out",
        filter: "",
      });
    });
});
