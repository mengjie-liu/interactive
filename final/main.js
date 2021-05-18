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
  "My ear was a bit muffled.</br>I could hear people talking in a distance.</br>It sounds like a murmur in my ear.",
  "My sleep on plane was fragmented.</br>10 minutes; half an hour; an hour.</br>These pieces of sleep were connected and mixed together</br>by the noise.</br>Like a long, long dream.",
  "I wondered what time it was,</br>and where I was.",
  "Waking up,</br>I found people around me still sleeping.</br>Feeling a sense of loneliness,</br>I closed my eyes.",
  `“One does not belong to anywhere when they are in air.”</br>I thought it was so true.</br>Not only physically, but also temporally, emotionally,</br>belonged to nowhere.`,
  "Time seemed to have been dragged so long when I was awake.</br>As if I had fallen into the gap between two continuous seconds.",
  "I put my hand on the window.</br>It felt cold.",
  "It was weird to think about how a place so crowded</br>as a plane cabin can be so deadly quiet.</br>People were either on their earphones or in their dreams.</br>There was only the noise,</br>so loud.",
  "I missed home,</br>and I also started to miss New Haven.",
  "14 hours,</br>840minutes,</br>50400seconds.</br>Heart beats one time every second,</br>during which hundred lightning strikes hit the ground.</br>Time is possibility,</br>so is noise.",
  "I could see people staring at their screens.</br>It seemed like people were always attracted by these</br>little glowing interactive surfaces,</br>underneath which there was another world.",
  "I opened the window shade a bit.</br>It was brighter outside even though it was night.</br>The light coming inside was kind of dazzling.</br>Was is noise to others who were sleeping?",
  "Do people use noise to discribe quietness?</br>Is there such thing as noisy silence?",
  "The plane was bearly moving on the map.</br>Home was far away.",
  "It is said the noise was caused by high speed travel in space.",
];

$(function () {
  $(window).scroll(function () {
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
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
