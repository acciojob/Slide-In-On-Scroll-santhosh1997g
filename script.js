// Your JS code here.
<script
     // Get all the images on the page
    const images = document.querySelectorAll(".image");
  
    // Function to add the active classname to the image when scrolled to
    function addActiveClassOnScroll() {
        images.forEach(image => {
            // Get the position of the image on the page
            const imagePosition = image.getBoundingClientRect().top;
            // Check if the position of the image is within the viewable area of the screen
            const screenPosition = window.innerHeight / 1.3;
            if (imagePosition < screenPosition) {
                image.classList.add("active");
            }
        });
    }
    // Debounce the addActiveClassOnScroll function
    const debouncedAddActiveClassOnScroll = debounce(addActiveClassOnScroll, 20);

    // Listen for scroll events on the window and call the debounced function
    window.addEventListener("scroll", debouncedAddActiveClassOnScroll);

  </script>
