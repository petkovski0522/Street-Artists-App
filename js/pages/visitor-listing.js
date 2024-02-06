import { items } from '../data/data.js';
        
        export function initializeVisitorListingPage() {
            const cardsContainer = document.querySelector('.cards');
            
            if (!cardsContainer) {
                console.error("Element with class 'cards' not found.");
                return;
            }
        
            items.forEach(item => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
                    <div class="card-wrapper">
                        <div class="card">
                            <div class="card-light">
                                <img src="${item.image}" alt="${item.title}" class="card-image" />
                                <div class="card-text"></div>
                                <div class="name-price">
                                    <h4 class="card-price">${item.artist}</h4>
                                    <span class="price">$${item.price}</span>
                                </div>
                                <h5 class="item-title">${item.title}</h5>
                                <p class="desc">${item.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                cardsContainer.appendChild(cardElement);
            });
        }
        
        
        document.addEventListener("DOMContentLoaded", initializeVisitorListingPage);