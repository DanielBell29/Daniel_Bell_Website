document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Daniel Bell's Portfolio!");

    // Modal functionality
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalDescription");

    // Get all images with the class 'modal-trigger'
    var images = document.getElementsByClassName("modal-trigger");

    // Array of descriptions corresponding to images
    var descriptions = [
        "This project showcases a complete AV system installation tailored for a customer's living room. It features an Extron 4x2 HDMI matrix for flexible input-output switching, a Raspberry Pi-based developmental server for seamless mobile control, a 65\" 4K display, a 2.4-meter motorized projection screen, front-of-house speakers, and a high-definition projector. The setup offers an immersive viewing and audio experience for entertainment or presentations.",
        "A state-of-the-art video conferencing room designed and installed for optimal collaboration. This high-end setup allows users to present content on any of the three displays or span a single presentation across all three screens for an extended viewing experience. It combines professional-grade equipment with intuitive usability to enhance productivity and communication.",
        "A closer look at the work involved in wiring and organizing components at the rear of an AV installation. This example highlights the attention to detail to creating a functional and visually clean system that performs reliably.",
        "This installation includes a sleek 65\" display paired with front-of-house speakers, delivering crystal-clear audio and visuals. The setup incorporates a built-in amplifier with multiple inputs, enabling the seamless integration of a record player to the same speaker system, creating a versatile and enjoyable audio-visual experience for the user.",
        "This multi-functional room features advanced AV capabilities, including a 4x2 HDMI matrix for seamless switching between four input sources and two output destinations. The setup also includes voice reinforcement for presentations and video conferencing capabilities, making it a versatile space for meetings and events.",
        "An elegant and modern installation featuring a large display and a video conferencing bar. Users can easily switch between the main PC input and a visitor's laptop, ensuring smooth and professional presentations or collaborations in a versatile workspace.",
        "An example of the meticulous rack wiring for an AV setup. This image demonstrates the precision and skill involved in ensuring reliable connections, efficient cable management, and a clean, professional appearance.",
        "A large-scale display installation featuring multiple repeater screens fed from a distribution amplifier. This configuration allows the same image to be broadcast across all displays, ensuring consistent and synchronized visuals throughout the space.",
        "A stunning setup of three floor-to-ceiling displays, each fed by a video matrix. This allows users the flexibility to present separate content on each screen or combine them for a unified presentation. The design is ideal for impactful presentations or immersive multimedia experiences.",
        "A visually striking installation of five displays seamlessly joined together to form one cohesive image. This setup is perfect for high-impact presentations, digital signage, or showcasing intricate visuals in vibrant detail.",
        "This image showcases the installation of an audio patch panel and an induction loop amplifier. The setup provides an accessible audio solution, ensuring crystal-clear sound and compliance with accessibility requirements for individuals with hearing impairments.",
        "A dual-projector installation designed for a religious hall. The setup provides flexibility for displaying content across two screens simultaneously, creating an immersive and engaging experience for worship or special events.",
        "A short-throw projector installed in a client's living room, perfect for creating a home theater experience. This setup maximizes the viewing area even in compact spaces, delivering sharp visuals and an intimate atmosphere for movies or presentations.",
        "A large-format fixed-frame projector screen paired with a laser projector creates a stunning visual solution for large-scale lectures, events, and presentations. This setup ensures high brightness, sharp detail, and vivid colors, making it perfect for professional or educational environments where impactful visuals are crucial.",
        "This room is designed to simulate a Wall Street-style trading experience. Equipped with a powerful video matrix, it enables seamless switching and presentation of any input source to any of the four displays. The flexible and dynamic setup provides an engaging and immersive environment for financial analysis and decision-making simulations.",
        "An example of a fully equipped Microsoft Teams Certified Yealink Room. This professional-grade setup includes a TAP controller for effortless room management, ensuring seamless video conferencing and collaboration. It offers a streamlined and intuitive user experience for modern hybrid workspaces.",
        "A showcase of cable management behind a display, demonstrating a commitment to clean and organized wiring. This photograph highlights the precision and care taken to create a professional finish that not only looks great but also ensures reliable system performance.",
        "A sophisticated living room installation featuring hidden cabling for a clean and modern aesthetic. The addition of a soundbar enhances audio quality, delivering rich and immersive sound for movies, music, and everyday entertainment without compromising on style."
    ];

    // Check the current page using the document's URL
    var currentPage = window.location.pathname.split("/").pop(); // Get the current page file name

    let currentIndex = -1; // Track the currently displayed image

    // Loop through all images and add click event
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            currentIndex = i; // Update the current index
            
            // Only set the description if the page is av-installation.html
            if (currentPage === "av-installation.html") {
                modalCaption.innerText = descriptions[i]; // Set the corresponding description
            } else {
                modalCaption.innerText = ""; // Clear description for other pages
            }
        }
    }

    // Close modal on clicking <span> (x) or outside the image
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { modal.style.display = "none"; }
    modal.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }

    // Navigate with left and right arrow keys
    document.addEventListener("keydown", function(event) {
        if (modal.style.display === "block") { // Only respond if the modal is open
            if (event.key === "ArrowRight") {
                // Show the next image
                currentIndex = (currentIndex + 1) % images.length;
                modalImg.src = images[currentIndex].src;
                if (currentPage === "av-installation.html") {
                    modalCaption.innerText = descriptions[currentIndex];
                } else {
                    modalCaption.innerText = "";
                }
            } else if (event.key === "ArrowLeft") {
                // Show the previous image
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                modalImg.src = images[currentIndex].src;
                if (currentPage === "av-installation.html") {
                    modalCaption.innerText = descriptions[currentIndex];
                } else {
                    modalCaption.innerText = "";
                }
            }
        }
    });
});




