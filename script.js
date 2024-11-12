// Define the resources directly in the script
const resources = [
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "OWASP Resources",
        "description": "Collection of tools for web security testing and community resources.",
        "resourceProvider": "OWASP",
        "link": "https://owasp.org",
        "wavestoneUseCases": "Web Application Security",
        "secondaryTopic": "Web Security",
        "tertiaryTopic": "Vulnerability Management",
        "quaternaryTopic": "Open Source"
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "Kali Linux",
        "description": "A Linux distribution for penetration testing and security auditing.",
        "resourceProvider": "Offensive Security",
        "link": "https://www.kali.org",
        "wavestoneUseCases": "Penetration Testing",
        "secondaryTopic": "Pentesting",
        "tertiaryTopic": "Linux",
        "quaternaryTopic": "OS"
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "Cybersecurity: Databases & Recommended Resources",
        "description": "A collection of resources relating to Cyber Security.",
        "resourceProvider": "Fordham University Libraries",
        "link": "https://fordham.libguides.com/Cybersecurity/Databases",
        "wavestoneUseCases": "",
        "secondaryTopic": "",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "CYBER DATABASE",
        "description": "CyberDB maintains up-to-date analysis and research of cyber solutions from all over the world.",
        "resourceProvider": "Cyber DB",
        "link": "https://www.cyberdb.co/database/",
        "wavestoneUseCases": "",
        "secondaryTopic": "",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "LinkedIn Text Formatter",
        "description": "Format your LinkedIn post with bold, italic and more for free.",
        "resourceProvider": "Typegrow",
        "link": "https://typegrow.com/tools/linkedin-text-formatter",
        "wavestoneUseCases": "",
        "secondaryTopic": "Marketing",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "arXiv",
        "description": "arXiv is a free distribution service and an open-access archive for nearly 2.4 million scholarly articles in the fields of physics, mathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering and systems science, and economics. Materials on this site are not peer-reviewed by arXiv.",
        "resourceProvider": "Cornell University",
        "link": "https://arxiv.org/",
        "wavestoneUseCases": "",
        "secondaryTopic": "",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "Organising Security for Digital Transformation",
        "description": "Explore more than 916 billion web pages saved over time.",
        "resourceProvider": "Google Cloud",
        "link": "https://web.archive.org/",
        "wavestoneUseCases": "",
        "secondaryTopic": "",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "Altitude Cyber Market Reviews",
        "description": "Regular cybersecurity market reviews that highlight trends in mergers and acquisitions, private equity, public markets, company valuations, industry news, upcoming conferences, sector trends, and much more.",
        "resourceProvider": "Altitude Cyber",
        "link": "https://www.altitudecyber.com/resources/altitude-cyber-market-reviews?utm_source=substack&utm_medium=email",
        "wavestoneUseCases": "",
        "secondaryTopic": "",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "WayBack Machine",
        "description": "Explore more than 916 billion web pages saved over time.",
        "resourceProvider": "Internet Archive",
        "link": "https://web.archive.org/",
        "wavestoneUseCases": "",
        "secondaryTopic": "",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "OWASP CHEAT SHEET",
        "description": "The OWASP Cheat Sheet Series was created to provide a concise collection of high value information on specific application security topics. These cheat sheets were created by various application security professionals who have expertise in specific topics.",
        "resourceProvider": "OWASP",
        "link": "https://cheatsheetseries.owasp.org/index.html",
        "wavestoneUseCases": "",
        "secondaryTopic": "Network Security",
        "tertiaryTopic": "",
        "quaternaryTopic": ""
    },
    {
        "primaryTopic": "General Community Tools",
        "resourceName": "SANS Institute",
        "description": "Offers information security training and certification. Provides resources on network security, including courses, papers, and tools.",
        "resourceProvider": "SANS Institute",
        "link": "https://www.sans.org/uk_en/",
        "wavestoneUseCases": "",
        "secondaryTopic": "Network Security",
        "tertiaryTopic": "Threat Intelligence",
        "quaternaryTopic": "Vulnerability Management"
    },
    {
        "primaryTopic": "Network Security",
        "resourceName": "Wireshark",
        "description": "Network protocol analyzer used for troubleshooting and analysis.",
        "resourceProvider": "Wireshark Foundation",
        "link": "https://www.wireshark.org",
        "wavestoneUseCases": "Network Traffic Analysis",
        "secondaryTopic": "Network Analysis",
        "tertiaryTopic": "Packet Capture",
        "quaternaryTopic": "Open Source"
    },
    {
        "primaryTopic": "Network Security",
        "resourceName": "Nmap",
        "description": "Network scanner used for security auditing and network discovery.",
        "resourceProvider": "Nmap Project",
        "link": "https://nmap.org",
        "wavestoneUseCases": "Network Scanning",
        "secondaryTopic": "Network Discovery",
        "tertiaryTopic": "Scanning",
        "quaternaryTopic": "Open Source"
    },
    {
        "primaryTopic": "Detection Engineering",
        "resourceName": "Suricata",
        "description": "High-performance Network IDS, IPS, and Network Security Monitoring (NSM) engine.",
        "resourceProvider": "Open Information Security Foundation",
        "link": "https://suricata-ids.org",
        "wavestoneUseCases": "Network Security Monitoring",
        "secondaryTopic": "IDS",
        "tertiaryTopic": "IPS",
        "quaternaryTopic": "NSM"
    },
    {
        "primaryTopic": "Detection Engineering",
        "resourceName": "Elastic Stack",
        "description": "Search and analysis engine used for log management and security monitoring.",
        "resourceProvider": "Elastic",
        "link": "https://www.elastic.co",
        "wavestoneUseCases": "Log Management",
        "secondaryTopic": "Log Analysis",
        "tertiaryTopic": "Security Monitoring",
        "quaternaryTopic": "SIEM"
    },
    {
        "primaryTopic": "EDR&XDR&NDR",
        "resourceName": "CrowdStrike Falcon",
        "description": "Cloud-native endpoint protection platform with EDR, XDR, and NDR features.",
        "resourceProvider": "CrowdStrike",
        "link": "https://www.crowdstrike.com",
        "wavestoneUseCases": "Endpoint Protection",
        "secondaryTopic": "EDR",
        "tertiaryTopic": "XDR",
        "quaternaryTopic": "Cloud"
    },
    {
        "primaryTopic": "EDR&XDR&NDR",
        "resourceName": "SentinelOne",
        "description": "Autonomous endpoint protection with EDR and XDR capabilities.",
        "resourceProvider": "SentinelOne",
        "link": "https://www.sentinelone.com",
        "wavestoneUseCases": "Endpoint Detection",
        "secondaryTopic": "XDR",
        "tertiaryTopic": "AI",
        "quaternaryTopic": "Autonomous Security"
    },
    {
        "primaryTopic": "SIEM",
        "resourceName": "Splunk",
        "description": "Data analytics platform used for SIEM and log analysis.",
        "resourceProvider": "Splunk",
        "link": "https://www.splunk.com",
        "wavestoneUseCases": "Log Management",
        "secondaryTopic": "Security Information",
        "tertiaryTopic": "Event Management",
        "quaternaryTopic": "Data Analytics"
    },
    {
        "primaryTopic": "SIEM",
        "resourceName": "IBM QRadar",
        "description": "SIEM platform that provides security intelligence and analytics.",
        "resourceProvider": "IBM",
        "link": "https://www.ibm.com/security/qradar",
        "wavestoneUseCases": "Security Analytics",
        "secondaryTopic": "Security Intelligence",
        "tertiaryTopic": "Log Correlation",
        "quaternaryTopic": "Threat Detection"
    },
    {
        "primaryTopic": "SOC",
        "resourceName": "Darktrace",
        "description": "AI-driven cybersecurity platform for proactive threat detection.",
        "resourceProvider": "Darktrace",
        "link": "https://www.darktrace.com",
        "wavestoneUseCases": "Threat Detection",
        "secondaryTopic": "SOC",
        "tertiaryTopic": "AI",
        "quaternaryTopic": "Autonomous Defense"
    },
    {
        "primaryTopic": "SOC",
        "resourceName": "Sumo Logic",
        "description": "Cloud-native SIEM for real-time security monitoring and data analytics.",
        "resourceProvider": "Sumo Logic",
        "link": "https://www.sumologic.com",
        "wavestoneUseCases": "Real-time Monitoring",
        "secondaryTopic": "Cloud Security",
        "tertiaryTopic": "SIEM",
        "quaternaryTopic": "Security Analytics"
    },
    {
        "primaryTopic": "Incident Response",
        "resourceName": "TheHive Project",
        "description": "An open-source incident response platform for security teams.",
        "resourceProvider": "TheHive Project",
        "link": "https://thehive-project.org",
        "wavestoneUseCases": "Incident Management",
        "secondaryTopic": "IR",
        "tertiaryTopic": "Forensics",
        "quaternaryTopic": "Open Source"
    },
    {
        "primaryTopic": "Incident Response",
        "resourceName": "Cortex XSOAR",
        "description": "Security orchestration, automation, and response platform.",
        "resourceProvider": "Palo Alto Networks",
        "link": "https://www.paloaltonetworks.com/cortex/cortex-xsoar",
        "wavestoneUseCases": "Security Automation",
        "secondaryTopic": "SOAR",
        "tertiaryTopic": "Incident Response",
        "quaternaryTopic": "Automation"
    },
    {
        "primaryTopic": "Threat Intelligence",
        "resourceName": "ThreatConnect",
        "description": "Threat intelligence platform for aggregation, analysis, and sharing.",
        "resourceProvider": "ThreatConnect",
        "link": "https://www.threatconnect.com",
        "wavestoneUseCases": "Threat Intelligence Sharing",
        "secondaryTopic": "Cyber Threat Intelligence",
        "tertiaryTopic": "Threat Data",
        "quaternaryTopic": "Collaboration"
    },
    {
        "primaryTopic": "Threat Intelligence",
        "resourceName": "MISP",
        "description": "Open-source threat intelligence platform for sharing and correlation.",
        "resourceProvider": "MISP Project",
        "link": "https://www.misp-project.org",
        "wavestoneUseCases": "Threat Sharing",
        "secondaryTopic": "Threat Intelligence",
        "tertiaryTopic": "Open Source",
        "quaternaryTopic": "Collaboration"
    },
    {
        "primaryTopic": "AI in SecOps",
        "resourceName": "IBM Watson for Cyber Security",
        "description": "AI-powered cybersecurity platform to detect and mitigate threats.",
        "resourceProvider": "IBM",
        "link": "https://www.ibm.com/watson-security",
        "wavestoneUseCases": "AI-Powered Security",
        "secondaryTopic": "AI in Cyber Security",
        "tertiaryTopic": "Threat Detection",
        "quaternaryTopic": "Cognitive Computing"
    },
    {
        "primaryTopic": "AI in SecOps",
        "resourceName": "Darktrace AI",
        "description": "AI-driven platform that autonomously detects and responds to cyber threats.",
        "resourceProvider": "Darktrace",
        "link": "https://www.darktrace.com",
        "wavestoneUseCases": "Autonomous Defense",
        "secondaryTopic": "AI",
        "tertiaryTopic": "Machine Learning",
        "quaternaryTopic": "Cyber Security"
    },
    {
        "primaryTopic": "Vulnerability Management",
        "resourceName": "Qualys",
        "description": "Cloud-based platform for continuous vulnerability management.",
        "resourceProvider": "Qualys",
        "link": "https://www.qualys.com",
        "wavestoneUseCases": "Vulnerability Scanning",
        "secondaryTopic": "Vulnerability Management",
        "tertiaryTopic": "Cloud Security",
        "quaternaryTopic": "Automated Scanning"
    },
    {
        "primaryTopic": "Vulnerability Management",
        "resourceName": "Tenable.io",
        "description": "Platform for comprehensive vulnerability management and risk reduction.",
        "resourceProvider": "Tenable",
        "link": "https://www.tenable.com",
        "wavestoneUseCases": "Vulnerability Assessment",
        "secondaryTopic": "Vulnerability Management",
        "tertiaryTopic": "Risk Management",
        "quaternaryTopic": "Continuous Scanning"
    },
    {
        "primaryTopic": "Vulnerability Management",
        "resourceName": "PLACEHOLDER",
        "description": "Platform for comprehensive vulnerability management and risk reduction.",
        "resourceProvider": "Tenable",
        "link": "https://www.tenable.com",
        "wavestoneUseCases": "Vulnerability Assessment",
        "secondaryTopic": "Vulnerability Management",
        "tertiaryTopic": "Risk Management",
        "quaternaryTopic": "Continuous Scanning"
    },
];

// Function to display the cards based on the selected topic
function displayCards(topic) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Clear existing cards

    const filteredResources = resources.filter(resource => resource.primaryTopic === topic);

    filteredResources.forEach(resource => {
        const card = document.createElement('div');
        card.classList.add('card');

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

// Handle navbar item click
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const topic = e.target.textContent;
        displayCards(topic);
    });
});

// Toggle the Navbar for Mobile Devices
document.getElementById('navbar-toggle').addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
});

// Display cards for the default topic when the page loads
window.onload = function() {
    displayCards("General Community Tools");
};
