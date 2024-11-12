document.addEventListener('DOMContentLoaded', function () {
    // Resource data structure
    const resources = [
        {
            primaryTopic: "General Community Tools",
            resourceName: "Resource 1",
            description: "Description of the first resource. It helps in general security tasks.",
            providerName: "Community Provider 1",
            wavestoneUseCases: "Use case for Incident Response and Security Research",
            secondaryTopic: "Network",
            tertiaryTopic: "Incident Response",
            quaternaryTopic: "Threat Intelligence",
            link: "https://www.example.com",
            imageUrl: "images/resource-image.jpg"
        },
        {
            primaryTopic: "Network",
            resourceName: "Resource 2",
            description: "A network security tool for monitoring and detection.",
            providerName: "Provider 2",
            wavestoneUseCases: "Use case for monitoring network activity and identifying anomalies",
            secondaryTopic: "Detection Engineering",
            tertiaryTopic: "Threat Intelligence",
            quaternaryTopic: "Vulnerability Management",
            link: "https://www.example2.com",
            imageUrl: "images/resource-image.jpg"
        },
        // Add more resource objects here...
    ];

    const container = document.querySelector('.row');

    // Function to create a card for each resource
    resources.forEach(resource => {
        const cardHTML = `
            <div class="col-md-4">
                <div class="card shadow-sm mb-4">
                    <img src="${resource.imageUrl}" class="card-img-top" alt="Resource Image">
                    <div class="card-body">
                        <h5 class="card-title">${resource.resourceName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Primary Topic: ${resource.primaryTopic}</h6>
                        <p class="card-text">${resource.description}</p>
                        <p><strong>Provider:</strong> ${resource.providerName}</p>
                        <p><strong>Wavestone Use Cases:</strong> ${resource.wavestoneUseCases}</p>
                        <p><strong>Secondary Topic:</strong> ${resource.secondaryTopic}</p>
                        <p><strong>Tertiary Topic:</strong> ${resource.tertiaryTopic}</p>
                        <p><strong>Quaternary Topic:</strong> ${resource.quaternaryTopic}</p>
                        <a href="${resource.link}" target="_blank" class="btn btn-success">Go to Resource</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});
