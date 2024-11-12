// Fetch the resources data from the JSON file
async function fetchResources() {
    const response = await fetch('resources.json');
    const data = await response.json();
    return data;
}

// Function to display the cards based on the selected topic
function displayCards(topic) {
    fetchResources().then(resources => {
        const container = document.getElementById('resource-container');
        container.innerHTML = ''; // Clear previous cards
        
        // Filter the resources based on the selected topic
        const filteredResources = resources.filter(resource => resource.primaryTopic === topic);
        
        // Create cards for the filtered resources
        filteredResources.forEach(resource => {
            const card = createCard(resource);
            container.appendChild(card);
        });
    });
}

// Function to create a card for a resource
function createCard(resource) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card-header">
            <h3>${resource.resourceName}</h3>
        </div>
        <div class="card-body">
            <p><strong>Primary Topic:</strong> ${resource.primaryTopic}</p>
            <p><strong>Description:</strong> ${resource.description}</p>
            <p><strong>Provider:</strong> ${resource.resourceProvider}</p>
            <p><strong>Secondary Topic:</strong> ${resource.secondaryTopic}</p>
            <p><strong>Tertiary Topic:</strong> ${resource.tertiaryTopic}</p>
            <p><strong>Quaternary Topic:</strong> ${resource.quaternaryTopic}</p>
        </div>
        <div class="card-footer">
            <a href="${resource.link}" target="_blank">Go to Resource</a>
        </div>
    `;
    
    return card;
}

// Set up the navigation links to filter by topic
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const topic = event.target.getAttribute('data-topic');
        displayCards(topic);
    });
});

// Load initial cards for "General Community Tools"
window.onload = () => {
    displayCards("General Community Tools");
};
