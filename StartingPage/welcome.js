var animateButton = function(e) {
  e.preventDefault();
  
  // Reset animation
  e.target.classList.remove('animate');
  
  // Add animation class
  e.target.classList.add('animate');
  
  // Remove animation class after 700 milliseconds
  setTimeout(function(){
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', function() {
    window.location.href = "LogIn.html";
  });
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

  
