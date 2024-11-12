// Define the resource data for all topics
const resources = [
    // General Community Tools
    {
        primaryTopic: "General Community Tools",
        resourceName: "Community Tool 1",
        description: "A collaborative tool for sharing threat intelligence.",
        providerName: "ToolProvider 1",
        wavestoneUseCases: "Used for sharing and receiving community intelligence.",
        secondaryTopic: "Network",
        tertiaryTopic: "Incident Response",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com/tool1",
        imageUrl: "https://via.placeholder.com/300x200?text=Tool1"
    },
    {
        primaryTopic: "General Community Tools",
        resourceName: "Community Tool 2",
        description: "A platform for collaborative vulnerability management.",
        providerName: "ToolProvider 2",
        wavestoneUseCases: "Used for tracking and reporting vulnerabilities in real-time.",
        secondaryTopic: "Vulnerability Management",
        tertiaryTopic: "Incident Response",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com/tool2",
        imageUrl: "https://via.placeholder.com/300x200?text=Tool2"
    },

    // Network Security
    {
        primaryTopic: "Network Security",
        resourceName: "Network Security Tool 1",
        description: "A comprehensive tool for network traffic analysis and security.",
        providerName: "NetToolProvider 1",
        wavestoneUseCases: "Used for real-time monitoring of network activity.",
        secondaryTopic: "Detection Engineering",
        tertiaryTopic: "SOC",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/nettool1",
        imageUrl: "https://via.placeholder.com/300x200?text=NetTool1"
    },
    {
        primaryTopic: "Network Security",
        resourceName: "Network Security Tool 2",
        description: "A tool for securing network connections using encryption.",
        providerName: "NetToolProvider 2",
        wavestoneUseCases: "Used for encrypting traffic between devices on a network.",
        secondaryTopic: "Security",
        tertiaryTopic: "Incident Response",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com/nettool2",
        imageUrl: "https://via.placeholder.com/300x200?text=NetTool2"
    },

    // Detection Engineering
    {
        primaryTopic: "Detection Engineering",
        resourceName: "Detection Tool 1",
        description: "A tool for detecting advanced persistent threats (APTs) in real-time.",
        providerName: "DetectionProvider 1",
        wavestoneUseCases: "Used for detecting unusual patterns indicative of APTs.",
        secondaryTopic: "SIEM",
        tertiaryTopic: "Incident Response",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com/detectiontool1",
        imageUrl: "https://via.placeholder.com/300x200?text=DetectionTool1"
    },
    {
        primaryTopic: "Detection Engineering",
        resourceName: "Detection Tool 2",
        description: "An AI-powered detection tool for identifying zero-day vulnerabilities.",
        providerName: "DetectionProvider 2",
        wavestoneUseCases: "Used for detecting and blocking zero-day threats.",
        secondaryTopic: "AI in SecOps",
        tertiaryTopic: "Vulnerability Management",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/detectiontool2",
        imageUrl: "https://via.placeholder.com/300x200?text=DetectionTool2"
    },

    // EDR & XDR & NDR
    {
        primaryTopic: "EDR & XDR & NDR",
        resourceName: "EDR Solution 1",
        description: "An endpoint detection and response solution for detecting malware.",
        providerName: "EDRProvider 1",
        wavestoneUseCases: "Used for protecting endpoints and detecting malware.",
        secondaryTopic: "Security",
        tertiaryTopic: "Detection Engineering",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/edrsolution1",
        imageUrl: "https://via.placeholder.com/300x200?text=EDR1"
    },
    {
        primaryTopic: "EDR & XDR & NDR",
        resourceName: "XDR Solution 2",
        description: "An extended detection and response solution for enterprise networks.",
        providerName: "XDRProvider 2",
        wavestoneUseCases: "Used for integrating data from various security tools for holistic detection.",
        secondaryTopic: "SOC",
        tertiaryTopic: "Network Security",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/xdrsolution2",
        imageUrl: "https://via.placeholder.com/300x200?text=XDR2"
    },

    // SIEM
    {
        primaryTopic: "SIEM",
        resourceName: "SIEM Tool 1",
        description: "A security information and event management system for centralized log collection.",
        providerName: "SIEMProvider 1",
        wavestoneUseCases: "Used for aggregating and analyzing security logs.",
        secondaryTopic: "SOC",
        tertiaryTopic: "Incident Response",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com/siemtool1",
        imageUrl: "https://via.placeholder.com/300x200?text=SIEMTool1"
    },
    {
        primaryTopic: "SIEM",
        resourceName: "SIEM Tool 2",
        description: "An advanced SIEM solution with machine learning for threat detection.",
        providerName: "SIEMProvider 2",
        wavestoneUseCases: "Used for predictive threat analysis using machine learning.",
        secondaryTopic: "Detection Engineering",
        tertiaryTopic: "Vulnerability Management",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/siemtool2",
        imageUrl: "https://via.placeholder.com/300x200?text=SIEMTool2"
    },

    // SOC
    {
        primaryTopic: "SOC",
        resourceName: "SOC Platform 1",
        description: "A platform for managing security operations and incident response.",
        providerName: "SOCProvider 1",
        wavestoneUseCases: "Used for monitoring security events and managing incidents in real-time.",
        secondaryTopic: "Detection Engineering",
        tertiaryTopic: "Network Security",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/socplatform1",
        imageUrl: "https://via.placeholder.com/300x200?text=SOCPlatform1"
    },
    {
        primaryTopic: "SOC",
        resourceName: "SOC Platform 2",
        description: "A cloud-based SOC solution for distributed security monitoring.",
        providerName: "SOCProvider 2",
        wavestoneUseCases: "Used for scaling security operations across multiple locations.",
        secondaryTopic: "Security",
        tertiaryTopic: "Threat Intelligence",
        quaternaryTopic: "Vulnerability Management",
        link: "https://example.com/socplatform2",
        imageUrl: "https://via.placeholder.com/300x200?text=SOCPlatform2"
    },

    // Incident Response
    {
        primaryTopic: "Incident Response",
        resourceName: "Incident Management Tool 1",
        description: "A tool for managing security incidents and coordinating responses.",
        providerName: "IncidentProvider 1",
        wavestoneUseCases: "Used for documenting and resolving security incidents.",
        secondaryTopic: "SOC",
        tertiaryTopic: "Detection Engineering",
        quaternaryTopic: "Network Security",
        link: "https://example.com/incidenttool1",
        imageUrl: "https://via.placeholder.com/300x200?text=IncidentTool1"
    },
    {
        primaryTopic: "Incident Response",
        resourceName: "Incident Management Tool 2",
        description: "A platform for automating and streamlining incident response workflows.",
        providerName: "IncidentProvider 2",
        wavestoneUseCases: "Used for automating incident response tasks to improve efficiency.",
        secondaryTopic: "Vulnerability Management",
        tertiaryTopic: "Security",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com/incidenttool2",
        imageUrl: "https://via.placeholder.com/300x200?text=IncidentTool2"
    },

    // Threat Intelligence
    {
        primaryTopic: "Threat Intelligence",
        resourceName: "Threat Intelligence Platform 1",
        description: "A platform for collecting and analyzing threat intelligence.",
        providerName: "ThreatIntelProvider 1",
        wavestoneUseCases: "Used for collecting and sharing threat intelligence from various sources.",
        secondaryTopic: "AI in SecOps",
        tertiaryTopic: "Vulnerability Management",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/threatintel1",
        imageUrl: "https://via.placeholder.com/300x200?text=ThreatIntel1"
    },
    {
        primaryTopic: "Threat Intelligence",
        resourceName: "Threat Intelligence Platform 2",
        description: "An AI-powered threat intelligence platform that identifies emerging threats.",
        providerName: "ThreatIntelProvider 2",
        wavestoneUseCases: "Used for predicting and responding to new and emerging threats.",
        secondaryTopic: "Detection Engineering",
        tertiaryTopic: "Security",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/threatintel2",
        imageUrl: "https://via.placeholder.com/300x200?text=ThreatIntel2"
    },

    // AI in SecOps
    {
        primaryTopic: "AI in SecOps",
        resourceName: "AI Security Tool 1",
        description: "An AI-powered tool for automating threat detection and response.",
        providerName: "AISecOpsProvider 1",
        wavestoneUseCases: "Used for using AI models to predict and respond to cyber threats.",
        secondaryTopic: "EDR & XDR & NDR",
        tertiaryTopic: "SOC",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/aisecops1",
        imageUrl: "https://via.placeholder.com/300x200?text=AISecOps1"
    },
    {
        primaryTopic: "AI in SecOps",
        resourceName: "AI Security Tool 2",
        description: "A machine learning model for detecting malicious activities.",
        providerName: "AISecOpsProvider 2",
        wavestoneUseCases: "Used for detecting threats using machine learning models.",
        secondaryTopic: "Network Security",
        tertiaryTopic: "Vulnerability Management",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/aisecops2",
        imageUrl: "https://via.placeholder.com/300x200?text=AISecOps2"
    },

    // Vulnerability Management
    {
        primaryTopic: "Vulnerability Management",
        resourceName: "Vulnerability Management Tool 1",
        description: "A tool for managing and mitigating vulnerabilities in your infrastructure.",
        providerName: "VulnManagementProvider 1",
        wavestoneUseCases: "Used for tracking vulnerabilities and patching them.",
        secondaryTopic: "Security",
        tertiaryTopic: "Incident Response",
        quaternaryTopic: "Threat Intelligence",
        link: "https://example.com/vulnmanagement1",
        imageUrl: "https://via.placeholder.com/300x200?text=VulnManagement1"
    },
    {
        primaryTopic: "Vulnerability Management",
        resourceName: "Vulnerability Management Tool 2",
        description: "A comprehensive vulnerability management platform.",
        providerName: "VulnManagementProvider 2",
        wavestoneUseCases: "Used for continuous vulnerability scanning and reporting.",
        secondaryTopic: "SIEM",
        tertiaryTopic: "SOC",
        quaternaryTopic: "Incident Response",
        link: "https://example.com/vulnmanagement2",
        imageUrl: "https://via.placeholder.com/300x200?text=VulnManagement2"
    }
];

// Function to render the cards based on the selected topic
function renderCards(topic) {
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

// Initially render cards for the "General Community Tools" topic
renderCards("General Community Tools");

// Event listener for navbar links to filter cards dynamically
d3.selectAll('.nav-link').on('click', function(event) {
    const topic = event.target.getAttribute('data-topic');
    renderCards(topic); // Call renderCards with the selected topic
});
