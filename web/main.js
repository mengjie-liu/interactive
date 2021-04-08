var container, controls;

var camera, scene, renderer;

var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var object;

var ratio;

var isMoblie = false;

if ($(window).width() <= 600) {
  isMoblie = true;
}

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
    // object.traverse(function (child) {
    //   if (child instanceof THREE.Mesh) child.material.map = texture;
    // });

    object.material = new THREE.MeshPhongMaterial({ color: 0x000000 });

    if (isMoblie == false) {
      object.position.x = 10;
      object.position.y = -2;
      object.rotateY(-0.9);
      object.scale.set(0.15, 0.15, 0.15);
    } else {
      object.position.y = -1;
      object.position.z = -10;
      object.rotateY(-0.5);
      object.scale.set(0.1, 0.1, 0.1);
    }
    scene.add(object);
  }

  var manager = new THREE.LoadingManager(loadModel);

  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };

  // texture

  // var textureLoader = new THREE.TextureLoader(manager);

  // var texture = textureLoader.load("os/osh.mtl");
  // object.traverse(function (child) {
  //   if (child instanceof THREE.Mesh) {
  //     child.material.map = texture;
  //   }
  // });

  // model

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log("model " + Math.round(percentComplete, 2) + "% downloaded");
    }
  }

  function onError() {}

  var loader = new THREE.OBJLoader(manager);

  if (isMoblie == false) {
    loader.load(
      "os/osh.obj",
      function (obj) {
        object = obj;
      },
      onProgress,
      onError
    );
  } else {
    loader.load(
      "os/osmb.obj",
      function (obj) {
        object = obj;
      },
      onProgress,
      onError
    );
  }

  // renderer = new THREE.WebGLRenderer({ antialias: true });
  var canvas = document.querySelector("#c");
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  if (isMoblie == false) {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
  }
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  ratio = $(window).width() / $(window).height();
  // console.log(ratio);
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

// scene.background = new THREE.Color("rgb(255, 255, 255)");

// let bcloader = new THREE.TextureLoader();

// $("canvas").after(`<div id="link">
// <a href="https://yaleschoolofart.viewingrooms.com/">virtual studios</a>
// </div>`);

if (isMoblie == false) {
  $("#c").after(`<div id="participants">
<a href="/"><span class="cuty">*&nbsp;</span>participants<span class="cuty">&nbsp;*</span></a>
</div>`);
} else {
  $("#c").css("z-index", "-1");
  $("#info").append(`<div id="participants">
  <a href="/"><span class="cuty">*&nbsp;</span>participants<span class="cuty">&nbsp;*</span></a>
  </div>`);
  $("#info").css("margin-bottom", "5%");
  // $("#secondPP").css("display", "none");
}

if (isMoblie == false) {
  $("#participants").hover(
    function () {
      $(this).find(".cuty").css("visibility", "visible");
    },
    function () {
      $(this).find(".cuty").css("visibility", "hidden");
    }
  );
  $("#back").hover(
    function () {
      $(this).find(".cuty").css("visibility", "visible");
    },
    function () {
      $(this).find(".cuty").css("visibility", "hidden");
    }
  );
  $("#link").hover(
    function () {
      $(this).find(".cuty").css("visibility", "visible");
    },
    function () {
      $(this).find(".cuty").css("visibility", "hidden");
    }
  );
  $("#participants").on("click", function (e) {
    e.preventDefault();
    $("canvas").css("z-index", "-1");
    $("#first").css("display", "none");
    $("#second").css("display", "block");
    $(this).css("display", "none");
    $("#back").css("display", "block");
  });

  $("#back").on("click", function (e) {
    e.preventDefault();
    $("#c").css("z-index", "10");
    $("#second").css("display", "none");
    $("#first").css("display", "block");
    $(this).css("display", "none");
    $("#participants").css("display", "block");
    $("canvas").css("background-image", "none");
    // scene.background = new THREE.Color("rgb(255, 255, 255)");
  });
  $(".name").hover(
    function () {
      $(".name").css("visibility", "hidden");
      $(this).css("visibility", "visible");
      $(this).find(".cuty").css("visibility", "visible");
      let id = $(this).attr("id");
      // bcloader.load(`img/${id}.jpg`, function (texture) {
      //   // let img=texture.image;
      //   // bgWidth= img.width;
      //   // bgHeight = img.height;
      //   scene.background = texture;
      // });
      $("#c").css("background-image", `url("img/${id}.jpg")`);
      // console.log($("#c").css("background"));
    },
    function () {
      $(".name").css("visibility", "visible");
      $(this).find(".cuty").css("visibility", "hidden");
      $("canvas").css("background-image", "none");
    }
  );
} else {
  $("#participants").click(function (e) {
    e.preventDefault();
    $(this).find(".cuty").css("visibility", "visible");
    $("#back").find(".cuty").css("visibility", "hidden");
    $("#links").find(".cuty").css("visibility", "hidden");
    $(".name").find(".cuty").css("visibility", "hidden");
    $("canvas").css("z-index", "-1");
    $("#first").css("display", "none");
    $("#second").css("display", "block");
    $(this).css("display", "none");
    $("#back").css("display", "block");
  });
  $("#back").click(function (e) {
    e.preventDefault();
    $("#second").css("display", "none");
    $("#first").css("display", "block");
    $(this).css("display", "none");
    $("#participants").css("display", "block");
    $("canvas").css("background-image", "none");
    $(this).find(".cuty").css("visibility", "visible");
    $("#links").find(".cuty").css("visibility", "hidden");
    $("#participants").find(".cuty").css("visibility", "hidden");
    $(".name").find(".cuty").css("visibility", "hidden");
    // scene.background = new THREE.Color("rgb(255, 255, 255)");
  });
  $("#link").click(function () {
    $(this).find(".cuty").css("visibility", "visible");
    $("#participants").find(".cuty").css("visibility", "hidden");
    $("#back").find(".cuty").css("visibility", "hidden");
    $(".name").find(".cuty").css("visibility", "hidden");
  });
  $(".name").click(function (e) {
    e.preventDefault();
    $(".name").find(".cuty").css("visibility", "hidden");
    $("#participants").find(".cuty").css("visibility", "hidden");
    $("#back").find(".cuty").css("visibility", "hidden");
    $("#links").find(".cuty").css("visibility", "hidden");
    $(this).find(".cuty").css("visibility", "visible");
    let id = $(this).attr("id");
    $("#c").css("background-image", `url("img/${id}.jpg")`);
  });
}
