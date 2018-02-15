var width=300;
var height=300;



var renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(width,height);
$('body').append(renderer.domElement)



var scene = new THREE.Scene;
var cubeGeometry = new THREE.CubeGeometry(80, 80, 80);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0x10c876 });
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
scene.add(cube);


var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
camera.position.y = 160;
camera.position.z = 400;
scene.add(camera);
camera.lookAt(cube.position);

var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
 
scene.add(skybox);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 100, 200);
 

scene.add(pointLight);


renderer.render(scene, camera);
     
   
 


    
     
   


