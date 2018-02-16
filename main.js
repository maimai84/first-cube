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


var cubeMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);

 scene.add(cube);


// var pointLight = new THREE.PointLight(0xffffff);
//  pointLight.position.set(0,110, 310);
 

//  scene.add(pointLight);

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
scene.add( directionalLight );



var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
camera.position.y =360 ;
camera.position.z = 360;
scene.add(camera);
camera.lookAt(cube.position);
var xSpeed = 0.001;
var ySpeed = 0.001;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        cube.position.z -= 40;
    } else if (keyCode === 83) {
        cube.position.z += 40;
    } else if (keyCode === 65) {
        cube.position.x -= 40;
    } else if (keyCode === 68) {
        cube.position.x += 40;
     } else if (keyCode === 32) {
         cube.position.set(0,0,0);
    

     }
};



var planeGeometry = new THREE.PlaneBufferGeometry( 500, 500, 10, 10 );
  var planeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } )
  var plane = new THREE.Mesh( planeGeometry, planeMaterial );
  plane.position.set(30, -20, 0);
  plane.receiveShadow = true;
  plane.rotation.x = -90 * Math.PI / 180;
  scene.add(plane);


var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
 var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0xffccff, side: THREE.BackSide });
 var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
 
scene.add(skybox);


function render(){
	renderer.render(scene, camera);
	  
    requestAnimationFrame(render);


}

 render();    
   
 


    
     
   


