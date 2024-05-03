let avlkey = ['loreal', 'kevin murphy', 'hair haven', 'the hair hub', 'beauty bar', 'the style lounge', 'hair', 'serum'];
    const resultbox = document.getElementById("searchOptions");
    const inputbox = document.getElementById("input-box");

    inputbox.onkeyup = function () {
      let result = [];
      let input = inputbox.value;
      if (input.length) {
        result = avlkey.filter((keyword) => {
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
      }
      display(result);
      if (!result.length) {
        resultbox.innerHTML = '';
      }
    }

    function display(result) {
      const content = result.map((list) => {
        return "<li onclick='selectInput(this)'>" + list + "</li>";
      });
      resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }

    function selectInput(list) {
      inputbox.value = list.innerHTML;
      resultbox.innerHTML = '';
    }

    /*search functionality*/
    const searchButton = document.getElementById("search");
    const inputBox = document.getElementById("input-box");
    const notFoundLabel = document.getElementById("label-not-found");

    // Function to perform search action or navigate to default page
    function performSearchAction() {
      const searchQuery = inputBox.value.toLowerCase();

      // Hiding the label initially
      notFoundLabel.style.display = "none";
      

 
      

      // Navigate to specific webpages based on search query
      switch (searchQuery) {
        case "loreal":
          window.location.href = "/loreal";
          break;
        case "the style lounge":
          window.location.href = "/loreal";
          break;
        case "kevin murphy":
          window.location.href = "/loreal";
          break;
          case "the hair hub":
          window.location.href = "/loreal";
          break;
          case "beauty bar":
          window.location.href = "/loreal";
          break;
          case "kevin murphy":
          window.location.href = "/loreal";
          case "hair haven":
          window.location.href = "/loreal";
          break;
          break;
        default:
          notFoundLabel.style.display = "block";
          

      }
    }

    // Event listener for search button click
    searchButton.addEventListener("click", performSearchAction);

    // Event listener for input box changes
    inputBox.addEventListener("input", function () {
      // Hide the label when input changes
      notFoundLabel.style.display = "none";
    });

    // Event listener for Enter key press
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        performSearchAction();
        
      }
    });
   
    document.addEventListener("click", function (event) {
      const target = event.target;
      if ((target !== inputbox && target !== resultbox && !resultbox.contains(target)) || target.key==="enter") {
        resultbox.innerHTML = '';
      }
    });


    //categories list
    document.addEventListener("DOMContentLoaded", function () {
      var categories = document.getElementById("categories");
      var submenu = document.getElementById("submenu");
      // Flag to track if the submenu is clicked
      var submenuClicked = false;
      // Event listener for hovering over the "Categories" element
      categories.addEventListener("mouseenter", function () {
        // Display submenu only if it's not clicked
        if (!submenuClicked) {
          submenu.style.display = "block";
        }
      });

      // Event listener for mouse leaving the "Categories" element
      categories.addEventListener("mouseleave", function () {
        // Hide submenu if it's not clicked
        if (!submenuClicked) {
          submenu.style.display = "none";
        }
      });

      // Event listener for clicking on the submenu
      categories.addEventListener("click", function () {
        // Toggle the submenuClicked flag
        submenuClicked = !submenuClicked;
      });
    });

    //footer click event
    document.addEventListener("DOMContentLoaded", function () {
      const logo = document.querySelector('.logo');
      logo.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default action (i.e., following the link)

        // Scroll to the top of the page smoothly
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    });
    // background image changer

    const bgImageUrls = ['images/zendaya-hero.jpg', 'images/Anushka.jpeg','images/back3.jpg'];


    const bgElement = document.getElementById("bgg");
    const tryfree = document.getElementById("trying");


    let currentIndex = 0;


    function changeBackgroundImage() {

      bgElement.style.backgroundImage = `url(${bgImageUrls[currentIndex]})`;
      if (currentIndex == 1) {
        tryfree.style.backgroundColor = "pink";

      }
      else if(currentIndex==2){
        tryfree.style.backgroundColor = "white";
      }
      else{
        tryfree.style.backgroundColor = "wheat";
      }
      bgElement.style.transition = "background-position 1s ease-in-out";
      bgElement.style.backgroundPosition = "100% 50%";
      setTimeout(() => {
        bgElement.style.transition = "none";
        bgElement.style.backgroundPosition = "0% 50%";
      }, 2000);


      currentIndex = (currentIndex + 1) % bgImageUrls.length;
    }
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);

    // dark modetheme
    document.addEventListener('DOMContentLoaded', function () {
      const darkModeToggle = document.getElementById('darkModeToggle');
      const body = document.body;
  
      // Check if dark mode preference is saved in localStorage
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode === 'true') {
          body.classList.add('dark-mode');
          darkModeToggle.checked = true; // Set the toggle switch to ON
      }
  
      // Toggle dark mode when the toggle switch is clicked
      darkModeToggle.addEventListener('change', function () {
          if (this.checked) {
              body.classList.add('dark-mode');
              localStorage.setItem('darkMode', 'true');
          } else {
              body.classList.remove('dark-mode');
              localStorage.setItem('darkMode', 'false');
          }
      });
  });

  function toggleProfilePopup() {
    const profilePopup = document.getElementById('profilePopup');
    profilePopup.classList.toggle('active');

   
}
