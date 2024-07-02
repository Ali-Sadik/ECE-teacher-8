// Add JavaScript code here
const moreBtn = document.getElementById("more-btn")
const optionWindow = document.getElementById("more-options")
function makeWindowNotVisible(){
    optionWindow.classList.contains("notVisible") ? optionWindow.classList.remove("notVisible") : optionWindow.classList.add("notVisible");
}
moreBtn.addEventListener('click', makeWindowNotVisible)

// Function to show modal with animation
function openModal() {
    var modal = document.getElementById('filesModal');
    modal.classList.add('active');
    setTimeout(function() {
        modal.querySelector('.modal-content').classList.add('active');
    }, 50); // Delay to ensure modal is fully displayed before adding content animation
}
function openModal2() {
    var modal = document.getElementById('profileModal');
    modal.classList.add('active');
    setTimeout(function() {
        modal.querySelector('.modal-content').classList.add('active');
    }, 50); // Delay to ensure modal is fully displayed before adding content animation
}

// Function to close modal with animation
function closeModal() {
    var modal = document.getElementById('filesModal');
    modal.querySelector('.modal-content').classList.remove('active');
    setTimeout(function() {
        modal.classList.remove('active');
    }, 300); // Delay to match CSS transition duration
}
function closeModal2() {
    var modal = document.getElementById('profileModal');
    modal.querySelector('.modal-content').classList.remove('active');
    setTimeout(function() {
        modal.classList.remove('active');
    }, 300); // Delay to match CSS transition duration
}

// Function to navigate and open modal
function navigateToAndOpenModal(url) {
    showProgressBar(function () {
        openModal();
    });
}
function navigateToAndOpenModal2(url) {
    showProgressBar(function () {
        openModal2();
    });
}


  // Function to show progress bar for 1 second
  function showProgressBar(callback) {
    // Show progress bar
    document.getElementById("progress-bar").style.display = "block";

    // Hide progress bar after 1 second
    setTimeout(function () {
      document.getElementById("progress-bar").style.display = "none";
      if (callback) {
        callback(); // Execute callback function
      }
    }, 1000);
  }

  // Function to navigate to a URL
  function navigateTo(url) {
    showProgressBar(function () {
      window.location.href = url; // Redirect after progress bar animation completes
    });
  }

  // Event listener to show progress bar on page load
  window.addEventListener("load", function () {
    showProgressBar();
  });


  // Function to handle button click
// Function to handle button click
function handleButtonClick() {
    if (window.innerWidth < 768) {
        // Show progress bar before redirecting
        showProgressBar(function () {
            window.location.href = 'pannel/pannel.html';
        });
    } else {
        // Open the modal
        navigateToAndOpenModal('pannel/pannel.html');
    }
}

function handleButtonClick2() {
    if (window.innerWidth < 768) {
        // Show progress bar before redirecting
        showProgressBar(function () {
            window.location.href = 'https://faculty-members-ece.vercel.app/';
        });
    } else {
        // Open the modal
        navigateToAndOpenModal2('https://faculty-members-ece.vercel.app/');
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');

    // Function to set theme
    const setTheme = (theme) => {
        if (theme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            toggleButton.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            toggleButton.checked = false;
        }
    };

    // Load user's theme preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        // Detect and apply system theme preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkScheme) {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }
    }

    // Listen for changes in the theme toggle button
    toggleButton.addEventListener('change', () => {
        const newTheme = toggleButton.checked ? 'dark-mode' : 'light-mode';
        setTheme(newTheme);
        // Save user's preference to localStorage
        if (newTheme === 'dark-mode') {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // Listen for changes in system theme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Only change if user has not set a preference
            const newColorScheme = e.matches ? 'dark-mode' : 'light-mode';
            setTheme(newColorScheme);
        }
    });
});

