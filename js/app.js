var app=function() {
	 // initiallize scene, camera, objects and renderer
	var scene, camera, renderer, object1, object2,object3;
    var init_app = function() {
        // 1. create the scene
		scene = new THREE.Scene();
		scene.background = new THREE.TextureLoader().load( "data/textures/background.jpeg" );
        // 2. create an locate the camera
		var fieldOfViewY = 60, aspectRatio = window.innerWidth /window.innerHeight, near=0.1, far= 100.0;
		camera = new THREE.PerspectiveCamera( fieldOfViewY, aspectRatio, near, far );
		camera.position.z = 5;
		
        // 3. create and locate the objects on the scene
		//--------object 0------------------
        const box = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		object = new THREE.Mesh( box, material );
		object.position.x = -4.5;
		object.position.y =1;
		scene.add( object );
		//--------object 1------------------
		const material1 = new THREE.MeshBasicMaterial( { color: 0x0000ff,wireframe:true } );
		object1 = new THREE.Mesh( box, material1 );
		object1.position.x = -4.5;
		object1.position.y = -1.5;
		scene.add( object1 );
		//--------object 2------------------
		const sphere = new THREE.SphereGeometry(5,30,30);
		const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		object2 = new THREE.Mesh( sphere, material2 );
		// setting the position of object2
		// caling object 2
		const scaling_factor = 0.2;
		object2.position.y =1;
		object2.scale.x=scaling_factor;
		object2.scale.y=scaling_factor;
		object2.scale.z=scaling_factor;
		//adding object2 to scene
		scene.add( object2 );
		//--------object 3------------------
		const sphere2 = new THREE.SphereGeometry(5,30,30,0,Math.PI);
		const material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff,wireframe:true } );
		object3 = new THREE.Mesh( sphere2, material3 );		
		// setting the position of object3
		object3.position.y = -1.5;	
		// caling object 2
		object3.scale.x=scaling_factor;
		object3.scale.y=scaling_factor;
		object3.scale.z=scaling_factor;
		//adding object2 to scene
		scene.add( object3 );
		//--------object 4------------------
		const geometry4 = new THREE.TorusGeometry( 10, 3, 16, 100 );
		const material4 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		object4 = new THREE.Mesh( geometry4, material4 );		
		// setting the position of object3
		object4.position.x = 4;	
		object4.position.y = 1;	
		// caling object 2
		const scaling_factor2 = 0.08;
		object4.scale.x=scaling_factor2;
		object4.scale.y=scaling_factor2;
		object4.scale.z=scaling_factor2;
		//adding object2 to scene
		scene.add( object4 );
		//--------object 5------------------
		const geometry5 = new THREE.TorusGeometry( 10, 3, 5, 5,Math.PI );
		const material5 = new THREE.MeshBasicMaterial( { color: 0x0000ff,wireframe:true } );
		object5 = new THREE.Mesh( geometry5, material5 );		
		// setting the position of object3
		object5.position.x = 4;	
		object5.position.y = -1.5;	
		// caling object 2
		object5.scale.x=scaling_factor2;
		object5.scale.y=scaling_factor2;
		object5.scale.z=scaling_factor2;
		//adding object2 to scene
		scene.add( object5 );
		
        // 4. create the renderer   
		renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight);
		document.body.appendChild( renderer.domElement );
    };
    // main animation loop - calls every 50-60 ms.
    var mainLoop = function() {
		
		requestAnimationFrame( mainLoop );
		object.rotation.y += 0.01;
		object1.rotation.y += 0.01;
		object2.rotation.y += 0.01;
		object3.rotation.y += 0.01;
		object4.rotation.y += 0.01
		object5.rotation.y += 0.01;
		renderer.render( scene, camera );
    };
    init_app();
    mainLoop();
}

  