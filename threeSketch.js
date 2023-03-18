
// //  type = "imports": 
// //     "three": "../build/three.module.js",
// //     "three/addons/": "./jsm/"


// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import { ARButton } from 'three/addons/webxr/ARButton.js';


// // let scene, camera, renderer, controls;
// // let stats, clock; // helpers
// // let light, pointLight;
// // let cubes = [];
// // let centerPoint;



// // init();
// // animate();

// //ar
// let container;
// 			let camera, scene, renderer;
// 			let controller1, controller2;

// 			let raycaster;

// 			const intersected = [];
// 			const tempMatrix = new THREE.Matrix4();

// 			let group;

// init();
// animate();

// function init() {

//     // scene = new THREE.Scene();
//     // camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//     // renderer = new THREE.WebGLRenderer();
//     // renderer.setSize( window.innerWidth, window.innerHeight );
//     // document.getElementById("sketch-container").appendChild( renderer.domElement );

//     // //camera interaction controls
//     // controls = new OrbitControls( camera, renderer.domElement );

//     // //controls.update() must be called after any manual changes to the camera's transform
//     // camera.position.set( 8, 13, 20 ); //always looks at center
//     // controls.update();

//     // //set up our scene
//     // light = new THREE.AmbientLight( 0xfffafe ); // soft white light
//     // scene.add( light );
//     // pointLight = new THREE.PointLight( 0xfffafe, 1, 100 );
//     // pointLight.position.set( 10, 10, 10 );
//     // scene.add( pointLight );
    

//     // centerPoint = new THREE.Vector3( 0, 0, 0 );
   
//     // const geometry = new THREE.BoxGeometry( 4, 10, 4 );
//     // const material = new THREE.MeshNormalMaterial();
    
//     // //create cubes
//     // for (let x = -8; x <= 8; x += 1) {
//     //     for (let z = -8; z <= 8; z += 1) {

//     //         const cube = new THREE.Mesh( geometry, material ); 

//     //         cube.position.x = x;
//     //         cube.position.y = 0;
//     //         cube.position.z = z;
            
//     //         scene.add(cube);

//     //         cubes.push(cube);
//     //     }
//     // }

//     // //help us animate
//     // clock = new THREE.Clock();

//     // //For frame rate
//     // stats = Stats()
//     // stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
//     // document.body.appendChild(stats.dom)
    

//     // //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//     // //https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//     // //https://www.w3schools.com/js/js_htmldom_events.asp
//     // window.addEventListener('resize', onWindowResize );

//   //ar  
//     container = document.createElement( 'div' );
// 				document.body.appendChild( container );

// 				scene = new THREE.Scene();

// 				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10 );
// 				camera.position.set( 0, 0, 3 );

// 				const controls = new OrbitControls( camera, container );
// 				controls.minDistance = 0;
// 				controls.maxDistance = 8;

// 				scene.add( new THREE.HemisphereLight( 0x808080, 0x606060 ) );

// 				const light = new THREE.DirectionalLight( 0xffffff );
// 				light.position.set( 0, 6, 0 );
// 				scene.add( light );

// 				group = new THREE.Group();
// 				scene.add( group );

// 				const geometries = [
// 					new THREE.BoxGeometry( 0.2, 0.2, 0.2 ),
// 					new THREE.ConeGeometry( 0.2, 0.2, 64 ),
// 					new THREE.CylinderGeometry( 0.2, 0.2, 0.2, 64 ),
// 					new THREE.IcosahedronGeometry( 0.2, 8 ),
// 					new THREE.TorusGeometry( 0.2, 0.04, 64, 32 )
// 				];

// 				for ( let i = 0; i < 50; i ++ ) {

// 					const geometry = geometries[ Math.floor( Math.random() * geometries.length ) ];
// 					const material = new THREE.MeshStandardMaterial( {
// 						color: Math.random() * 0xffffff,
// 						roughness: 0.7,
// 						metalness: 0.0
// 					} );

// 					const object = new THREE.Mesh( geometry, material );

// 					object.position.x = Math.random() * 4 - 2;
// 					object.position.y = Math.random() * 4 - 2;
// 					object.position.z = Math.random() * 4 - 2;

// 					object.rotation.x = Math.random() * 2 * Math.PI;
// 					object.rotation.y = Math.random() * 2 * Math.PI;
// 					object.rotation.z = Math.random() * 2 * Math.PI;

// 					object.scale.setScalar( Math.random() + 0.5 );

// 					group.add( object );

// 				}

// 				//

