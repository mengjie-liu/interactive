$(function () {
  function start() {
    $("#ths").css({
      transition: "all 2.5s ease-out",
      filter: "blur(0)",
    });
    $("#hs").find("#herew").css({
      transition: "all 2.8s ease-out",
      filter: "blur(10px)",
    });
  }
  start();
  $("#start").delay(3000).fadeOut(1800);

  var place = [
    {
      src: "UfsrZH5Guh8",
      loc: "ARGENTINA",
    },
    {
      src: "dz771T7Go98",
      loc: "ALASKA",
    },
    {
      src: "tQBGH__Fq_0",
      loc: "AUSTRIA",
    },
    {
      src: "IcMAnY45jh0",
      loc: "AUSTRIA",
    },
    {
      src: "Eg5BGHCdY30",
      loc: "BELARUS",
    },
    {
      src: "xtDlbGOX470",
      loc: "BELGIUM",
    },
    {
      src: "R4C8CFHAE9s",
      loc: "BRAZIL",
    },
    {
      src: "r_XFhbOQ-Jo",
      loc: "BELIZE",
    },
    {
      src: "CwriDd8STdI",
      loc: "CANADA",
    },
    {
      src: "Pkl6l9aie6U",
      loc: "CANADA",
    },
    // {
    //   src: "bW0fJ2PyihQ",
    //   loc: "CHINA",
    // },
    // {
    //   src: "ysmmWXPtevg",
    //   loc: "CHINA",
    // },
    // {
    //   src: "QImncm7lr2w",
    //   loc: "CHINA",
    // },
    // {
    //   src: "FPfv3-dC1Po",
    //   loc: "CHINA",
    // },
    // {
    //   src: "z1G5UBjrIqk",
    //   loc: "CHINA",
    // },
    // {
    //   src: "E1RnyWaqW0g",
    //   loc: "CHINA",
    // },
    {
      src: "05lBVgQNKi0",
      loc: "CHILE",
    },
    {
      src: "EeczYgoKscY",
      loc: "CROATIA",
    },
    // {
    //   src: "peUcdmkOl0g",
    //   loc: "CROATIA",
    // },
    {
      src: "2WlP-Ley24M",
      loc: "CZECH REPUCLIC",
    },
    {
      src: "G-HQXzyK3J8",
      loc: "CZECH REPUCLIC",
    },
    {
      src: "63LZZrM4miI",
      loc: "DENMARK",
    },
    {
      src: "O4hSj_1bUUM",
      loc: "FINLAND",
    },
    {
      src: "1YHlbJPjPTY",
      loc: "FINLAND",
    },
    {
      src: "SOlad2gSLLY",
      loc: "FRANCE",
    },
    {
      src: "YW26PbnvVeo",
      loc: "FRANCE",
    },
    {
      src: "MkbD1at6FIU",
      loc: "FRANCE",
    },
    {
      src: "8AlvjQmJXuY",
      loc: "FRANCE",
    },
    {
      src: "1zcs2E7pTsw",
      loc: "GERMANY",
    },
    {
      src: "z7pPI27r98c",
      loc: "GERMANY",
    },
    {
      src: "aKHL8BvDX4Y",
      loc: "GERMANY",
    },
    // {
    //   src: "zTBOorb0Cj4",
    //   loc: "GERMANY",
    // },
    {
      src: "ow_b28kDOp4",
      loc: "GREECE",
    },
    {
      src: "49Uyt7XBvWw",
      loc: "GREECE",
    },
    {
      src: "37I7Z6c9x2g",
      loc: "GREECE",
    },
    {
      src: "wnNrd-VjLsQ",
      loc: "HAWAII",
    },
    {
      src: "eAqRDf_30gc",
      loc: "HAWAII",
    },
    {
      src: "IELAhyaUKVk",
      loc: "HUNGARY",
    },
    {
      src: "1wiUvnIjpjQ",
      loc: "ICELAND",
    },
    {
      src: "P393gTj527k",
      loc: "ITALY",
    },
    // {
    //   src: "Vl4k_K0DbJc",
    //   loc: "ITALY",
    // },
    {
      src: "Yk6GX8DLjFs",
      loc: "ITALY",
    },
    {
      src: "Ou3G2W6m_R0",
      loc: "ITALY",
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
      src: "AcBvgPTL9cg",
      loc: "JAPAN",
    },
    {
      src: "jDP1TUu_EGg",
      loc: "JAPAN",
    },
    {
      src: "n3B8fp-Henc",
      loc: "JAPAN",
    },
    {
      src: "jSscBCKZd3Q",
      loc: "KOREA",
    },
    {
      src: "5Ya0zhPc3RQ",
      loc: "KOREA",
    },
    {
      src: "rH6eWspBqWU",
      loc: "KYRGYZSTAN",
    },
    {
      src: "UDB2VQ8gdaQ",
      loc: "LITHUANIA",
    },
    // {
    //   src: "RKzSpQoIazw",
    //   loc: "MALAYSIA",
    // },
    {
      src: "Nqm28breGxs",
      loc: "MAURITIUS",
    },
    {
      src: "KV9KLAMFCsA",
      loc: "MEXICO",
    },
    {
      src: "CxN7mqXJp3Y",
      loc: "MEXICO",
    },
    {
      src: "bvBj6qW4YuI",
      loc: "MEXICO",
    },
    // {
    //   src: "CNLGARxMO9U",
    //   loc: "MOROCCO",
    // },
    {
      src: "ZIabjJhOBr8",
      loc: "NEPAL",
    },
    {
      src: "pYHnnofbaeo",
      loc: "NEPAL",
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
      src: "lplCO6ZIPtg",
      loc: "NEW CALEDONIA",
    },
    {
      src: "TiH7_P0EOLc",
      loc: "NEW ZEALAND",
    },
    {
      src: "JJuaHGhd8g8",
      loc: "NORWAY",
    },
    {
      src: "wfLL0FucDcs",
      loc: "NORWAY",
    },
    {
      src: "EanBMU1c--Q",
      loc: "PORTO SANTO",
    },
    {
      src: "474m3prRZDY",
      loc: "PORTUGAL",
    },
    {
      src: "SrEUsQKicYQ",
      loc: "PORTUGAL",
    },
    {
      src: "8hgQsI1CfsY",
      loc: "ROMANIA",
    },
    {
      src: "rbx2UIzG7Hc",
      loc: "ROMANIA",
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
      src: "YsKBWIn7s14",
      loc: "RUSSIA",
    },
    {
      src: "NZcky_UrtMI",
      loc: "SAINT BARTHELEMY",
    },
    {
      src: "SMCTaGQkfTw",
      loc: "SINGAPORE",
    },
    {
      src: "bgzOg9CUpiw",
      loc: "SLOVENIA",
    },
    {
      src: "7TEsJz9mw1c",
      loc: "SLOVENIA",
    },
    {
      src: "Q2WVM_hQUGU",
      loc: "SOUTH AFRICA",
    },
    {
      src: "8vi6xdfMVP0",
      loc: "SOUTH AFRICA",
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
      src: "eG-vxkpLh9g",
      loc: "SPAIN",
    },
    {
      src: "spSn_4cLh0k",
      loc: "SWEDEN",
    },
    {
      src: "fp39XWPMqag",
      loc: "SWEDEN",
    },
    {
      src: "yDKJMdZTEXQ",
      loc: "SWITZERLAND",
    },
    {
      src: "jtLh8BdmHUU",
      loc: "SWITZERLAND",
    },
    {
      src: "RVibIY8u5-E",
      loc: "THAILAND",
    },
    {
      src: "_j0mKXL4KBI",
      loc: "THAILAND",
    },
    {
      src: "rWTszm8UTD0",
      loc: "TUTKS AND CAICOS",
    },
    {
      src: "3RZzpU1CW-c",
      loc: "UKRAINE",
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
      src: "ytPsiuXqcNY",
      loc: "UNITED KINGDOM",
    },
    {
      src: "AQoIwfphyVo",
      loc: "UNITED STATES",
    },
    {
      src: "ZuoL3P2dgmg",
      loc: "UNITED STATES",
    },
    {
      src: "yz5Kl9nAuCc",
      loc: "UNITED STATES",
    },
    {
      src: "nPsaWA2HkCY",
      loc: "UNITED STATES",
    },
    {
      src: "5YfhVctquIU",
      loc: "UNITED STATES",
    },
    {
      src: "ovn3lz0iZYQ",
      loc: "UNITED STATES",
    },
    {
      src: "wJku9791Jhg",
      loc: "VATICAN",
    },
    {
      src: "9pxgWLzW07Y",
      loc: "VIETNAM",
    },
    {
      src: "l1BmW6e2QLM",
      loc: "VIETNAM",
    },
    {
      src: "BNKeO3Pjo5c",
      loc: "VIRGIN ISLANDS",
    },
    {
      src: "m7c12NY6xok",
      loc: "VIRGIN ISLANDS",
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
