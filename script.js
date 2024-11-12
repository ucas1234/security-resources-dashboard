// Function to fetch the resources from resources.json
async function fetchResources() {
    const response = await fetch('resources.json'); // Load resources.json
    const resources = await response.json(); // Parse the JSON data into an object
    return resources;
}

// Function to display the cards based on the selected topic
async function displayCards(topic) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Clear existing cards

    // Fetch the resources from the JSON file
    const resources = await fetchResources();

    // Filter resources based on the selected topic
    const filteredResources = resources.filter(resource => resource.primaryTopic === topic);

    // Create and display cards for the filtered resources
    filteredResources.forEach(resource => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Example: Use the resource name or another property to set the image
        const backgroundImage = resource.image || 'default-image.jpg'; // If no image in resource, use a default one

        // Add the inline style to set the background image dynamically
        card.style.backgroundImage = `url('${backgroundImage}')`;
        
        const cardContent = `
            <h3 class="card-title">${resource.resourceName}</h3>
            <p class="card-description">${resource.description}</p>
            <p><strong>Provider:</strong> ${resource.resourceProvider}</p>
            <p><strong>Use Case:</strong> ${resource.wavestoneUseCases}</p>
            <p><strong>Link:</strong> <a href="${resource.link}" target="_blank">${resource.link}</a></p>
            <p><strong>Secondary Topic:</strong> ${resource.secondaryTopic}</p>
            <p><strong>Tertiary Topic:</strong> ${resource.tertiaryTopic}</p>
            <p><strong>Quaternary Topic:</strong> ${resource.quaternaryTopic}</p>
        `;
        
        card.innerHTML = cardContent;
        cardsContainer.appendChild(card);
    });
}
