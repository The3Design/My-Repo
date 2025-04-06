document.addEventListener("DOMContentLoaded", function () {
        const projects = [
            
            {
                title: "RiverDell Castel", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                description: "Fantacy Environment", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                link: "https://youtu.be/Nutg3dwEW8g", // <---  Link if needed, can be placeholder
                // image: "models/new4.png",  // REMOVE image property for video project - IMPORTANT
                videoSrc: "https://youtu.be/Nutg3dwEW8g", // <--- ADD videoSrc for new video project - VIDEO TEMPLATE
                poster: "models/3.jpg" // <--- OPTIONAL poster for new video project - VIDEO TEMPLATE
            },

            {
                title: "Apache RTR 160 4v 1",
                description: "A High Quality 3D Model of Tvs Apache. (Blender)",
                link: "models/new01.png",
                image: "models/new01.png" // Keeping image for Apache RTR 160 4v 1 as requested
            },
    
            {
                title: "Apache RTR 160 4v 2",
                description: "A High Quality 3D Model of Tvs Apache. (Blender)",
                link: "models/new1.png",
                image: "models/new1.png" // Keeping image for Apache RTR 160 4v 2 as requested
            },
    
            {
                title: "3D Perfume Bottle",
                description: "3D Product Visualization. (Blender)",
                link: "models/new2.png",
                image: "models/new2.png" // Keeping image for Perfume Bottle and adding "models/" prefix
            },
    
            {
                title: "3D Mordern Living Room",
                description: "Realistic 3D Interior. (Blender)",
                link: "models/new3.png",
                image: "models/new3.png" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Stormey Ocean", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                description: "Animated Ocean", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                link: "Videos/ocean 4k.mp4", // <---  Link if needed, can be placeholder
                // image: "models/new4.png",  // REMOVE image property for video project - IMPORTANT
                videoSrc: "Videos/ocean 4k.mp4", // <--- ADD videoSrc for new video project - VIDEO TEMPLATE
                poster: "models/ocean.png" // <--- OPTIONAL poster for new video project - VIDEO TEMPLATE
            },
    
    
            {
                title: "3D Sunset Window View",
                description: "Realistic 3D Interior. (Blender)",
                link: "models/new4.png",
                image: "models/new4.png" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "3D Stylize Living Room",
                description: "Mordern Realistic 3D Interior. (Blender)",
                link: "models/animation1.png",
                image: "models/animation1.png" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Atom 3D Character",
                description: "Detailed Robotic Character. (Blender)",
                link: "models/animation2.jpg",
                image: "models/animation2.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "3D Ticket Kiosk",
                description: "Futuristic Ticket Kiosk. (Blender)",
                link: "models/animation3.jpg",
                image: "models/animation3.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Energy Drink Product 1 ",
                description: "Product Visualization. (Blender)",
                link: "models/animation4.jpg",
                image: "models/animation4.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "3D Energy Drink Product 2 ",
                description: "Product Visualization. (Blender)",
                link: "models/animation6.jpg",
                image: "models/animation6.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "A Street Night Scene",
                description: "3D Game Environment. (Blender)",
                link: "models/animation5.jpeg",
                image: "models/animation5.jpeg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Lord Hanuman 1",
                description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
                link: "models/animation7.jpg",
                image: "models/animation7.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Lord Hanuman 2",
                description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
                link: "models/animation8.jpg",
                image: "models/animation8.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Lord Hanuman 3",
                description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
                link: "models/animation9.jpg",
                image: "models/animation9.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Lord Hanuman 4",
                description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
                link: "models/animation10.jpg",
                image: "models/animation10.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Ai Clinic Model",
                description: "3D Futuristic Clinic Visualization With Detailed Interior. (Blender)",
                link: "models/animation11.jpg",
                image: "models/animation11.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Shampoo Bottle 1",
                description: "Product Visualization With Liquid Simulation. (Blender)",
                link: "models/animation12.png",
                image: "models/animation12.png" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Shampoo Bottle 2",
                description: "Product Visualization With Liquid Simulation. (Blender)",
                link: "models/animation13.jpg",
                image: "models/animation13.jpg" // Keeping image and adding "models/" prefix
            },

            {
                title: "3D Shampoo Bottel Advertisement", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                description: "Product Animation", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                link: "Videos/13.mp4", // <---  Link if needed, can be placeholder
                // image: "models/new4.png",  // REMOVE image property for video project - IMPORTANT
                videoSrc: "Videos/13.mp4", // <--- ADD videoSrc for new video project - VIDEO TEMPLATE
                poster: "models/animation13.jpg" // <--- OPTIONAL poster for new video project - VIDEO TEMPLATE
            },
    
    
            {
                title: "3D Water Kiosk",
                description: "3D Water Dispensing Machine. (Blender)",
                link: "models/animation14.jpg",
                image: "models/animation14.jpg" // Keeping image and adding "models/" prefix
            },

            
            {
                title: "3D Study Room Interior",
                description: "Stylizes 3D Study Room. (Blender)",
                link: "models/animation15.jpeg",
                image: "models/animation15.jpeg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Lord Mahadev's Trishul",
                description: "3D Weapon In Himalayan Snow Fall. (Blender + Unity)",
                link: "models/animation16.jpg",
                image: "models/animation16.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Ancient Indian Temple",
                description: "3D Indian Temple. [Environment Designing] (Blender)",
                link: "models/animation17.jpg",
                image: "models/animation17.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "PORSCHE 718 Cayman GT4 RS 1",
                description: "A 3D Hyper Realistic Car Model. (Blender)",
                link: "models/animation18.jpg",
                image: "models/animation18.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "PORSCHE 718 Cayman GT4 RS 2",
                description: "A 3D Hyper Realistic Car Model. (Blender)",
                link: "models/animation19.jpg",
                image: "models/animation19.jpg" // Keeping image and adding "models/" prefix
            },
            {
                title: "PORSCHE 718 Cayman GT4 RS 3",
                description: "A 3D Hyper Realistic Car Model. (Blender)",
                link: "models/animation20.jpg",
                image: "models/animation20.jpg" // Keeping image and adding "models/" prefix
            },

            {
                title: "PORSHE 718 Cayman GT4 RS", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                description: "PORSHE 718 Cayman GT4 RS Animation.", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                link: "Videos/20.mp4", // <---  Link if needed, can be placeholder
                // image: "models/new4.png",  // REMOVE image property for video project - IMPORTANT
                videoSrc: "Videos/20.mp4", // <--- ADD videoSrc for new video project - VIDEO TEMPLATE
                poster: "models/animation20.jpg" // <--- OPTIONAL poster for new video project - VIDEO TEMPLATE
            },
    
    
            {
                title: "3D Perfume Bottle",
                description: "A 3D Perfume Bottle. (Blender)",
                link: "models/animation21.jpg",
                image: "models/animation21.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Animated Ocean",
                description: "Animated Ocean With Floting Boat. (Blender)",
                link: "models/animation22.jpg",
                image: "models/animation22.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Indian Female Character 1",
                description: "A Detailed 3D Female Character Model. (Blender) ",
                link: "models/animation23.jpg",
                image: "models/animation23.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "3D Indian Female Character 2",
                description: "A Detailed 3D Female Character Model. (Blender) ",
                link: "models/animation32.jpeg",
                image: "models/animation32.jpeg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "PORSCHE 911 TURBO S 1",
                description: "Realistic Porsche 911 Model With Environment. (Blender)",
                link: "models/animation24.jpg",
                image: "models/animation24.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "PORSCHE 911 TURBO S 2",
                description: "Realistic Porsche 911 Model With Environment. (Blender)",
                link: "models/animation26.jpg",
                image: "models/animation26.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "3D Mordern Villa",
                description: "3D Exterior Model Designing. (Blender)",
                link: "models/animation25.jpg",
                image: "models/animation25.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Chavaprash Bottel",
                description: "Product Designing",
                link: "models/animation27.png",
                image: "models/animation27.png" // Keeping image and adding "models/" prefix
            },

            {
                title: "3D Chavaprash Bottel Advertisement", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                description: "Product Animation.", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                link: "Videos/27.mp4", // <---  Link if needed, can be placeholder
                // image: "models/new4.png",  // REMOVE image property for video project - IMPORTANT
                videoSrc: "Videos/27.mp4", // <--- ADD videoSrc for new video project - VIDEO TEMPLATE
                poster: "models/animation27.png" // <--- OPTIONAL poster for new video project - VIDEO TEMPLATE
            },
    
    
            {
                title: "3D Mobile Clinic Van",
                description: "Fully Equipped 3D Mobile Clinic. (Blender)",
                link: "models/animation28.jpg",
                image: "models/animation28.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "A Old Indian House",
                description: "Exterior of An Old Indian House. (Blender)",
                link: "models/animation29.jpeg",
                image: "models/animation29.jpeg" // Keeping image and adding "models/" prefix
            },

            {
                title: "A Old Indian House", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                description: "Exterior of An Old Indian House. (Blender) Animation", // <--- NEW VIDEO PROJECT - VIDEO TEMPLATE
                link: "Videos/29.mp4", // <---  Link if needed, can be placeholder
                // image: "models/new4.png",  // REMOVE image property for video project - IMPORTANT
                videoSrc: "Videos/29.mp4", // <--- ADD videoSrc for new video project - VIDEO TEMPLATE
                poster: "models/animation29.jpeg" // <--- OPTIONAL poster for new video project - VIDEO TEMPLATE
            },
    
    
            {
                title: "A Mordern House",
                description: "Exterior of An Mordern Indian House. (Maya)",
                link: "models/animation30.jpg",
                image: "models/animation30.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Water Bottle Product",
                description: "Product Visualization With Real Time Water Simulation. (Blender)",
                link: "models/animation33.jpg",
                image: "models/animation33.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Landscape Scenery 1",
                description: "Beautiful Landscape Scenery With Grass Simulation. (Blender)",
                link: "models/animation34.jpg",
                image: "models/animation34.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "Landscape Scenery 2",
                description: "Beautiful Landscape Scenery With Grass Simulation. (Blender)",
                link: "models/animation36.jpg",
                image: "models/animation36.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "The Riverdell Castel",
                description: "Complex 3D Environment. (Blender)",
                link: "models/animation35.png",
                image: "models/animation35.png" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Airport / Metro Ticket Kiosk",
                description: "Model of Ticket Kiosk For Metro Station & Airport. (Blender)",
                link: "models/animation38.png",
                image: "models/animation38.png" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Flag Hosting",
                description: "3D Flag Simulation Scene. (Blender)",
                link: "models/animation39.jpeg",
                image: "models/animation39.jpeg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Blood Reaper",
                description: "A Stylized Game Wepon. (Blender)",
                link: "models/animation40.jpeg",
                image: "models/animation40.jpeg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Haunted Castel",
                description: "A 3D Haunted Castel. (Unity)",
                link: "models/animation41.jpg",
                image: "models/animation41.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Toyota Fortuner",
                description: "3D Car Model of Toyota Fortuner. (Maya)",
                link: "models/animation42.jpg",
                image: "models/animation42.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "Reflections of Ambition",
                description: "A 3D Model of Pawn And King With Mirror Refliction. (Blender + Photoshop)",
                link: "models/animation43.png",
                image: "models/animation43.png" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Jhonny Bravo",
                description: "3D Character Modeling. (Maya)",
                link: "models/animation44.jpg",
                image: "models/animation44.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Among Us",
                description: "3D Game Character Modeling. (Maya)",
                link: "models/animation45.jpg",
                image: "models/animation45.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Bubbles",
                description: "3D Cartoon Character Modeling. (Maya)",
                link: "models/animation46.jpg",
                image: "models/animation46.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Minion",
                description: "3D Cartoon Character Modeling. (Maya)",
                link: "models/animation47.jpg",
                image: "models/animation47.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Bedroom Interior",
                description: "Realistic Interior. (Blender)",
                link: "models/animation48.jpg",
                image: "models/animation48.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Teddy Bear",
                description: "Teddy Bear With Hair And Fur Simulation. (Blender)",
                link: "models/animation49.jpg",
                image: "models/animation49.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "3D Terrain",
                description: "Terrain Creation. (Unity)",
                link: "models/animation50.png",
                image: "models/animation50.png" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "RANGE ROVER VELAR 1",
                description: "Car Modeling. (Blender)",
                link: "models/animation52.jpg",
                image: "models/animation52.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "RANGE ROVER VELAR 2",
                description: "Car Modeling. (Blender)",
                link: "models/animation53.jpg",
                image: "models/animation53.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Realistic 3D Environment",
                description: "Enviroment Designing. (Blender)",
                link: "models/animation54.jpg",
                image: "models/animation54.jpg" // Keeping image and adding "models/" prefix
            },
    
            {
                title: "Pistol",
                description: "3D Gun Modeling. (Blender)",
                link: "models/animation55.jpg",
                image: "models/animation55.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Sword In A Stone",
                description: "3D Weapon Modling With Realistic Environment. (Unity)",
                link: "models/animation58.jpg",
                image: "models/animation58.jpg" // Keeping image and adding "models/" prefix
            },
    
    
            {
                title: "Laser Weapon",
                description: "A Futurestic Weapon. (Blender)",
                link: "models/animation59.jpeg",
                image: "models/animation59.jpeg" // Keeping image and adding "models/" prefix
            },
    
    
        ];
    
        const projectContainer = document.getElementById("project-container");
    
        projects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project");
    
            let projectHTML = "";
    
    
             if (project.videoSrc && !project.image) { // NEW CONDITION: videoSrc exists AND image is NOT present
                // NEW VIDEO PROJECT TEMPLATE (triggered by videoSrc and NO image)
                projectHTML = `
                    <div class="new-video-project-container">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="video-player-container">
                            <video controls poster="${project.poster || ''}" width="100%" height="auto" style="border-radius: 10px; display: block; max-width: 100%;">
                                <source src="${project.videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                         <a href="${project.link}" target="_blank">
                            <button>View Project</button>
                        </a>
                    </div>
                `;
            }
            else if (project.type === "video") { // Keep your video project template as is (if you are still using it)
                // ... (Your video project template code) ...
                projectHTML = `
                    <div class="video-project">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="video-player-container">
                            <video controls poster="${project.poster || ''}" width="480" height="270">
                                <source src="${project.videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                `;
            } else { // Modified ELSE block for image projects (and now video if videoSrc exists)
                // Modified Image Project Template to check for videoSrc
                if (project.videoSrc) {
                    // Display Video Player if videoSrc is present (within image project template)
                    projectHTML = `
                        <div class="image-project-video-container">
                            <video controls poster="${project.poster || ''}" width="100%" height="auto" style="border-radius: 10px; display: block; max-width: 100%;">
                                <source src="${project.videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                                </video>
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <a href="${project.link}" target="_blank">
                                <button>View Project</button>
                            </a>
                        </div>
                    `;
                } else {
                    // Display Image (default image project template - when no videoSrc)
                    projectHTML = `
                        <img src="${project.image}" alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">
                            <button>View Project</button>
                        </a>
                    `;
                }
            }
    
            projectDiv.innerHTML = projectHTML;
            projectContainer.appendChild(projectDiv);
        });
    });    

