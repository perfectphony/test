document.addEventListener("DOMContentLoaded", function(event) {

    //"globals"
    let scene;
    let camera;
    let renderer;
    let cube;


    let init = function() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById("gl").appendChild( renderer.domElement );

        let texLoader = THREE.TextureLoader();

        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        //let material = new THREE.MeshPhongMaterial( { map: texLoader.load("images/nyc.jpg") } );
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        
        camera.position.z = 5;

        //scene objects
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
    };



    //render update
    let render = function() {
        requestAnimationFrame( render ); //callback 60fps

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
    };



    //woot
    init();
    render();
});