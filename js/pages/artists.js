// artisits.js
import { items } from '../data/data.js';

export function initializeArtistsPage() {
    const artistDropdown = document.getElementById('artist-names-dropdown');
    const landingSection = document.getElementById('landing');
    const artistSection = document.getElementById('artists');
    const artistItemsSection = document.getElementById('artists-items'); 
    const auctionSection = document.getElementById('auction'); 
    const chosenArtistDiv = document.getElementById('choosen-artist');
    const itemsSoldDiv = document.getElementById('items-sold');
    const totalIncomeDiv = document.getElementById('total-income');
    const liveAuctionDiv = document.getElementById('live-auction');

    const homeMenuItem = document.getElementById('home');
    const itemsMenuItem = document.getElementById('items');
    const auctionsMenuItem = document.getElementById('auctions');

    artistDropdown.addEventListener('change', function () {
        const selectedArtist = artistDropdown.value;
        const artistItems = items.filter(item => item.artist === selectedArtist);

        window.location.hash = 'artists';
        landingSection.style.display = 'none';
        artistSection.style.display = 'block';

        chosenArtistDiv.textContent = `${selectedArtist}`;

        const totalItemsSold = artistItems.filter(item => item.dateSold).length;
        const totalItems = artistItems.length;

        itemsSoldDiv.textContent = `${totalItemsSold}/${totalItems}`;

        const totalIncome = artistItems.filter(item => item.dateSold).reduce((total, item) => total + item.priceSold, 0);
        totalIncomeDiv.textContent = ` $${totalIncome}`;

        const liveAuctionItem = artistItems.find(item => item.isAuctioning);

        if (liveAuctionItem) {
            liveAuctionDiv.innerHTML = `
                <img src="${liveAuctionItem.image}" alt="${liveAuctionItem.title}" class="live-auction-image" />
                <p>${liveAuctionItem.title}</p>
                <p>Current Bid: $${liveAuctionItem.priceSold}</p>
            `;
        } else {
            liveAuctionDiv.innerHTML = '<p>No live auction items at the moment.</p>';
        }
    });

    
    homeMenuItem.addEventListener('click', function () {
        window.location.href = 'index.html#artists';
    });

    itemsMenuItem.addEventListener('click', function () {
        window.location.href = 'index.html#artists/items';
    });

    auctionsMenuItem.addEventListener('click', function () {
        window.location.href = 'index.html#auction';
    });

   
window.addEventListener('hashchange', function () {
    const hash = window.location.hash;
    if (hash === '#artists') {
        artistItemsSection.style.display = 'none';
        auctionSection.style.display = 'none';
        artistSection.style.display = 'block';
    } else if (hash === '#artists/items') {
        artistItemsSection.style.display = 'block';
        auctionSection.style.display = 'none';
        artistSection.style.display = 'none';
    } else if (hash === '#auction') {
        artistItemsSection.style.display = 'none';
        auctionSection.style.display = 'block';
        artistSection.style.display = 'none';
    } else {
        artistItemsSection.style.display = 'none';
        auctionSection.style.display = 'none';
        artistSection.style.display = 'none';
    }
});


const initialHash = window.location.hash;
if (initialHash === '#artists') {
    artistItemsSection.style.display = 'none';
    auctionSection.style.display = 'none';
    artistSection.style.display = 'block';
} else if (initialHash === '#artists/items') {
    artistItemsSection.style.display = 'block';
    auctionSection.style.display = 'none';
    artistSection.style.display = 'none';
} else if (initialHash === '#auction') {
    artistItemsSection.style.display = 'none';
    auctionSection.style.display = 'block';
    artistSection.style.display = 'none';
} else {
    artistItemsSection.style.display = 'none';
    auctionSection.style.display = 'none';
    artistSection.style.display = 'none';
}

const chartLast7DaysButton = document.getElementById('chart-last-7-days');
const chartLast14DaysButton = document.getElementById('chart-last-14-days');
const chartLast30DaysButton = document.getElementById('chart-last-30-days');
const soldItemsChartCanvas = document.getElementById('sold-items-chart');
const days = 7;

function calculateItemsSold(startDate) {
    const labels = [];
    const data = [];

    for (let i = 0; i < days; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + i);

        const itemsSold = items.filter(item => {
            const itemDate = new Date(item.soldDate);
            return itemDate.toDateString() === currentDate.toDateString();
        }).length;

        labels.push(currentDate.toDateString());
        data.push(itemsSold);
    }

    return { labels, data };
}


function generateChart(days) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const itemsSoldData = calculateItemsSold(startDate);

    
    new Chart(soldItemsChartCanvas, {
        type: 'line',
        data: {
            labels: itemsSoldData.labels,
            datasets: [{
                label: 'Items Sold',
                data: itemsSoldData.data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


chartLast7DaysButton.addEventListener('click', () => generateChart(7));
chartLast14DaysButton.addEventListener('click', () => generateChart(14));
chartLast30DaysButton.addEventListener('click', () => generateChart(30));
const element = document.getElementById('myElement');

element.addEventListener('pointerdown', (event) => {
  
  element.setPointerCapture(event.pointerId);
  
  
  element.addEventListener('pointermove', handlePointerMove);
  element.addEventListener('pointerup', handlePointerUp);
});

function handlePointerMove(event) {
  
}

function handlePointerUp(event) {
  
  element.releasePointerCapture(event.pointerId);
  
  
  element.removeEventListener('pointermove', handlePointerMove);
  element.removeEventListener('pointerup', handlePointerUp);
}
}


