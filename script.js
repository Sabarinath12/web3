// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Ensure the color is not too dark (adjust threshold as needed)
    const threshold = 128;
    if (r + g + b < threshold * 3) {
      return getRandomColor(); // Recursively try again
    }
  
    return `rgba(${r}, ${g}, ${b}, 0.85)`;
  }
  
  // Function to update the gradient color with smooth fade
  function updateGradientColor() {
    const gradient = document.querySelector('.gradient');
    const newColor = getRandomColor();
  
    // Apply a smooth fade animation when changing the background color
    gradient.style.transition = 'background-color 0.5s ease-in-out'; // Adjust duration and timing function as needed
    gradient.style.backgroundColor = newColor;
  
    // Reset the transition property after the animation completes
    setTimeout(() => {
      gradient.style.transition = '';
    }, 500); // Adjust the timeout to match the duration of the animation
  }
  
  // Call updateGradientColor() initially
  updateGradientColor();
  
  // Update the gradient color every 5 seconds (5000 milliseconds)
  setInterval(updateGradientColor, 5000);
  
  // Define a function to show the pop-up
  function showPopup() {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
      <div class="popup-content">
        <h2>Under Maintenance</h2>
        <p>We apologize for the inconvenience. Our website is currently under maintenance. Please check back later.</p>
        <button class="close-button">Close</button>
      </div>
    `;
    document.body.appendChild(popup);
  
    // Add a close button to the pop-up
    const closeButton = popup.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
      document.body.removeChild(popup);
    });
  }
  
  // Delay showing the pop-up only if the user stays for more than 2 seconds
  let timeoutId = setTimeout(showPopup, 2000);
  
  // Listen for user interaction events (e.g., mousemove, keydown)
  document.addEventListener("mousemove", handleUserInteraction);
  document.addEventListener("keydown", handleUserInteraction);
  
  // Function to handle user interaction
  function handleUserInteraction() {
    // Clear the timeout if the user interacts within 2 seconds
    clearTimeout(timeoutId);
  
    // Remove the event listeners to prevent further checks
    document.removeEventListener("mousemove", handleUserInteraction);
    document.removeEventListener("keydown", handleUserInteraction);
  }
  
