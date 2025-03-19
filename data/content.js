// Data Object containing content for the website
const contentData = {
    title: "Liquor Express - Premium Selection",
    sections: {
        home: {
            description: "Discover top-quality wines, whiskey, brandy, and cognac sourced from the world's best distilleries."
        },
        menu: {
            items: [
                { name: "Wine", img: "images/wine.jpg", description: "Exclusive Wine - From world-class vineyards." },
                { name: "Whiskey", img: "images/whiskey.jpg", description: "Vintage Whiskey - Aged for rich flavor." },
                { name: "Cognac", img: "images/cognac1.jpg", description: "Luxury Cognac - Smooth and refined." },
                { name: "Beer", img: "images/beer.jpg", description: "Refreshing Beer - Crisp and bold." },
                { name: "Brandy", img: "images/brandy.jpg", description: "Finest Brandy - A perfect indulgence." }
            ]
        },
        order: {
            description: "Shop effortlessly from our online store and get your order delivered quickly and securely."
        },
        about: {
            description: "At Liquor Express, we curate a fine selection of premium spirits from renowned brands."
        }
    }
};

// Function to populate content dynamically
document.addEventListener("DOMContentLoaded", () => {
    // Load Home Section Description
    document.getElementById("home-description").textContent = contentData.sections.home.description;

    // Load Menu Items
    const productList = document.getElementById("product-list");
    const productTemplate = document.getElementById("product-template");

    contentData.sections.menu.items.forEach(item => {
        const productClone = productTemplate.content.cloneNode(true);
        productClone.querySelector("img").src = item.img;
        productClone.querySelector("img").alt = item.name;
        productClone.querySelector(".highlight").textContent = item.description;
        productList.appendChild(productClone);
    });

    // Load Order Section Description
    document.getElementById("order-description").textContent = contentData.sections.order.description;

    // Load About Section Description
    document.getElementById("about-description").textContent = contentData.sections.about.description;
});
