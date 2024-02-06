// landing.js
export const ITEMS_SESSION_KEY = 'items';


async function populateArtistDropdown() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const artists = await response.json();

  const artistDropdown = document.getElementById('artist-names-dropdown');

 
  artists.forEach(artist => {
      const option = document.createElement('option');
      option.value = artist.name;
      option.textContent = artist.name;
      artistDropdown.appendChild(option);
  });
}


document.addEventListener('DOMContentLoaded', function () {
  populateArtistDropdown();
});


export function initializeLandingPage() {
  const joinVisitorDiv = document.getElementById("joinVisitor");
  const landingSection = document.getElementById("landing");
  const visitorSection = document.getElementById("visitor");

  joinVisitorDiv.addEventListener("click", function () {
    
    window.location.hash = "visitor";

    
    landingSection.style.display = "none";

   
    visitorSection.style.display = "block";
  });
 

document.addEventListener('DOMContentLoaded', function () {
  // ...

  
  const artistDropdown = document.getElementById('artist-names-dropdown');

  
  artistDropdown.addEventListener('change', function () {
    
    const selectedArtist = artistDropdown.value;

    
    window.location.hash = 'artists';

    
    landingSection.style.display = 'none';

   
    artistSection.style.display = 'block';

   
    const chosenArtistDiv = document.getElementById('choosen-artist');
    chosenArtistDiv.textContent = `Chosen Artist: ${selectedArtist}`;
  });

  
});

}
