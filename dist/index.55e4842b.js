window.onload = function() {
    createBox();
    createPyramid();
    createCircle();
};
function createBox() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color("#ff94f1"); // Set background color of the scene
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    var renderer = new THREE.WebGLRenderer();
    var canvas = document.getElementById("box-canvas");
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    canvas.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 5, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x0000ff
    });
    var box = new THREE.Mesh(geometry, material);
    scene.add(box);
    camera.position.set(0, 0, 5);
    function animate() {
        requestAnimationFrame(animate);
        //   box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}
function createPyramid() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color("#1c47ff"); // Set background color of the scene
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    var renderer = new THREE.WebGLRenderer();
    var canvas = document.getElementById("pyramid-canvas");
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    canvas.appendChild(renderer.domElement);
    var geometry = new THREE.ConeGeometry(1, 7, 4);
    var material = new THREE.MeshBasicMaterial({
        color: "#d6a3fb"
    });
    var pyramid = new THREE.Mesh(geometry, material);
    scene.add(pyramid);
    camera.position.set(0, 0, 10);
    function animate() {
        requestAnimationFrame(animate);
        //   pyramid.rotation.x += 0.01;
        pyramid.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}
function createCircle() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color("#d6a3fb"); // Set background color of the scene
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    var renderer = new THREE.WebGLRenderer();
    var canvas = document.getElementById("circle-canvas");
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    canvas.appendChild(renderer.domElement);
    var geometry = new THREE.TorusGeometry(6, 3, 16, 100);
    var material = new THREE.MeshBasicMaterial({
        color: "yellow"
    });
    var circle = new THREE.Mesh(geometry, material);
    scene.add(circle);
    camera.position.set(0, 0, 100);
    function animate() {
        requestAnimationFrame(animate);
        circle.rotation.y += 0.01;
        //   circle.rotation.z += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

//# sourceMappingURL=index.55e4842b.js.map
