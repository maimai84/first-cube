var width=window.innerWidth;
var height=window.innerHeight;
var camera, scene, renderer, cube, material,clock;
init();
function init(){

 renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(width,height);
$('body').append(renderer.domElement)
 renderer.shadowMapEnabled = true;


 scene = new THREE.Scene;


 // create shap

var cubeGeometry = new THREE.CubeGeometry(40, 40, 40);


// create material color or image texture

var cubeMaterial=[
new THREE.MeshBasicMaterial({color:'red',side:THREE.DoubleSide}),
new THREE.MeshBasicMaterial({color:'blue',side:THREE.DoubleSide}),
new THREE.MeshBasicMaterial({color:'green',side:THREE.BackSide}),
new THREE.MeshBasicMaterial({color:'purpl',side:THREE.DoubleSide}),
new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('crate.gif'),side:THREE.DoubleSide}),
new THREE.MeshBasicMaterial({color:'yellow',side:THREE.DoubleSide}),
];

var material = new THREE.MeshFaceMaterial( cubeMaterial );
 cube = new THREE.Mesh(cubeGeometry,material);
cube.castShadow = true;

 scene.add(cube);


 // var pointLight = new THREE.PointLight(0xffffff);
 //  pointLight.position.set(0,110, 900);

 // scene.add(pointLight);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(155, 130,330);
spotLight.castShadow = true;
scene.add(spotLight);

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

// var directionalLight = new THREE.DirectionalLight( 0xffccff, 0.8 );

// scene.add( directionalLight );



 camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
camera.position.y =360 ;
camera.position.z = 330;


scene.add(camera);
camera.lookAt(cube.position);

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

render();

}
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {

    	(cube.rotation.z=Math.PI *90/180)&&
        (cube.position.z -= 40);
        
    } else if (keyCode === 83) {
    	(cube.rotation.z=Math.PI *-90/180)&&
        (cube.position.z += 40);

    } else if (keyCode === 65) {
    	(cube.rotation.x=Math.PI *90/180)&&
        (cube.position.x -= 40);
  
    } else if (keyCode === 68) {
    	(cube.rotation.x=Math.PI *-90/180)&&
        (cube.position.x += 40);
    

    
    } else if (keyCode === 13) {

         cube.position.set(0,0,0);
    

     }

  render();

};





 // draw the scene
function render(){


    requestAnimationFrame(render);
     
      
    renderer.render(scene, camera);
    

}

    
   
 


    
     
   


