var container, controls;

var camera, scene, renderer;

var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var object;

init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 50;

  // scene

  scene = new THREE.Scene();

  // background

  //   scene.background = new THREE.Color("rgb(255, 255, 255)");

  scene.add(camera);

  // manager

  function loadModel() {
    object.traverse(function (child) {
      if (child.isMesh) child.material.map = texture;
    });

    object.position.x = 10;
    object.position.y = -2;
    object.rotateY(-0.9);
    object.scale.set(0.15, 0.15, 0.15);
    scene.add(object);
  }

  var manager = new THREE.LoadingManager(loadModel);

  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };

  // texture

  var textureLoader = new THREE.TextureLoader(manager);

  var texture = textureLoader.load("os/osh.mtl");

  // model

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log("model " + Math.round(percentComplete, 2) + "% downloaded");
    }
  }

  function onError() {}

  var loader = new THREE.OBJLoader(manager);

  loader.load(
    "os/osh.obj",
    function (obj) {
      object = obj;
    },
    onProgress,
    onError
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  //renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  if (object) {
    object.rotation.y += 0.00225;
  }
  renderer.render(scene, camera);
}

scene.background = new THREE.Color("rgb(255, 255, 255)");

let bcloader = new THREE.TextureLoader();

// $("canvas").after(`<div id="link">
// <a href="https://yaleschoolofart.viewingrooms.com/">virtual studios</a>
// </div>`);

$("canvas").after(`<div id="participants">
<a href="/"><span class="cuty">*&nbsp;</span>participants<span class="cuty">&nbsp;*</span></a>
</div>`);

// var isP = false;

$("#participants").hover(
  function () {
    $(this).find(".cuty").css("visibility", "visible");
  },
  function () {
    $(this).find(".cuty").css("visibility", "hidden");
  }
);
$("#participants").on("click", function (e) {
  e.preventDefault();
  $("#first").css("display", "none");
  $("#second").css("display", "block");
  $(this).css("display", "none");
  $("#back").css("display", "block");
});

$("#back").hover(
  function () {
    $(this).find(".cuty").css("visibility", "visible");
  },
  function () {
    $(this).find(".cuty").css("visibility", "hidden");
  }
);
$("#back").on("click", function (e) {
  e.preventDefault();
  $("#second").css("display", "none");
  $("#first").css("display", "block");
  $(this).css("display", "none");
  $("#participants").css("display", "block");
});

$("#link").hover(
  function () {
    $(this).find(".cuty").css("visibility", "visible");
  },
  function () {
    $(this).find(".cuty").css("visibility", "hidden");
  }
);

$(".name").hover(
  function () {
    $(".name").css("visibility", "hidden");
    $(this).css("visibility", "visible");
    $(this).find(".cuty").css("visibility", "visible");
    let id = $(this).attr("id");
    bcloader.load(`img/${id}.jpg`, function (texture) {
      scene.background = texture;
    });
  },
  function () {
    $(".name").css("visibility", "visible");
    $(this).find(".cuty").css("visibility", "hidden");
    scene.background = new THREE.Color("rgb(255, 255, 255)");
  }
);
