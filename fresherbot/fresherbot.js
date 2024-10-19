// Get all the video thumbnail links
const videoLinks = document.querySelectorAll('.play-video');

videoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the video URL from the 'data-video' attribute
        const videoUrl = this.getAttribute('data-video');

        // Create a new video element
        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');  // Add controls to the video
        videoElement.setAttribute('autoplay', '');  // Auto-play the video when clicked
        videoElement.style.width = '100%';          // Full width video
        videoElement.style.borderRadius = '10px';

        // Set the video source
        const sourceElement = document.createElement('source');
        sourceElement.setAttribute('src', videoUrl);
        sourceElement.setAttribute('type', 'video/mp4');
        videoElement.appendChild(sourceElement);

        // Replace the thumbnail with the video element
        this.innerHTML = '';  // Clear out the thumbnail image
        this.appendChild(videoElement);  // Insert the video element in place
    });
});

// Get references to the container and arrow buttons
const newContainer = document.getElementById('newScenariosContainer');
const newLeftArrow = document.getElementById('newLeftArrow');
const newRightArrow = document.getElementById('newRightArrow');

// Get all the scenario cards
const newCards = document.querySelectorAll('.new-scenario-card');

// Calculate the width of one card plus the gap (20px)
const newCardWidth = newCards[0].offsetWidth + 20;

// Track the current scroll position
let newScrollPosition = 0;

// Function to handle right arrow click (scroll right)
newRightArrow.addEventListener('click', () => {
    // If we've reached the end, scroll back to the start
    if (newScrollPosition >= (newCards.length - 3) * newCardWidth) {
        newScrollPosition = 0;
    } else {
        newScrollPosition += newCardWidth;
    }

    // Scroll the container to the new position
    newContainer.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
    });
});

// Function to handle left arrow click (scroll left)
newLeftArrow.addEventListener('click', () => {
    // If we've reached the start, scroll to the end
    if (newScrollPosition <= 0) {
        newScrollPosition = (newCards.length - 3) * newCardWidth;
    } else {
        newScrollPosition -= newCardWidth;
    }

    // Scroll the container to the new position
    newContainer.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
    });
});
