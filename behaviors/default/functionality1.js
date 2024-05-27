import * as THREE from 'three'
import * as dat from 'dat.gui';
class ModelPawn extends PawnBehavior {
    setup() {
        let trm = this.service("ThreeRenderManager");
        let group = this.shape;

        if (this.actor._cardData.toneMappingExposure !== undefined) {
            trm.renderer.toneMappingExposure = this.actor._cardData.toneMappingExposure;
        }

        // Initialize DRACOLoader
        const dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/libs/draco/');

        // Set DRACOLoader as an extension to GLTFLoader
        const gltfLoader = new THREE.GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        this.lights = [];
        let particles=[];

        
        const loadModelPromise = new Promise((resolve, reject) => {
            gltfLoader.load(
                './assets/Server_Room_New_NEW 1wire blend.glb', 
                (gltf) => {
                    const model = gltf.scene;
        
                    model.position.set(0, -1.6, 0);
                    const scaleFactor = 2;
                    model.scale.set(scaleFactor, scaleFactor, scaleFactor);
        
                    group.add(model);
                    console.log(model);
        
                    resolve(model);
                },
                null,
                (error) => {
                    console.error('Error loading GLTF model:', error);
                    reject(error);
                }
            );
        });
        loadModelPromise.then((model) => {
            const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, Green, Blue, Yellow

            // Shuffle the colors array to randomize the order
            for (let i = colors.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [colors[i], colors[j]] = [colors[j], colors[i]];
            }

            let colorIndex = 0;

            const originalMaterials = new Map();

            function traverseAndColor(object, restore = false) {
                if (object.isMesh) {
                    if (restore) {
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        const color = colors[colorIndex % colors.length];
                        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.3 });
                        object.material = material;
                        colorIndex++;
                    }
                }


                object.children.forEach((child, index) => {
                    if (index >= 1) { // Only affect children with an index of 2 or higher
                        traverseAndColor(child, restore);
                    }
                });
            }
            function traverseAndColor1(object, restore = false) {
                if (object.isMesh) {
                    if (restore) {
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        const color = colors[colorIndex % colors.length];
                        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.3 });
                        object.material = material;
                        colorIndex++;
                    }
                }

