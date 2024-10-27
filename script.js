function hamburg(){
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel(){
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect
const texts = [
  "An Actor",
  "A Lawyer",
  "A Muscian",
  "A TV Personality"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter(){
  if (characterIndex < texts[textIndex].length){
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typewriter, speed);
  }
  else{
    setTimeout(eraseText, 1000)
  }
}

function eraseText(){
  if(textElements.innerHTML.length > 0){
    textElements.innerHTML = textElements.innerHTML.slice(0,-1);
    setTimeout(eraseText, 50)
  }
  else{
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typewriter, 500)
  }
}

window.onload = typewriter

// JavaScript to toggle the "View More" functionality
const viewMoreBtn = document.getElementById('view-more-btn');
const hiddenItems = document.querySelectorAll('.gallery-item.hidden');

// Only add event listener if 'viewMoreBtn' exists
if (viewMoreBtn){
viewMoreBtn.addEventListener('click', function () {
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden'); // Toggle the 'hidden' class
    });

    // Change button text based on the state
    if (viewMoreBtn.textContent === 'View More') {
        viewMoreBtn.textContent = 'View Less';
    } else {
        viewMoreBtn.textContent = 'View More';
    }
});
} else {
console.error('Element with id "view-more-btn" not found.');
}
// JavaScript to toggle the "View More" functionality
const viewMorePortfolioBtn = document.getElementById('view-more-portfolio-btn');
const hiddenItemsPortfolio = document.querySelectorAll('.portfolio-item.hidden'); // Assume hidden items have 'hidden' class

viewMorePortfolioBtn.addEventListener('click', function () {
hiddenItemsPortfolio.forEach(item => {
    item.classList.toggle('hidden'); // Toggle the 'hidden' class
});

// Change button text based on the state
if (viewMorePortfolioBtn.textContent === 'View More') {
    viewMorePortfolioBtn.textContent = 'View Less';
} else {
    viewMorePortfolioBtn.textContent = 'View More';
}
});

document.querySelector('.menu-icon').addEventListener('click', function () {
document.querySelector('nav').classList.toggle('active');
});


