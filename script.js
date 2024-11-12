// Function to fetch the JSON data and render the cards
async function fetchResources() {
    try {
        const response = await fetch('resources.json');
        const resources = await response.json();
        renderCards("General Community Tools", resources); // Render cards for the default topic
    } catch (error) {
        console.error("Error loading resources:", error);
    }
}

// Function to render the cards based on the selected topic
function renderCards(topic, resources) {
    // Filter resources based on the selected topic
    const filteredResources = topic === "General Community Tools" ? resources : resources.filter(r => r.primaryTopic === topic);

    // Select the container where the cards will go and clear it
    const cardsContainer = d3.select("#cards-container");
    cardsContainer.html(""); // Clear the existing cards

    // Bind data to the cards and append the cards to the DOM
    const cards = cardsContainer
        .selectAll(".col-md-4")
        .data(filteredResources)
        .enter()
        .append("div")
        .attr("class", "col-md-4 mb-4")
        .append("div")
        .attr("class", "card shadow-lg");

    // Add image, title, description, and links to the cards
    cards.append("img")
        .attr("class", "card-img-top")
        .attr("src", d => d.imageUrl)
        .attr("alt", d => d.resourceName);

    cards.append("div")
        .attr("class", "card-body")
        .html(d => `
            <h5 class="card-title">${d.resourceName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Primary Topic: ${d.primaryTopic}</h6>
            <p class="card-text">${d.description}</p>
            <p><strong>Provider:</strong> ${d.providerName}</p>
            <p><strong>Wavestone Use Cases:</strong> ${d.wavestoneUseCases}</p>
            <p><strong>Secondary Topic:</strong> ${d.secondaryTopic}</p>
            <p><strong>Tertiary Topic:</strong> ${d.tertiaryTopic}</p>
            <p><strong>Quaternary Topic:</strong> ${d.quaternaryTopic}</p>
            <a href="${d.link}" target="_blank" class="btn btn-success">Go to Resource</a>
        `);
}

// Event listener for navbar links to filter cards dynamically
d3.selectAll('.nav-link').on('click', function(event) {
    const topic = event.target.getAttribute('data-topic');
    fetchResources().then(() => renderCards(topic)); // Fetch resources and then render for the selected topic
});

// Call the fetchResources function to initialize the page
fetchResources();
