const marketplace = document.getElementById("marketplace");
const toggleButton = document.getElementById("toggleMarketplace");
let isMarketplaceEnabled = false;

toggleButton.addEventListener("click", toggleMarketplace);

function toggleMarketplace() {
    isMarketplaceEnabled = !isMarketplaceEnabled;
    toggleButton.textContent = isMarketplaceEnabled ? "Turn Off Marketplace" : "Turn On Marketplace";
    renderMarketplace();
}

function renderMarketplace() {
    marketplace.innerHTML = "";
    if (isMarketplaceEnabled) {
        mockItems.forEach(item => {
            const itemElement = createItemElement(item);
            marketplace.appendChild(itemElement);
        });
    }
}

function createItemElement(item) {
    const itemElement = document.createElement("div");
    itemElement.className = "item";
    
    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.title;
    itemElement.appendChild(itemImage);
    
    const itemTitle = document.createElement("h2");
    itemTitle.textContent = item.title;
    itemElement.appendChild(itemTitle);
    
    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    itemElement.appendChild(itemDescription);
    
    const itemPrice = document.createElement("p");
    itemPrice.textContent = item.price;
    itemElement.appendChild(itemPrice);
    
    return itemElement;
}

const mockItems = [
    {
        id: "1",
        title: "Samsung s22",
        description: "Brand new smartphone for sale",
        price: "INR45000",
        image: "images/smartphone.jpg"
    
    },
  {
        id: "2",
        title: "iPhone 13",
        description: "Brand new smartphone for sale",
        price: "INR50000",
        image: "desktop/Apple iphone 13"
    },
 
    // ... add more items here ...
];