// For the portal5 to portal8 image set
let currentIndex1 = 0;
let images1 = ['portal5.jpg', 'portal6.jpg', 'portal7.jpg', 'portal8.jpg'];

function changeImageSet1(direction) {
    console.log('changeImageSet1 called');
    if (direction === 'next') {
        currentIndex1 = (currentIndex1 + 1) % images1.length; // Loop back to the first image
    } else if (direction === 'prev') {
        currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length; // Loop to the last image
    }

    console.log('Current Index1: ' + currentIndex1);
    const imageElement1 = document.getElementById('imageSlide');
    if (imageElement1) {
        imageElement1.src = images1[currentIndex1];
    } else {
        console.error('Image element1 not found');
    }
}

// For the portal9 to portal14 image set
let currentIndex2 = 0;
let images2 = ['portal9.jpg', 'portal10.jpg', 'portal11.jpg', 'portal12.jpg', 'portal13.jpg', 'portal14.jpg'];

function changeImageSet2(direction) {
    console.log('changeImageSet2 called');
    if (direction === 'next') {
        currentIndex2 = (currentIndex2 + 1) % images2.length; // Loop back to the first image
    } else if (direction === 'prev') {
        currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length; // Loop to the last image
    }

    console.log('Current Index2: ' + currentIndex2);
    const imageElement2 = document.getElementById('imageSlide2');
    if (imageElement2) {
        imageElement2.src = images2[currentIndex2];
    } else {
        console.error('Image element2 not found');
    }
}

// For the portal15 to portal16 image set
let currentIndex3 = 0;
let images3 = ['portal15.jpg', 'portal16.jpg'];

function changeImageSet3(direction) {
    console.log('changeImageSet3 called');
    if (direction === 'next') {
        currentIndex3 = (currentIndex3 + 1) % images3.length; // Loop back to the first image
    } else if (direction === 'prev') {
        currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length; // Loop to the last image
    }

    console.log('Current Index3: ' + currentIndex3);
    const imageElement3 = document.getElementById('imageSlide3');
    if (imageElement3) {
        imageElement3.src = images3[currentIndex3];
    } else {
        console.error('Image element3 not found');
    }
}

// For the maths1 to maths5 image set
let currentIndex4 = 0;
let images4 = ['maths1.jpg', 'maths2.jpg', 'maths3.jpg', 'maths4.jpg', 'maths5.jpg'];

function changeImageSet4(direction) {
    console.log('changeImageSet4 called');
    if (direction === 'next') {
        currentIndex4 = (currentIndex4 + 1) % images4.length; // Loop back to the first image
    } else if (direction === 'prev') {
        currentIndex4 = (currentIndex4 - 1 + images4.length) % images4.length; // Loop to the last image
    }

    console.log('Current Index4: ' + currentIndex4);
    const imageElement4 = document.getElementById('imageSlide4');
    if (imageElement4) {
        imageElement4.src = images4[currentIndex4];
    } else {
        console.error('Image element4 not found');
    }
}




// Slideshow Images and Links
const slides = [
    { src: "install1.png", link: "av-installation.html" },
    { src: "rack1.jpg", link: "av-rack-build.html" },
    { src: "web1.jpg", link: "web-development.html" },
    { src: "portal2.jpg", link: "website1.html" },
    { src: "burns1.jpg", link: "website2.html" },
    { src: "maths1.jpg", link: "website3.html" },
    { src: "user-guide1.jpg", link: "website4.html" },
    { src: "living-room1.jpg", link: "website5.html" },
    { src: "portfolio1.jpg", link: "website6.html" },
];

let currentSlide = 0;
const slideshowPhoto = document.getElementById("slideshow-photo");
const slideshowLink = document.getElementById("slideshow-link");

function updateSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideshowPhoto.src = slides[currentSlide].src;
    slideshowLink.href = slides[currentSlide].link;
}

// Change slide every 5 seconds
setInterval(updateSlide, 5000);