// 				renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
// 				renderer.setPixelRatio( window.devicePixelRatio );
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 				renderer.outputEncoding = THREE.sRGBEncoding;
// 				renderer.xr.enabled = true;
// 				container.appendChild( renderer.domElement );

// 				document.body.appendChild( ARButton.createButton( renderer ) );

// 				// controllers

// 				controller1 = renderer.xr.getController( 0 );
// 				controller1.addEventListener( 'selectstart', onSelectStart );
// 				controller1.addEventListener( 'selectend', onSelectEnd );
// 				scene.add( controller1 );

// 				controller2 = renderer.xr.getController( 1 );
// 				controller2.addEventListener( 'selectstart', onSelectStart );
// 				controller2.addEventListener( 'selectend', onSelectEnd );
// 				scene.add( controller2 );

// 				raycaster = new THREE.Raycaster();

// 				//

// 				window.addEventListener( 'resize', onWindowResize );

// }


// function animate() {
//     //renderer.setAnimationLoop( render );

//     renderer.setAnimationLoop( render );
// }

// function render(){
//     // stats.begin();

//     // for (let i = 0; i < cubes.length; i++) {
//     //     let cube = cubes[i];
//     //     let distance = cube.position.distanceTo(centerPoint);
//     //     let sine = Math.sin(distance + clock.getElapsedTime()*5);//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//     //     let height = THREE.MathUtils.mapLinear(sine,-1,1,1,5);//https://threejs.org/docs/?q=Math#api/en/math/MathUtils
//     //     cube.scale.y = height;
//     // }

// 	// stats.end();
   
//     // // required if controls.enableDamping or controls.autoRotate are set to true
// 	// //controls.update();

//     // renderer.render( scene, camera );

    
//     cleanIntersected();

//     intersectObjects( controller1 );
//     intersectObjects( controller2 );

//     renderer.render( scene, camera );

// }

// function onWindowResize() {

//     // camera.aspect = window.innerWidth / window.innerHeight;
//     // camera.updateProjectionMatrix();

//     // renderer.setSize(window.innerWidth, window.innerHeight);
//     // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     camera.aspect = window.innerWidth / window.innerHeight;
// 				camera.updateProjectionMatrix();

// 				renderer.setSize( window.innerWidth, window.innerHeight );

// }

// function onSelectStart( event ) {

//     const controller = event.target;

//     const intersections = getIntersections( controller );

//     if ( intersections.length > 0 ) {

//         const intersection = intersections[ 0 ];

//         const object = intersection.object;
//         object.material.emissive.b = 1;
//         controller.attach( object );

//         controller.userData.selected = object;

//     }

// }

// function onSelectEnd( event ) {

//     const controller = event.target;

//     if ( controller.userData.selected !== undefined ) {

//         const object = controller.userData.selected;
//         object.material.emissive.b = 0;
//         group.attach( object );

//         controller.userData.selected = undefined;

//     }

// }

// function getIntersections( controller ) {

//     tempMatrix.identity().extractRotation( controller.matrixWorld );

//     raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
//     raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );

//     return raycaster.intersectObjects( group.children, false );

// }

// function intersectObjects( controller ) {

//     // Do not highlight when already selected

//     if ( controller.userData.selected !== undefined ) return;

//     const intersections = getIntersections( controller );

//     if ( intersections.length > 0 ) {

//         const intersection = intersections[ 0 ];

//         const object = intersection.object;
//         object.material.emissive.r = 1;
//         intersected.push( object );

//     }

// }

// function cleanIntersected() {

//     while ( intersected.length ) {

//         const object = intersected.pop();
//         object.material.emissive.r = 0;

//     }

// }



type="module"> "sktech.js"
import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer;
let controller;

init();
animate();

function init() {

    const container = document.createElement( 'div' );
    document.body.appendChild( container );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    light.position.set( 0.5, 1, 0.25 );
    scene.add( light );

    //

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.xr.enabled = true;
    container.appendChild( renderer.domElement );

    //

    document.body.appendChild( ARButton.createButton( renderer ) );

    //

    const geometry = new THREE.CylinderGeometry( 0, 0.05, 0.2, 32 ).rotateX( Math.PI / 2 );

    function onSelect() {

        const material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random() } );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.set( 0, 0, - 0.3 ).applyMatrix4( controller.matrixWorld );
        mesh.quaternion.setFromRotationMatrix( controller.matrixWorld );
        scene.add( mesh );

    }

    controller = renderer.xr.getController( 0 );
    controller.addEventListener( 'select', onSelect );
    scene.add( controller );

    //

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

    renderer.setAnimationLoop( render );

}

function render() {

    renderer.render( scene, camera );

}