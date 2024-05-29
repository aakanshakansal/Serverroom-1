import * as THREE from 'three';
import { GLTFLoader } from 'node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'node_modules/three/examples/jsm/loaders/DRACOLoader.js';
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
        dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/libs/draco/');

        // Set DRACOLoader as an extension to GLTFLoader
        const gltfLoader = new THREE.GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        this.lights = [];
        let particles = [];

        const loadModelPromise = new Promise((resolve, reject) => {
            gltfLoader.load(
                './assets/Server room .glb',
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
            const colors = [0xff0e00, 0xff7100, 0xffde2d, 0xfbffff, 0x80f2ff, 0x01aeff, 0x0029ff];

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

            // function createParticleSystem(group, THREE) {
            //     let particlesGroup = null;
            //     const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, Green, Blue, Yellow
            
            //     // Shuffle the colors array to randomize the order
            //     for (let i = colors.length - 1; i > 0; i--) {
            //         const j = Math.floor(Math.random() * (i + 1));
            //         [colors[i], colors[j]] = [colors[j], colors[i]];
            //     }
            
            //     let colorIndex = 0;
            
            //     function createParticles() {
            //         if (particlesGroup) {
            //             // If particles already exist, no need to create them again
            //             return;
            //         }
            
            //         particlesGroup = new THREE.Group();
            //         const particleCount = 10000;
            //         const radius = 0.05; // Radius of individual spheres
            
            //         for (let i = 0; i < particleCount; i++) {
            //             const geometry = new THREE.SphereGeometry(radius, 1, 1);
            //             const material = new THREE.MeshBasicMaterial({
            //                 color: colors[colorIndex]
            //             });
            //             colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
            
            //             const particle = new THREE.Mesh(geometry, material);
            
            //             // Position the particles randomly within a certain volume
            //             particle.position.set(
            //                 (Math.random() - 0.5) * 100, // X position
            //                 (Math.random() - 0.5) * 100, // Y position
            //                 (Math.random() - 0.5) * 100  // Z position
            //             );
            
            //             particlesGroup.add(particle);
            //         }
            
            //         // particlesGroup.position.set(10, 1, 10); // Set the initial position for the particle system
            //         group.add(particlesGroup);
            
            //         // Start the animation
            //         startAnimation();
            //     }
            
            //     function removeParticles() {
            //         if (particlesGroup) {
            //             group.remove(particlesGroup);
            //             particlesGroup.traverse((object) => {
            //                 if (object.isMesh) {
            //                     object.geometry.dispose();
            //                     object.material.dispose();
            //                 }
            //             });
            //             particlesGroup = null;
            //         }
            //     }
            
            //     function startAnimation() {
            //         let time = 0;
            //         const speed = 0.07; // Speed of particle movement
            
            //         function updateParticles() {
            //             if (!particlesGroup) {
            //                 // Stop the animation if the particle system is removed
            //                 return;
            //             }
            
            //             particlesGroup.children.forEach(particle => {
            //                 // Move Y position up over time
            //                 particle.position.y += speed * time;
            
            //                 // Reset if Y position goes above threshold
            //                 if (particle.position.y >10) {
            //                     particle.position.y = -2;
            //                 }
            //             });
            
            //             time += 0.001; // Increase time increment for faster animation
            
            //             requestAnimationFrame(updateParticles);
            //         }
            
            //         updateParticles();
            //     }
            
            //     return {
            //         createParticles,
            //         removeParticles
            //     };
            // }
/*
            function createTemperatureSimulation(group, THREE) {
                const particleCount = 1000;
                const particles = [];
            
                // Create temperature particles
                for (let i = 0; i < particleCount; i++) {
                    const particle = new THREE.Mesh(
                        new THREE.SphereGeometry(0.02, 1,1 ),
                        new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
                    );
            
                    particle.position.set(
                    3+ Math.random() * 7.2, // Range from -20 to +20
                        -Math.random() * 5, // Start from bottom to top
                      -2 + Math.random() *7
                    );
                    
            
                    // Assign temperature based o2n height (warmer at the top, cooler at the bottom)
                    const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                    particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                    particles.push(particle);
                    group.add(particle);
                }
            
                // Function to remove temperature particles
                function removeParticles() {
                    particles.forEach(particle => {
                        group.remove(particle); // Remove particle from the group
                    });
                    particles.length = 0; // Clear the array
                }
            
                // Function to update temperature particles
                function updateTemperature() {
                    particles.forEach(particle => {
                        // Move particles upward
                        particle.position.y += 0.01;
            
                        // Simulate temperature diffusion or other effects here
            
                        // For simplicity, let's just randomly adjust temperature colors
                        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                        // Reset temperature particle position if it goes beyond certain height
                        if (particle.position.y > 3) {
                            particle.position.y = -Math.random() * 3; // Reset to the bottom
                        }
                    });
            
                    // Schedule next update
                    requestAnimationFrame(updateTemperature);
                }
            
                // Start the temperature simulation
                updateTemperature();
            
                // Return an object with a remove function to clean up particles
                return {
                    remove: removeParticles
                };
            }

            function createTemperatureSimulation1(group, THREE) {
                const particleCount = 3000;
                const particles = [];
            
                // Create temperature particles
                for (let i = 0; i < particleCount; i++) {
                    const particle = new THREE.Mesh(
                        new THREE.SphereGeometry(0.02, 1,1 ),
                        new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
                    );
            
                    particle.position.set(
                        13+ Math.random() * 5.5 , 
                        -Math.random() * 5, // Start from bottom to top
                      -2 + Math.random() *7
                    );
                    
            
                    // Assign temperature based o2n height (warmer at the top, cooler at the bottom)
                    const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                    particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                    particles.push(particle);
                    group.add(particle);
                }
            
                // Function to remove temperature particles
                function removeParticles1() {
                    particles.forEach(particle => {
                        group.remove(particle); // Remove particle from the group
                    });
                    particles.length = 0; // Clear the array
                }
            
                // Function to update temperature particles
                function updateTemperature1() {
                    particles.forEach(particle => {
                        // Move particles upward
                        particle.position.y += 0.01;
            
                        // Simulate temperature diffusion or other effects here
            
                        // For simplicity, let's just randomly adjust temperature colors
                        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                        // Reset temperature particle position if it goes beyond certain height
                        if (particle.position.y > 3) {
                            particle.position.y = -Math.random() * 3; // Reset to the bottom
                        }
                    });
            
                    // Schedule next update
                    requestAnimationFrame(updateTemperature1);
                }
            
                // Start the temperature simulation
                updateTemperature1();
            
                // Return an object with a remove function to clean up particles
                return {
                    remove: removeParticles1
                };
            }
            

            function createTemperatureSimulation2(group, THREE) {
                const particleCount = 6000;
                const particles = [];
            
                // Create temperature particles
                for (let i = 0; i < particleCount; i++) {
                    const particle = new THREE.Mesh(
                        new THREE.SphereGeometry(0.02, 1,1 ),
                        new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
                    );
            
                    particle.position.set(
                        -13+ Math.random() * 1, // Range from -20 to +20
                        -Math.random() * 5, // Start from bottom to top
                      -2 + Math.random() *7
                    );
                    
            
                    // Assign temperature based o2n height (warmer at the top, cooler at the bottom)
                    const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                    particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                    particles.push(particle);
                    group.add(particle);
                }
            
                // Function to remove temperature particles
                function removeParticles2() {
                    particles.forEach(particle => {
                        group.remove(particle); // Remove particle from the group
                    });
                    particles.length = 0; // Clear the array
                }
            
                // Function to update temperature particles
                function updateTemperature2() {
                    particles.forEach(particle => {
                        // Move particles upward
                        particle.position.y += 0.01;
            
                        // Simulate temperature diffusion or other effects here
            
                        // For simplicity, let's just randomly adjust temperature colors
                        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                        // Reset temperature particle position if it goes beyond certain height
                        if (particle.position.y > 3) {
                            particle.position.y = -Math.random() * 3; // Reset to the bottom
                        }
                    });
            
                    // Schedule next update
                    requestAnimationFrame(updateTemperature2);
                }
            
                // Start the temperature simulation
                updateTemperature2();
            
                // Return an object with a remove function to clean up particles
                return {
                    remove: removeParticles2
                };
            }

            function createTemperatureSimulation3(group, THREE) {
                const particleCount = 6000;
                const particles = [];
            
                // Create temperature particles
                for (let i = 0; i < particleCount; i++) {
                    const particle = new THREE.Mesh(
                        new THREE.SphereGeometry(0.02, 1,1 ),
                        new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
                    );
            
                    particle.position.set(
                        0.1+ Math.random() * -9, // Range from -20 to +20
                        -Math.random() * 5, // Start from bottom to top
                      -2 + Math.random() *7
                    );
                    
            
                    // Assign temperature based o2n height (warmer at the top, cooler at the bottom)
                    const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                    particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                    particles.push(particle);
                    group.add(particle);
                }
            
                // Function to remove temperature particles
                function removeParticles3() {
                    particles.forEach(particle => {
                        group.remove(particle); // Remove particle from the group
                    });
                    particles.length = 0; // Clear the array
                }
            
                // Function to update temperature particles
                function updateTemperature3() {
                    particles.forEach(particle => {
                        // Move particles upward
                        particle.position.y += 0.01;
            
                        // Simulate temperature diffusion or other effects here
            
                        // For simplicity, let's just randomly adjust temperature colors
                        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
                        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
                        // Reset temperature particle position if it goes beyond certain height
                        if (particle.position.y > 3) {
                            particle.position.y = -Math.random() * 3; // Reset to the bottom
                        }
                    });
            
                    // Schedule next update
                    requestAnimationFrame(updateTemperature3);
                }
            
                // Start the temperature simulation
                updateTemperature3();
            
                // Return an object with a remove function to clean up particles
                return {
                    remove: removeParticles3
                };
            }


            */
                
            
            // function createTemperatureSimulation5(group, THREE) {
            //     const particleCount = 1000;
            //     const particles = [];
            
            //     // Create temperature particles
            //     for (let i = 0; i < particleCount; i++) {
            //         const particle = new THREE.Mesh(
            //             new THREE.SphereGeometry(0.02, 1,1 ),
            //             new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
            //         );
            
            //         particle.position.set(
            //         3+ Math.random() * 7.2, // Range from -20 to +20
            //             -Math.random() * 5, // Start from bottom to top
            //             -1 +Math.random() *5
            //         );
                    
            
            //         // Assign temperature based o2n height (warmer at the top, cooler at the bottom)
            //         const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            //         particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
            //         particles.push(particle);
            //         group.add(particle);
            //     }
            
            //     // Function to remove temperature particles
            //     function removeParticles5() {
            //         particles.forEach(particle => {
            //             group.remove(particle); // Remove particle from the group
            //         });
            //         particles.length = 0; // Clear the array
            //     }
            
            //     // Function to update temperature particles
            //     function updateTemperature5() {
            //         particles.forEach(particle => {
            //             // Move particles upward
            //             particle.position.y += 0.01;
            
            //             // Simulate temperature diffusion or other effects here
            
            //             // For simplicity, let's just randomly adjust temperature colors
            //             const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            //             particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);
            
            //             // Reset temperature particle position if it goes beyond certain height
            //             if (particle.position.y > 3) {
            //                 particle.position.y = -Math.random() * 3; // Reset to the bottom
            //             }
            //         });
            
            //         // Schedule next update
            //         requestAnimationFrame(updateTemperature5);
            //     }
            
            //     // Start the temperature simulation
            //     updateTemperature5();
            
            //     // Return an object with a remove function to clean up particles
            //     return {
            //         remove: removeParticles5
            //     };
            // }



            // Sample setup to create a scene and visualize the temperature simulation in the server room
            // Function to create temperature simulation
function createTemperatureSimulation(group, THREE) {
    const particleCount = 1000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            3 + Math.random() * 7.2, // Range from -20 to +20
            -Math.random() * 5, // Start from bottom to top
            -2 + Math.random() * 7
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

function createTemperatureSimulation1(group, THREE) {
    const particleCount = 3000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            13 + Math.random() * 5.5,
            -Math.random() * 5, // Start from bottom to top
            -2 + Math.random() * 7
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

function createTemperatureSimulation2(group, THREE) {
    const particleCount = 6000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            -13 + Math.random() * 1,
            -Math.random() * 5, // Start from bottom to top
            -2 + Math.random() * 7
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

function createTemperatureSimulation3(group, THREE) {
    const particleCount = 6000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            0.1 + Math.random() * -9,
            -Math.random() * 5, // Start from bottom to top
            -2 + Math.random() * 7
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

function createTemperatureSimulation4(group, THREE) {
    const particleCount = 1000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            3 + Math.random() * 7.2, // Range from -20 to +20
            -Math.random() * 5, // Start from bottom to top
            8.5 + Math.random() * 8.5
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

function createTemperatureSimulation5(group, THREE) {
    const particleCount = 3000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            13 + Math.random() * 5.5,
            -Math.random() * 5, // Start from bottom to top
            8.5 + Math.random() * 8.5
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

function createTemperatureSimulation6(group, THREE) {
    const particleCount = 6000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            -13 + Math.random() * 1,
            -Math.random() * 5, // Start from bottom to top
            8.5 + Math.random() * 8.5
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

function createTemperatureSimulation7(group, THREE) {
    const particleCount = 6000;
    const particles = [];

    // Create temperature particles
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff }) // Initial color
        );

        particle.position.set(
            0.1 + Math.random() * -9,
            -Math.random() * 5, // Start from bottom to top
            8.5 + Math.random() * 8.5
        );

        // Assign temperature based on height (warmer at the top, cooler at the bottom)
        const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
        particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

        particles.push(particle);
        group.add(particle);
    }

    // Function to remove temperature particles
    function removeParticles() {
        particles.forEach(particle => {
            group.remove(particle); // Remove particle from the group
        });
        particles.length = 0; // Clear the array
    }

    // Function to update temperature particles
    function updateTemperature() {
        particles.forEach(particle => {
            // Move particles upward
            particle.position.y += 0.01;

            // Simulate temperature diffusion or other effects here

            // For simplicity, let's just randomly adjust temperature colors
            const temperature = (particle.position.y / 3) * 255; // Scale from 0 to 255 for color representation
            particle.material.color.setRGB(temperature / 255, 0, (255 - temperature) / 255);

            // Reset temperature particle position if it goes beyond certain height
            if (particle.position.y > 3) {
                particle.position.y = -Math.random() * 3; // Reset to the bottom
            }
        });

        // Schedule next update
        requestAnimationFrame(updateTemperature);
    }

    // Start the temperature simulation
    updateTemperature();

    // Return an object with a remove function to clean up particles
    return {
        remove: removeParticles
    };
}

// GUI management


            
            
            function init() {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer();
            
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.appendChild(renderer.domElement);
            
                const group = new THREE.Group();
                scene.add(group);
            
         
            
                // Adjust the camera position to view the simulation
                camera.position.set(5, 5, 20);
                camera.lookAt(5, 0, 5); // Looking at the center of the room
            
                function animate() {
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                }
            
                animate();
            }
            
            init();
            
            
            
            
            
            
            
            

            // function createParticleSystem1(group, THREE) {
            //     let particlesGroup = null;
            //     const colors = [0xff0e00, 0xff7100, 0xffde2d, 0xfbffff,0x80f2ff, 0x01aeff, 0x0029ff]; // Red, Green, Blue, Yellow
            
            //     // Shuffle the colors array to randomize the order
            //     for (let i = colors.length - 1; i > 0; i--) {
            //         const j = Math.floor(Math.random() * (i + 1));
            //         [colors[i], colors[j]] = [colors[j], colors[i]];
            //     }
            
            //     let colorIndex = 0;
            
            //     function createParticles1() {
            //         if (particlesGroup) {
            //             // If particles already exist, no need to create them again
            //             return;
            //         }
            
            //         particlesGroup = new THREE.Group();
            //         const particleCount = 5000;
            //         const radius = 0.05; // Radius of individual spheres
            //         const rows = 15;
            //         const rowHeight = 0.5; // Distance between rows
            //         const rowWidth = 2; // Width for random X position within each row
            //         const particlesPerRow = particleCount / rows;
            
            //         for (let i = 0; i < particleCount; i++) {
            //             const geometry = new THREE.SphereGeometry(radius, 8, 8);
            //             const material = new THREE.MeshBasicMaterial({
            //                 color: colors[colorIndex]
            //             });
            //             colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
            
            //             const particle = new THREE.Mesh(geometry, material);
            
            //             // Arrange particles explicitly within five rows
            //             const row = Math.floor(i / particlesPerRow); // Determine the row index
            //             const xPos = (i % particlesPerRow) - particlesPerRow / 2; // Position within the row
            
            //             particle.position.set(
            //                 xPos * (radius * 2), // X position spaced by radius
            //                 -5 - (row * rowHeight), // Start below the visible area, adjusted for the row index
            //                 2 // Z position (keep at 5 for a slightly different layout)
            //             );
            
            //             // Set initial rotation to 90 degrees (π/2 radians) around the Y-axis
            //             particle.rotation.set( -Math.PI/2, -Math.PI/2,0);
            
            //             particlesGroup.add(particle);
            //         }
            
            //         group.add(particlesGroup);
            
            //         // Start the animation
            //         startAnimation1();
            //     }
            
            //     function removeParticles1() {
            //         if (particlesGroup) {
            //             group.remove(particlesGroup);
            //             particlesGroup.traverse((object) => {
            //                 if (object.isMesh) {
            //                     object.geometry.dispose();
            //                     object.material.dispose();
            //                 }
            //             });
            //             particlesGroup = null;
            //         }
            //     }
            
            //     function startAnimation1() {
            //         const speed = 0.1; // Speed of particle movement
            //         const rotationSpeed = 0.01; // Speed of particle rotation
            
            //         function updateParticles1() {
            //             if (!particlesGroup) {
            //                 // Stop the animation if the particle system is removed
            //                 return;
            //             }
            
            //             particlesGroup.children.forEach(particle => {
            //                 // Move Y position up over time
            //                 particle.position.y += speed;
            
            //                 // Rotate particle over time
            //                 particle.rotation.x += rotationSpeed;
            //                 particle.rotation.y += rotationSpeed;
            //                 particle.rotation.z += rotationSpeed;
            
            //                 // Reset if Y position goes above threshold
            //                 if (particle.position.y > 10) {
            //                     const rowHeight = 2; // Distance between rows
            //                     const row = Math.floor((Math.random() * 5)); // Randomly assign new row index
            //                     particle.position.y = -10 - (row * rowHeight); // Reset to below visible area, adjusted for the row index
            //                 }
            //             });
            
            //             requestAnimationFrame(updateParticles1);
            //         }
            
            //         updateParticles1();
            //     }
            
            //     return {
            //         createParticles1,
            //         removeParticles1
            //     };
            // }
            
            // // Sample setup to create a scene and visualize the particles
            // function init() {
            //     const scene = new THREE.Scene();
            //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            //     const renderer = new THREE.WebGLRenderer();
            
            //     renderer.setSize(window.innerWidth, window.innerHeight);
            //     document.body.appendChild(renderer.domElement);
            
            //     const group = new THREE.Group();
            //     scene.add(group);
            
            //     const { createParticles1, removeParticles1 } = createParticleSystem1(group, THREE);
            //     createParticles1();
            
            //     camera.position.z = 50; // Adjust the camera position to view the particles
            
            //     function animate() {
            //         requestAnimationFrame(animate);
            //         renderer.render(scene, camera);
            //     }
            
            //     animate();
            // }
            
            // init();
            
            
            
            
            
            var gui = new dat.GUI();

            
            
           
            var obj = {
                traverseAndColor: false // Initial state of the checkbox
            };
            
            gui.add(obj, 'traverseAndColor').name('Server Temp').onChange(function(value) {
                if (value) {
                    
                    for (let i=0; i <= 74; i++) {
                        if(i>=5 && i<=19){
                            continue;
                        }
                        
                        // Reset colorIndex for each row
                        colorIndex = i - 1;
                        for (let j = 2; j <= 13; j++) {
                            traverseAndColor(model.children[i].children[j], false);
                        }
                    }
                } else {
                    for (let i=0; i <= 74; i++) {
                        if(i>=5 && i<=19){
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
            
            gui.add(obj1, 'traverseAndColor1').name('Rack wise Temp').onChange(function(value) {
                if (value) {
                    for (let i=0; i <= 74; i++) {
                        if(i>=5 && i<=19){
                            continue;
                        }
                        // Reset colorIndex for each row
                        colorIndex = i ;
                        traverseAndColor1(model.children[i].children[1], false);
                        traverseAndColor1(model.children[i].children[1].children[0], false);
                        }
                    }
                 else {
                    for (let i=0; i <= 74; i++) {
                        if(i>=5 && i<=19){
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
            
            gui.add(obj3, 'traverseAndColor7').name('Hvac Convection ').onChange(function(value) {
                if (value) {
                    // for (let i=0; i <48; i++) {
                        
                    //     // Reset colorIndex for each row
                    //     colorIndex = i - 1;
                       
                    //         traverseAndColor7(model.children[13].children[i], false);
                       
                    // }
                    
                    for (let i=0; i <=267; i++) {
                        
                        // Reset colorIndex for each row
                        colorIndex = i - 1;
                       
                            traverseAndColor7(model.children[75].children[i], false);
                       
                    }
                    // for (let i=20; i <=38; i++) {
                        
                    //     // Reset colorIndex for each row
                    //     colorIndex = i - 1;
                       
                    //         traverseAndColor7(model.children[i], false);
                       
                    // }
                } else {
                    // for (let i=0; i <48; i++) {
                     
                       
                    //         traverseAndColor7(model.children[13].children[i], true);
                       
                    // }
                    for (let i=0; i <= 267; i++) {
                        
                       
                            traverseAndColor7(model.children[75].children[i], true);
                        
                    } 
                    // for (let i=20; i <=38; i++) {
                        
                    //     // Reset colorIndex for each row
                    //     colorIndex = i - 1;
                       
                    //         traverseAndColor7(model.children[i], true);
                       
                    // }
                }
            }); 
            // var obj5 = {
            //     createParticles: false // Initial state of the checkbox
            // };
            
            // const particleSystem = createParticleSystem(group, THREE);
            
            // gui.add(obj5, 'createParticles').name('Particles').onChange(function(value) {
            //     if (value) {
            //         particleSystem.createParticles();
            //     } else {
            //         particleSystem.removeParticles();
            //     }
            // });
       
            var obj6 = {
                createTemperatureSimulation: false // Initial state of the checkbox
            };
            
            let temperatureSimulations = []; // Store all simulation instances
            
            const simulationFunctions = [
                createTemperatureSimulation,
                createTemperatureSimulation1,
                createTemperatureSimulation2,
                createTemperatureSimulation3,
                createTemperatureSimulation4,
                createTemperatureSimulation5,
                createTemperatureSimulation6,
                createTemperatureSimulation7
            ];
            
            // GUI event handler
            gui.add(obj6, 'createTemperatureSimulation').name('Air Flow').onChange(function(value) {
                if (value) {
                    // Iterate over each function and execute it, storing the instances
                    simulationFunctions.forEach(func => {
                        const simulation = func(group, THREE);
                        temperatureSimulations.push(simulation);
                    });
                } else {
                    // Remove all simulations
                    temperatureSimulations.forEach(simulation => {
                        simulation.remove(); // Call the remove function for each simulation
                    });
                    temperatureSimulations = []; // Clear the array
                }
            });

           
            
            
            

        }).catch((error) => {
            console.error('Error loading GLTF model:', error);
        });

        this.listen("updateShape", "updateShape");
    }

    teardown() {
        console.log("teardown lights");
     
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
