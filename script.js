// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    
    const threshold = 128;
    if (r + g + b < threshold * 3) {
      return getRandomColor(); 
    }
  
    return `rgba(${r}, ${g}, ${b}, 0.85)`;
  }
  

  function updateGradientColor() {
    const gradient = document.querySelector('.gradient');
    const newColor = getRandomColor();
  
   
    gradient.style.transition = 'background-color 0.5s ease-in-out'; 
    gradient.style.backgroundColor = newColor;
  
   
    setTimeout(() => {
      gradient.style.transition = '';
    }, 500); 
  }
  

  updateGradientColor();
  

  setInterval(updateGradientColor, 1000);
  
  function showPopup() {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
      <div class="popup-content">
        <h2>Under Maintenance</h2>
        <p> Our servers are under maintenance .</p>
        <button class="close-button">Close</button>
      </div>
    `;
    document.body.appendChild(popup);
  
   
    const closeButton = popup.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
      document.body.removeChild(popup);
    });
  }
  
 
  let timeoutId = setTimeout(showPopup, 2000);
  
  // Listen for user interaction events (e.g., mousemove, keydown)
  document.addEventListener("mousemove", handleUserInteraction);
  document.addEventListener("keydown", handleUserInteraction);
  
  function handleUserInteraction() {
   
    clearTimeout(timeoutId);
  
    // Remove the event listeners to prevent further checks
    document.removeEventListener("mousemove", handleUserInteraction);
    document.removeEventListener("keydown", handleUserInteraction);
  }
  
