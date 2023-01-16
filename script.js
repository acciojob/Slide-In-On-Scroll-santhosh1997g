let images= document.querySelectorAll("img")

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

function SlideInHandler(e){
    images.forEach(image => {
        //find mid-image postion
        let DisplayImage = (window.scrollY + window.innerHeight) - image.height/2;
        let endImagePosition = image.offsetTop+image.height;

        let showImage = image.offsetTop < DisplayImage;
        let notScrolledPast = window.scrollY < endImagePosition

        if(showImage && notScrolledPast)
            image.classList.add("active");
        else
            image.classList.remove("active");
    });
}
window.addEventListener("scroll", debounce(SlideInHandler))

