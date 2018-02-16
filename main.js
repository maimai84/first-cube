var width=300;
var height=300;



var renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(width,height);
$('body').append(renderer.domElement)



var scene = new THREE.Scene;
var cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
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


var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
scene.add(cube);


var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
camera.position.y = 170;
camera.position.z = 400;
scene.add(camera);
camera.lookAt(cube.position);



renderer.render(scene, camera);
     
   
 


    
     
   


