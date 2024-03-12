import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xeb4034});
const cube = new THREE.Mesh(geometry, material);

const geo = new THREE.EdgesGeometry(cube.geometry) // or WireframeGeometry
const mat = new THREE.LineBasicMaterial({ 
    color: 0xffffff,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1 
});
const wire = new THREE.LineSegments(geo, mat);
cube.add(wire);;
scene.add(cube);


camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01
    cube.rotation.y += 0.02
    renderer.render(scene, camera);
}
animate();