                object.children.forEach((child, index) => {
                    if (index >= 1) { // Only affect children with an index of 2 or higher
                        traverseAndColor1(child, restore);
                    }
                });
            }

            function traverseAndColor2(object, restore = false) {
                // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
                if (object.isMesh) {
                    if (restore) {
                        // Restore the original material if available
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        // Apply new texture if restoring the original material is not requested
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        // Load texture
                        const textureLoader = new THREE.TextureLoader();
                        textureLoader.load('./assets/images/Texture.jpg', (texture) => {
                           const material = new THREE.MeshBasicMaterial({ 
  map: texture,
  transparent: true,
  opacity: 0.6 // Adjust the opacity value as needed (0.0 to 1.0)
});

                            object.material = material;
                        });
                    }
                }

                // Recursively traverse specific children based on the index condition
                object.children.forEach((child, index) => {
                    if (index >= 0) { // Only affect children with an index of 2 or higher
                        traverseAndColor2(child, restore);
                    }
                });
            }
            function traverseAndColor3(object, restore = false) {
                // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
                if (object.isMesh) {
                    if (restore) {
                        // Restore the original material if available
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        // Apply new texture if restoring the original material is not requested
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        // Load texture
                        const textureLoader = new THREE.TextureLoader();
                        textureLoader.load('./assets/images/Texture1.jpg', (texture) => {
                           const material = new THREE.MeshBasicMaterial({ 
  map: texture,
  transparent: true,
  opacity: 0.6 // Adjust the opacity value as needed (0.0 to 1.0)
});

                            object.material = material;
                        });
                    }
                }

                // Recursively traverse specific children based on the index condition
                object.children.forEach((child, index) => {
                    if (index >= 0) { // Only affect children with an index of 2 or higher
                        traverseAndColor3(child, restore);
                    }
                });
            }
            function traverseAndColor4(object, restore = false) {
                // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
                if (object.isMesh) {
                    if (restore) {
                        // Restore the original material if available
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        // Apply new texture if restoring the original material is not requested
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        // Load texture
                        const textureLoader = new THREE.TextureLoader();
                        textureLoader.load('./assets/images/Texture2.jpg', (texture) => {
                           const material = new THREE.MeshBasicMaterial({ 
  map: texture,
  transparent: true,
  opacity: 0.6 // Adjust the opacity value as needed (0.0 to 1.0)
});

                            object.material = material;
                        });
                    }
                }

                // Recursively traverse specific children based on the index condition
                object.children.forEach((child, index) => {
                    if (index >= 0) { // Only affect children with an index of 2 or higher
                        traverseAndColor4(child, restore);
                    }
                });
            }
            function traverseAndColor5(object, restore = false) {
                // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
                if (object.isMesh) {
                    if (restore) {
                        // Restore the original material if available
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        // Apply new texture if restoring the original material is not requested
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        // Load texture
                        const textureLoader = new THREE.TextureLoader();
                        textureLoader.load('./assets/images/Texture3.jpg', (texture) => {
                           const material = new THREE.MeshBasicMaterial({ 
  map: texture,
  transparent: true,
  opacity: 0.6 // Adjust the opacity value as needed (0.0 to 1.0)
});

                            object.material = material;
                        });
                    }
                }

                // Recursively traverse specific children based on the index condition
                object.children.forEach((child, index) => {
                    if (index >= 0) { // Only affect children with an index of 2 or higher
                        traverseAndColor5(child, restore);
                    }
                });
            }
            function traverseAndColor6(object, restore = false) {
                // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
                if (object.isMesh) {
                    if (restore) {
                        // Restore the original material if available
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        // Apply new texture if restoring the original material is not requested
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        // Load texture
                        const textureLoader = new THREE.TextureLoader();
                        textureLoader.load('./assets/images/Texture5.jpg', (texture) => {
                           const material = new THREE.MeshBasicMaterial({ 
  map: texture,
  transparent: true,
  opacity: 0.6 // Adjust the opacity value as needed (0.0 to 1.0)
});

                            object.material = material;
                        });
                    }
                }

                // Recursively traverse specific children based on the index condition
                object.children.forEach((child, index) => {
                    if (index >= 0) { // Only affect children with an index of 2 or higher
                        traverseAndColor6(child, restore);
                    }
                });
            }

            function traverseAndColor7(object, restore = false) {
                if (object.isMesh) {
                    if (restore) {
                        const originalMaterial = originalMaterials.get(object);
                        if (originalMaterial) {
                            object.material = originalMaterial;
                        }
                    } else {
                        if (!originalMaterials.has(object)) {
                            originalMaterials.set(object, object.material);
                        }
                        const color = colors[colorIndex % colors.length];
                        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.3 });
                        object.material = material;
                        colorIndex++;
                    }
                }


                object.children.forEach((child, index) => {
                    if (index >= 1) { // Only affect children with an index of 2 or higher
                        traverseAndColor7(child, restore);
                    }
                });
            }

            function createParticleSystem(group, THREE) {
                let particlesGroup = null;
                const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, Green, Blue, Yellow
            
                // Shuffle the colors array to randomize the order
                for (let i = colors.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [colors[i], colors[j]] = [colors[j], colors[i]];
                }
            
                let colorIndex = 0;
            
                function createParticles() {
                    if (particlesGroup) {
                        // If particles already exist, no need to create them again
                        return;
                    }
            
                    particlesGroup = new THREE.Group();
                    const particleCount = 10000;
                    const radius = 0.05; // Radius of individual spheres
            
                    for (let i = 0; i < particleCount; i++) {
                        const geometry = new THREE.SphereGeometry(radius, 1, 1);
                        const material = new THREE.MeshBasicMaterial({
                            color: colors[colorIndex]
                        });
                        colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
            
                        const particle = new THREE.Mesh(geometry, material);
            
                        // Position the particles randomly within a certain volume
                        particle.position.set(
                            (Math.random() - 0.5) * 100, // X position
                            (Math.random() - 0.5) * 100, // Y position
                            (Math.random() - 0.5) * 100  // Z position
                        );
            
                        particlesGroup.add(particle);
                    }
            
                    // particlesGroup.position.set(10, 1, 10); // Set the initial position for the particle system
                    group.add(particlesGroup);
            
                    // Start the animation
                    startAnimation();
                }
            
                function removeParticles() {
                    if (particlesGroup) {
                        group.remove(particlesGroup);
                        particlesGroup.traverse((object) => {
                            if (object.isMesh) {
                                object.geometry.dispose();
                                object.material.dispose();
                            }
                        });
                        particlesGroup = null;
                    }
                }
            
                function startAnimation() {
                    let time = 0;
                    const speed = 0.07; // Speed of particle movement
            
                    function updateParticles() {
                        if (!particlesGroup) {
                            // Stop the animation if the particle system is removed
                            return;
                        }
            
                        particlesGroup.children.forEach(particle => {
                            // Move Y position up over time
                            particle.position.y += speed * time;
            
                            // Reset if Y position goes above threshold
                            if (particle.position.y >10) {
                                particle.position.y = -2;
                            }
                        });
            
                        time += 0.001; // Increase time increment for faster animation
            
                        requestAnimationFrame(updateParticles);
                    }
            
                    updateParticles();
                }
            
                return {
                    createParticles,
                    removeParticles
                };
            }
            
            var gui = new dat.GUI();
            var obj = {
                traverseAndColor: false // Initial state of the checkbox
            };
            
            gui.add(obj, 'traverseAndColor').name('Temp. view1').onChange(function(value) {
                if (value) {
                    
                    for (let i=0; i <= 93; i++) {
                        if(i>=5 && i<=38){
                            continue;
                        }
                        
                        // Reset colorIndex for each row
                        colorIndex = i - 1;
                        for (let j = 2; j <= 13; j++) {
                            traverseAndColor(model.children[i].children[j], false);
                        }
                    }
                } else {
                    for (let i=0; i <= 93; i++) {
                        if(i>=5 && i<=38){
                            continue;
                        }
                        for (let j = 2; j <= 13; j++) {
                            traverseAndColor(model.children[i].children[j], true);
                        }
                    }
                }
            });
            var obj1 = {
                traverseAndColor1: false // Initial state of the checkbox
            };
            
            gui.add(obj1, 'traverseAndColor1').name('Temp.').onChange(function(value) {
                if (value) {
                    for (let i=0; i <= 93; i++) {
                        if(i>=5 && i<=38){
                            continue;
                        }
                        // Reset colorIndex for each row
                        colorIndex = i ;
                        traverseAndColor1(model.children[i].children[1], false);
                        traverseAndColor1(model.children[i].children[1].children[0], false);
                        }
                    }
                 else {
                    for (let i=0; i <= 93; i++) {
                        if(i>=5 && i<=38){
                            continue;
                        }
                       
                        traverseAndColor1(model.children[i].children[1], true);
                            traverseAndColor1(model.children[i].children[1].children[0], true);
                        }
                }
            });
            var obj2 = {
                traverseAndColor2: false // Initial state of the checkbox
            };

            gui.add(obj2, 'traverseAndColor2').name('CFD').onChange(function (value) {
                if (value) {
                    for (let i=0; i <= 10; i++) {
                        
                        // Reset colorIndex for each row
                        colorIndex = i - 1;
                       
                            traverseAndColor2(model.children[17].children[i], false);
                        }
                        for (let i=11; i <= 22; i++) {
                        
                            // Reset colorIndex for each row
                            colorIndex = i - 1;
                           
                                traverseAndColor3(model.children[17].children[i], false);
                            } 
                            for (let i=23; i <= 34; i++) {
                        
                                // Reset colorIndex for each row
                                colorIndex = i - 1;
                               
                                    traverseAndColor4(model.children[17].children[i], false);
                                }
                                 for (let i=35; i <= 46; i++) {
                        
                                    // Reset colorIndex for each row
                                    colorIndex = i - 1;
                                   
                                        traverseAndColor5(model.children[17].children[i], false);
                                    }
                                    for (let i=47; i <= 59; i++) {
                        
                                        // Reset colorIndex for each row
                                        colorIndex = i - 1;
                                       
                                            traverseAndColor6(model.children[17].children[i], false);
                                        }
                    }
                 else {
                    for (let i=0; i <= 10; i++) {
                        
                        // Reset colorIndex for each row
                       
                       
                            traverseAndColor2(model.children[17].children[i], true);
                        }
                        for (let i=11; i <= 22; i++) {
                        
                            // Reset colorIndex for each row
                           
                           
                                traverseAndColor3(model.children[17].children[i], true);
                            } 
                            for (let i=23; i <= 34; i++) {
                        
                                // Reset colorIndex for each row
                               
                               
                                    traverseAndColor4(model.children[17].children[i], true);
                                }
                                 for (let i=35; i <= 46; i++) {
                        
                                    // Reset colorIndex for each row
                                   
                                   
                                        traverseAndColor5(model.children[17].children[i], true);
                                    }
                                    for (let i=47; i <= 59; i++) {
                        
                                        // Reset colorIndex for each row
                                       
                                       
                                            traverseAndColor6(model.children[17].children[i], true);
                                        }
                }
                
            });

            var obj3 = {
                traverseAndColor7: false // Initial state of the checkbox
            };
            
            gui.add(obj3, 'traverseAndColor7').name('Flow').onChange(function(value) {
                if (value) {
                    // for (let i=0; i <48; i++) {
                        
                    //     // Reset colorIndex for each row
                    //     colorIndex = i - 1;
                       
                    //         traverseAndColor7(model.children[13].children[i], false);
                       
                    // }
                    
                    for (let i=0; i <=94; i++) {
                        
                        // Reset colorIndex for each row
                        colorIndex = i - 1;
                       
                            traverseAndColor7(model.children[19].children[i], false);
                       
                    }
                    for (let i=20; i <=38; i++) {
                        
                        // Reset colorIndex for each row
                        colorIndex = i - 1;
                       
                            traverseAndColor7(model.children[i], false);
                       
                    }
                } else {
                    // for (let i=0; i <48; i++) {
                     
                       
                    //         traverseAndColor7(model.children[13].children[i], true);
                       
                    // }
                    for (let i=0; i <= 94; i++) {
                        
                       
                            traverseAndColor7(model.children[19].children[i], true);
                        
                    } 
                    for (let i=20; i <=38; i++) {
                        
                        // Reset colorIndex for each row
                        colorIndex = i - 1;
                       
                            traverseAndColor7(model.children[i], true);
                       
                    }
                }
            }); 
            var obj5 = {
                createParticles: false // Initial state of the checkbox
            };
            
            const particleSystem = createParticleSystem(group, THREE);
            
            gui.add(obj5, 'createParticles').name('Particles').onChange(function(value) {
                if (value) {
                    particleSystem.createParticles();
                } else {
                    particleSystem.removeParticles();
                }
            });
       

        }).catch((error) => {
            console.error('Error loading GLTF model:', error);
        });

        this.listen("updateShape", "updateShape");
    }

    teardown() {
        console.log("teardown lights");
        this.removeLights();
        let scene = this.service("ThreeRenderManager").scene;
        scene.background?.dispose();
        scene.environment?.dispose();
        scene.background = null;
        scene.environment = null;

        // Dispose particle system
        if (this.particleSystem) {
            this.shape.remove(this.particleSystem);
            this.particleSystem.geometry.dispose();
            this.particleSystem.material.dispose();
        }
    }

    updateShape(options) {
        this.constructBackground(options);
    }

    update(_time) {
        if (this.csm) this.csm.update();
    }
}

export default {
    modules: [{
        name: "Model2",
        pawnBehaviors: [ModelPawn]
    }]
};
