// main.js
import { initChart } from './pages/chart.js';
import { initializeLandingPage } from './pages/landing.js';
import { initializeArtistsPage } from './pages/artists.js';
import { initializeArtistsItemsPage } from './pages/artists-items.js';
import { initializeAuctionPage } from './pages/auction.js';
import { initializeVisitorPage } from './pages/visitor.js';
import { initializeVisitorListingPage } from './pages/visitor-listing.js';


document.addEventListener('DOMContentLoaded', function () {
    initializeLandingPage();
    initializeArtistsPage();
    initializeArtistsItemsPage();
    initializeAuctionPage();
    initializeVisitorPage();
    initializeVisitorListingPage();
    initChart();
    renderCards();
    
   
    
});

function initializePage() {
  const hash = window.location.hash;

  switch (hash) {
      case '#artists':
          initializeArtistsPage();
          break;
      case '#artists/items':
          initializeArtistsItemsPage();
          break;
      case '#auction':
          initializeAuctionPage();
          break;
      case '#visitor':
          initializeVisitorPage();
          break;
      case '#visitor/listing':
          initializeVisitorListingPage();
          break;
      default:
          initializeLandingPage();
          break;
  }
}


window.addEventListener('hashchange', initializePage);


document.addEventListener('DOMContentLoaded', initializePage);

const logoElement = document.querySelector('.logo');

  
  
const logoLink = document.getElementById('artist-link'); 
const landingSection = document.getElementById('landing');

