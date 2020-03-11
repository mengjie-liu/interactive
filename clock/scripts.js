var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var objectScale = 0.375;

var HObject, DObject, MObject, YObject;

var clock = new THREE.Clock();

var time, delta;

var mtlLoader1 = new THREE.MTLLoader();
mtlLoader1.setPath('assets/');
mtlLoader1.load('day.mtl', function (materials) {
    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('assets/');
    objLoader.load('hour.obj', function (object) {
        object.position.y -= 90;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
        HObject = object;
    });
    objLoader.load('day.obj', function (object) {
        object.position.y -= 90;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
        DObject = object;
    });
    objLoader.load('month.obj', function (object) {
        object.position.y -= 90;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
        MObject = object;
    });
    objLoader.load('year.obj', function (object) {
        object.position.y -= 90;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
        YObject = object;
    });
    objLoader.load('ring.obj', function (object) {
        object.position.y -= 90;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
    });
    /*objLoader.load('day.obj', function (object) {
        object.position.y -= 80;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
    });
    objLoader.load('month.obj', function (object) {
        object.position.y -= 80;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
    });
    objLoader.load('year.obj', function (object) {
        object.position.y -= 80;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
    });
    objLoader.load('ring.obj', function (object) {
        object.position.y -= 80;
        object.scale.set(objectScale, objectScale, objectScale);
        scene.add(object);
    });*/
});

function rotate(){
    /*time = clock.getElapsedTime();
    delta = clock.getDelta();*/
    HObject.rotation.y += 0.35 * Math.PI / 180;
    DObject.rotation.y += 0.35 * Math.PI / 180 / 12;
    MObject.rotation.y += 0.35 * Math.PI / 180 / 12 / 4;
    YObject.rotation.y += 0.35 * Math.PI / 180 / 12 / 4 / 7;
    }

var animate = function () {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render(scene, camera);
    rotate();
};

animate();