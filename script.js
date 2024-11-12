// Define the resource data (in real-world apps, you might load this from a file or API)
const resources = [
    {
        primaryTopic: "General Community Tools",
        resourceName: "Tool 1",
        description: "A tool for community-driven threat intelligence sharing.",
        providerName: "Provider 1",
        wavestoneUseCases: "Used for collaboration and intelligence sharing.",
        secondaryTopic: "Network",
        tertiaryTopic: "Incident Response",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com",
        imageUrl: "images/tool1.jpg"
    },
    {
        primaryTopic: "Network",
        resourceName: "Tool 2",
        description: "A network monitoring and security analysis tool.",
        providerName: "Provider 2",
        wavestoneUseCases: "Used for real-time network traffic monitoring.",
        secondaryTopic: "Security",
        tertiaryTopic: "Detection Engineering",
        quaternaryTopic: "Vulnerability Management",
        link: "https://example2.com",
        imageUrl: "images/tool2.jpg"
    },
    {
        primaryTopic: "Security",
        resourceName: "Tool 3",
        description: "An advanced threat detection and response solution.",
        providerName: "Provider 3",
        wavestoneUseCases: "Used to detect advanced persistent threats (APTs).",
        secondaryTopic: "SIEM",
        tertiaryTopic: "SOC",
        quaternaryTopic: "Incident Response",
        link: "https://example3.com",
        imageUrl: "images/tool3.jpg"
    },
    // Add more resource objects here...
];

// Function to render the cards based on selected topic
function renderCards(topic) {
    const filteredResources = topic === "General Community Tools" ? resources : resources.filter(r => r.primaryTopic === topic);

    // Select the card container and remove all existing cards
    const cardsContainer = d3.select("#cards-row");
    cardsContainer.html("");

    // Bind data and create the cards
    const cardSelection = cardsContainer
        .selectAll(".card")
        .data(filteredResources)
        .enter()
        .append("div")
        .attr("class", "col-md-4 mb-4")
        .append("div")
        .attr("class", "card shadow-sm");

    cardSelection
        .append("img")
        .attr("class", "card-img-top")
        .attr("src", d => d.imageUrl)
        .attr("alt", "Resource Image");

    cardSelection
        .append("div")
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

// Set the default to "General Community Tools"
renderCards("General Community Tools");

// Event listener for navbar links
d3.selectAll('.nav-link').on('click', function(event) {
    const topic = event.target.getAttribute('data-topic');
    renderCards(topic);
});
