import { items } from '../data/data.js';


export function initializeArtistsItemsPage() {
  document.addEventListener('DOMContentLoaded', function () {
    const addNewItemLink = document.getElementById('add-new-item-link');
    const addNewItemSection = document.getElementById('add-new-item');
  
    if (addNewItemLink && addNewItemSection) {
      addNewItemLink.addEventListener('click', function (event) {
        event.preventDefault();
  
        if (addNewItemSection.style.display === 'none') {
          addNewItemSection.style.display = 'block';
        } else {
          addNewItemSection.style.display = 'none';
        }
      });
    }
  });
}
export function renderArtistItems(selectedArtist) {
  const artistItemsSection = document.getElementById('artists-items');
  artistItemsSection.innerHTML = '';

  const artistItems = items.filter(item => item.artist === selectedArtist);

  artistItems.forEach(item => {
      const artistItemElement = document.createElement('div');
      artistItemElement.className = 'artist-item';
      
     
      artistItemElement.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="item-image">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p>Price: $${item.price}</p>
          <!-- Add more item information as needed -->
      `;
      
      artistItemsSection.appendChild(artistItemElement);
  });
}

  







    



  

// import { items } from '../data/data.js';

// export function initializeArtistsItemsPage(selectedArtist) {
//   const logo = document.getElementById('logo');

//   // Event listener for the logo
//   logo.addEventListener('click', function() {
//     window.location.hash = ''; // Change the hash to an empty value
//     displayLandingPage();
//   });
  
//   // Function to display the landing page
//   function displayLandingPage() {
//     const artistsItemsSection = document.getElementById('artists-items');
//     if (artistsItemsSection) {
//       artistsItemsSection.style.display = 'block'; // Display the landing page section
//     }
//     // ... Add logic to hide other sections if needed ...
//   }
  
//   // Initial check for hash on page load
//   window.addEventListener('load', function() {
//     if (window.location.hash === '') {
//       displayLandingPage();
//     }
//   });
  

