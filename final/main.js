var synth = new Tone.PolySynth(8, Tone.Synth).toMaster();
var notes = Tone.Frequency("C1").harmonize([0, 3, 7, 11, 13]);
var noise = new Tone.Noise("brown").start();
var autoFilter = new Tone.AutoFilter({
  frequency: "4m",
  depth: 0.1,
  min: 800,
  max: 5000,
}).connect(Tone.Master);

noise.connect(autoFilter);
autoFilter.start();

StartAudioContext(Tone.context, window, function () {});

var blurr = 0;
var opacity = 1;

var srcArry = [
  "sky1.png",
  "sky2.png",
  "sky3.png",
  "sky4.png",
  "sky5.png",
  "sky6.png",
  "sky7.png",
  "sky8.png",
  "sky9.png",
  "sky10.png",
  "sky11.png",
  "sky12.png",
  "sky13.png",
  "sky14.png",
  "sky15.png",
];

var textArry = [
  "My ear was a bit muffled.</br>I could hear people talking in&nbsp;a&nbsp;distance.</br>It sounds like a murmur in&nbsp;my&nbsp;ear.",
  "My sleep on plane was fragmented.</br>10&nbsp;minutes; half&nbsp;an&nbsp;hour; an&nbsp;hour.</br>These pieces of sleep were connected and mixed&nbsp;together</br>by the noise.</br>Like a long, long dream.",
  "I wondered what&nbsp;time&nbsp;it&nbsp;was,</br>and where I was.",
  "Waking up,</br>I found people around me still&nbsp;sleeping.</br>Feeling a sense of loneliness,</br>I closed my eyes.",
  `“One does not belong to anywhere when they&nbsp;are in&nbsp;air.”</br>I thought it was so true.</br>Not only physically, but also temporally, emotionally,</br>belonged to nowhere.`,
  "Time seemed to have been dragged so long when&nbsp;I&nbsp;was&nbsp;awake.</br>As if I had fallen into the gap between two&nbsp;continuous&nbsp;seconds.",
  "I put my hand on the window.</br>It felt cold.",
  "It was weird to think about how a&nbsp;place&nbsp;so&nbsp;crowded</br>as a plane cabin can be so&nbsp;deadly&nbsp;quiet.</br>People were either on&nbsp;their&nbsp;earphones or in&nbsp;their&nbsp;dreams.</br>There was only the noise,</br>so loud.",
  "I missed home,</br>and I also started to miss New&nbsp;Haven.",
  "14 hours,</br>840minutes,</br>50400seconds.</br>Heart beats one time every second,</br>during which hundred lightning strikes hit&nbsp;the&nbsp;ground.</br>Time is possibility,</br>so is noise.",
  "I could see people staring at their&nbsp;screens.</br>It seemed like people were always attracted</br>by these little&nbsp;glowing&nbsp;interactive&nbsp;surfaces,</br>underneath which there was another&nbsp;world.",
  "I opened the window shade a&nbsp;bit.</br>It was brighter outside even&nbsp;though it was night.</br>The light coming inside was kind&nbsp;of dazzling.</br>Was is noise to others who&nbsp;were&nbsp;sleeping?",
  "Do people use noise to&nbsp;discribe&nbsp;quietness?</br>Is there such thing as noisy&nbsp;silence?",
  "The plane was bearly moving on&nbsp;the&nbsp;map.</br>Home was far away.",
  "It is said the noise was caused&nbsp;by the&nbsp;high&nbsp;speed&nbsp;travel in&nbsp;space.",
];

$(function () {
  $(window)
    .bind("click", function () {
      $("#start").fadeOut();
      $("body").css("overflow-y", "scroll");
    })
    .bind("scroll", function () {
      var st = $(this).scrollTop();
      var numI;
      var numT;
      $(".blurry").css({
        "text-shadow": "0 0 " + blurr + "px rgba(255, 255, 255, 1)",
        opacity: 1 - opacity,
        "animation-play-state": "paused",
      });
      $(".prompt").css({
        "text-shadow": "0 0 " + blurr + "px rgba(255, 255, 255, 1)",
        opacity: 1 - opacity,
        cursor: "default",
      });
      var ht = $(window).height() - 15;
      blurr = scale(st, 15, ht, 0, 95);
      opacity = scale(st, 15, ht, 0, 1);

      if (st > ht) {
        numT = Math.floor(Math.random() * textArry.length);
        $(".blurry").html(textArry[numT]);
      }

      if (st < 15) {
        numI = Math.floor(Math.random() * srcArry.length) + 1;
        $("#out").css("background-image", `url(sky/sky${numI}.png)`);
      }
    });
  // $(window).scroll(function () {
  //   var st = $(this).scrollTop();
  //   var numI;
  //   var numT;
  //   $(".blurry").css({
  //     "text-shadow": "0 0 " + blurr + "px rgba(255, 255, 255, 1)",
  //     opacity: 1 - opacity,
  //     "animation-play-state": "paused",
  //   });
  //   $(".prompt").css({
  //     "text-shadow": "0 0 " + blurr + "px rgba(255, 255, 255, 1)",
  //     opacity: 1 - opacity,
  //     cursor: "default",
  //   });
  //   var ht = $(window).height() - 15;
  //   blurr = scale(st, 15, ht, 0, 95);
  //   opacity = scale(st, 15, ht, 0, 1);

  //   if (st > ht) {
  //     numT = Math.floor(Math.random() * textArry.length);
  //     $(".blurry").html(textArry[numT]);
  //   }

  //   if (st < 15) {
  //     numI = Math.floor(Math.random() * srcArry.length) + 1;
  //     $("#out").css("background-image", `url(sky/sky${numI}.png)`);
  //   }
  // });
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
