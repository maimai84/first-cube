var width=window.innerWidth;
var height=window.innerHeight;



var renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(width,height);
$('body').append(renderer.domElement)



var scene = new THREE.Scene;
var cubeGeometry = new THREE.CubeGeometry(40, 40, 40);
cubeGeometry.faces[0].color.setHex(Math.random()*0xf0c876);
cubeGeometry.faces[1].color.setHex(Math.random()*0xf0c876);
cubeGeometry.faces[2].color.setHex(Math.random()*0xf0c876);
cubeGeometry.faces[3].color.setHex(Math.random()*0xf0c876);
cubeGeometry.faces[4].color.setHex(Math.random()*0xf0c876);
cubeGeometry.faces[5].color.setHex(Math.random()*0xf0c876);





// cubeGeometry.faces[0].color.setHex( Math.random() * 0xffffff );
// cubeGeometry.faces[1].color.setHex( Math.random() * 0xffffff );
// cubeGeometry.faces[2].color.setHex( Math.random() * 0xffffff );
// cubeGeometry.faces[3].color.setHex( Math.random() * 0xffffff );
// cubeGeometry.faces[4].color.setHex( Math.random() * 0xffffff );
// cubeGeometry.faces[5].color.setHex( Math.random() * 0xffffff );


var cubeMaterial = new THREE.MeshPhongMaterial( { color: 0x00ffff, vertexColors: THREE.FaceColors } );
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);



scene.add(cube);
var pointLight = new THREE.PointLight(0xffffff);
 pointLight.position.set(0, 100, 200);
 

 scene.add(pointLight);



var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
camera.position.y =160 ;
camera.position.z = 400;
scene.add(camera);
camera.lookAt(cube.position);




var planeGeometry = new THREE.PlaneBufferGeometry( 500, 500, 20, 20 );
  var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x000000 } )
  var plane = new THREE.Mesh( planeGeometry, planeMaterial );
  plane.position.set(30, -20, 0);
  plane.receiveShadow = true;
  plane.rotation.x = -90 * Math.PI / 180;


  scene.add(plane);

var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
 var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
 var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
 
scene.add(skybox);

function render(){
	renderer.render(scene, camera);
	  
    requestAnimationFrame(render);


}

 render();    
   
 


    
     
   


