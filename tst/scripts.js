var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 120, window.innerWidth/window.innerHeight, 0.1, 2200 );
camera.position.z = 600;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-500, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(500, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(500, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var objectScale = 0.6;

// var DObject, WObject, MObject, YObject, rings;

var clock = new THREE.Clock();

var OBA


    var mtlLoader1 = new THREE.MTLLoader();
mtlLoader1.setPath('assets/');
mtlLoader1.load('tst.mtl', function (materials) {
    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('assets/');
    objLoader.load('tst.obj', function (object) {
        object.position.y -= 90;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
        OBA=object;
    });
});



function rotate(){
    OBA.rotation.x += -0.0001;
    OBA.rotation.y += -0.00025;
    OBA.rotation.z += -0.00065;
    }

var animate = function () {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render(scene, camera);

    rotate();
};

animate();