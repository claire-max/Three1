import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x9902 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
  .fill()
  .map(() => THREE.MathUtils.randFloatSpread(100));

star.position.set(x, y, z);
scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('space1.jpg');
scene.background = spaceTexture;

const claireTexture = new THREE.TextureLoader().load('claire.png');

const claire = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: claireTexture }));

scene.add(claire);


const sunTexture = new THREE.TextureLoader().load('sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('venus.jpg');
const earthTexture = new THREE.TextureLoader().load('earth.jpg');
const marsTexture = new THREE.TextureLoader().load('mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('saturn.jpg');
const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: normalTexture,
  })
  );

  const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: mercuryTexture,
      normalMap: normalTexture,
    })

);

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
    normalMap: normalTexture,
  })

);

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: normalTexture,
  })

);

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture,
  })

);

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
    normalMap: normalTexture,
  })

);

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
    normalMap: normalTexture,
  })

);

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
    normalMap: normalTexture,
  })

);

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
    normalMap: normalTexture,
  })

);

scene.add(sun);
scene.add(mercury)
scene.add(venus)
scene.add(earth)
scene.add(mars)
scene.add(jupiter)
scene.add(saturn)
scene.add(uranus)
scene.add(neptune)




sun.position.z = -5;
// sun.position.setX(-10);
sun.position.x =2

mercury.position.z = 20;
mercury.position.setX(-10);

venus.position.z = 30;
venus.position.setX(-10);

earth.position.z = 40;
earth.position.setX(-10);

mars.position.z = 50;
mars.position.setX(-10);

jupiter.position.z = 60;
jupiter.position.setX(-10);

saturn.position.z = 70;
saturn.position.setX(-10);

uranus.position.z = 80;
uranus.position.setX(-10);

neptune.position.z = 90;
neptune.position.setX(-10);

claire.position.z = -5;
claire.position.x = 2;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  sun.rotation.x += 0.05;
  sun.rotation.y += 0.075;
  sun.rotation.z += 0.05;

  mercury.rotation.x += 0.05;
  mercury.rotation.y += 0.075;
  mercury.rotation.z += 0.05;

  venus.rotation.x += 0.05;
  venus.rotation.y += 0.075;
  venus.rotation.z += 0.05;

  earth.rotation.x += 0.05;
  earth.rotation.y += 0.075;
  earth.rotation.z += 0.05;

  mars.rotation.x += 0.05;
  mars.rotation.y += 0.075;
  mars.rotation.z += 0.05;

  jupiter.rotation.x += 0.05;
  jupiter.rotation.y += 0.075;
  jupiter.rotation.z += 0.05;

  saturn.rotation.x += 0.05;
  saturn.rotation.y += 0.075;
  saturn.rotation.z += 0.05;


  uranus.rotation.x += 0.05;
  uranus.rotation.y += 0.075;
  uranus.rotation.z += 0.05;

  neptune.rotation.x += 0.05;
  neptune.rotation.y += 0.075;
  neptune.rotation.z += 0.05;

  // claire.rotation.y += 0.01;
  // claire.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.y += 0.01;
  sun.rotation.x += 0.005;

  // controls.update();
  renderer.render(scene, camera);
}
animate()