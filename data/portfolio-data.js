const portfolioData = {
    profile: {
        name: "Sandeep Aryan",
        title: "Software Engineer",
        email: "sandeeparyan196@gmail.com",
        phone: "+91 7054497360",
        location: "Pune, India",
        github: "github.com/San3222",
        summary: "Software developer experience in Python, JavaScript, React, SQL and Node.JS. Proficient in database design and RESTful API development. Seeking opportunities to apply and expand my skills while working on impactful software projects."
    },

    experiences: [
        {
            title: "Software Engineer",
            company: "Xcriptech Pvt. Ltd.",
            period: "05/2022 – 08/2023",
            location: "Noida, India",
            description: "Xcriptech is a startup and service-based technology and Management Consulting Group with rapid pace development and innovative solutions for demanding projects.",
            responsibilities: [
                "Designed and implemented server-side logic, APIs, and services including RESTful APIs",
                "Worked with JavaScript and Node.js technologies to develop automated solutions with web interfaces",
                "Developed and maintained internal web applications",
                "Worked with MongoDB, MySQL databases - designing schemas, writing queries, managing migrations",
                "Implemented user authentication, authorization and security measures",
                "Deployed Node.js applications to production environments with server configuration"
            ],
            tools: ["JavaScript", "Node.js", "Express.js", "Python", "Django", "MongoDB", "MySQL", "AWS", "Git/GitHub", "React.js", "Bootstrap"]
        },
        {
            title: "Associate Customer Executive",
            company: "ChannelPlay",
            period: "10/2019 – 03/2020",
            location: "Gurugram, India",
            description: "Channelplay is a leading retail & distribution solution company providing technology solutions with digital loyalty programs.",
            responsibilities: [
                "Assisted customers professionally addressing inquiries and resolving issues",
                "Managed CRM data including invoice verification and customer data storage",
                "Created & maintained SQL Server scheduled jobs for database maintenance and backups",
                "Created BigQuery data studio dashboards and reports for management",
                "Managed multi-terabyte data warehouse with performance optimization"
            ],
            tools: ["CRM", "Adv-Excel", "SQL", "JavaScript", "Big-Query", "Data-Studio", "MS-Office", "Power-Bi"]
        },
        {
            title: "Intern",
            company: "IHT (Infotech Hub Technologies)",
            period: "06/2018 – 09/2018",
            location: "Mumbai, India",
            description: "IHT specializes in offering training services for advanced technologies, software, storage management, security, and IT infrastructure.",
            responsibilities: [
                "Created Python wrapper for multi-threaded applications",
                "Developed MySQL data queries using Python MySQL connector",
                "Collaborated with cross-functional teams to design and implement RESTful APIs",
                "Enhanced data exchange between front-end and back-end systems"
            ],
            tools: ["Python", "Django", "NumPy", "Pandas", "MySQL", "HTML", "CSS", "C", "Data Structures"]
        }
    ],

    education: [
        {
            degree: "B.Tech in Information Technology",
            school: "Dr. A.P.J Abdul Kalam Technical University",
            period: "2015 - 2019",
            location: "Lucknow, UP",
            grade: "6.9/10"
        },
        {
            degree: "12th Grade",
            school: "SSYI College",
            period: "2013 - 2015",
            location: "Azamgarh, UP",
            grade: "7.2/10"
        },
        {
            degree: "10th Grade",
            school: "SGBI College",
            period: "2012 - 2013",
            location: "Azamgarh, UP",
            grade: "7.6/10"
        }
    ],

    // ══════════════════════════════════════════════════════════════
    // REPLACE the entire `skills` array in portfolioData with this
    // ══════════════════════════════════════════════════════════════

    skills: [
        {
            category: "Frontend",
            filterKey: "frontend",
            icon: "fa-code",
            items: [
                { name: "JavaScript", icon: "fab fa-js-square", level: 92, label: "Advanced" },
                { name: "React.js", icon: "fab fa-react", level: 72, label: "Advanced" },
                { name: "HTML / CSS", icon: "fab fa-html5", level: 90, label: "Advanced" },
                { name: "Bootstrap", icon: "fab fa-bootstrap", level: 80, label: "Advanced" },
                { name: "jQuery", icon: "fas fa-code", level: 70, label: "Proficient" },
                { name: "TypeScript", icon: "fas fa-code", level: 60, label: "Intermediate" }
            ]
        },
        {
            category: "Backend",
            filterKey: "backend",
            icon: "fa-server",
            items: [
                { name: "Node.js", icon: "fab fa-node-js", level: 80, label: "Advanced" },
                { name: "Express.js", icon: "fas fa-server", level: 75, label: "Advanced" },
                { name: "Python", icon: "fab fa-python", level: 80, label: "Expert" },
                { name: "Django", icon: "fab fa-python", level: 65, label: "Proficient" },
                { name: "REST APIs", icon: "fas fa-plug", level: 76, label: "Expert" },
                { name: "JWT Auth", icon: "fas fa-lock", level: 82, label: "Advanced" }
            ]
        },
        {
            category: "Database",
            filterKey: "database",
            icon: "fa-database",
            items: [
                { name: "MySQL", icon: "fas fa-database", level: 85, label: "Advanced" },
                { name: "MongoDB", icon: "fas fa-leaf", level: 88, label: "Advanced" },
                { name: "BigQuery", icon: "fab fa-google", level: 65, label: "Proficient" },
                { name: "Redis", icon: "fas fa-bolt", level: 55, label: "Intermediate" },
                { name: "Firebase", icon: "fas fa-fire", level: 60, label: "Proficient" },
                { name: "SQL", icon: "fas fa-table", level: 80, label: "Advanced" }
            ]
        },
        {
            category: "Cloud & Tools",
            filterKey: "tools",
            icon: "fa-cloud",
            items: [
                { name: "AWS", icon: "fab fa-aws", level: 55, label: "Proficient" },
                { name: "GCP", icon: "fab fa-google", level: 80, label: "Proficient" },
                { name: "Docker", icon: "fab fa-docker", level: 60, label: "Proficient" },
                { name: "Git / GitHub", icon: "fab fa-github", level: 85, label: "Advanced" },
                { name: "Power BI", icon: "fas fa-chart-bar", level: 75, label: "Proficient" },
                { name: "Apps Script", icon: "fab fa-google", level: 90, label: "Expert" }
            ]
        }
    ],

    // Other technologies / tools (shown as pill tags at the bottom)
    otherTech: [
        "Google Sheets", "Looker Studio", "Netlify", "Postman",
        "Redux", "Context API", "JWT", "OAuth",
        "WebSockets", "REST APIs", "Agile / Scrum", "VS Code",
        "Figma", "ChatAI", "Slack", "Notion"
    ],

    projects: [
        // ── FEATURED (top 3 alternating) ──────────────────────────────
        {
            title: "Infrasphere Web",
            description: "A centralized web platform designed to streamline infrastructure procurement by enabling real-time comparison of material rates across multiple vendors and projects. The system provides data-driven insights, automated reporting, and dynamic dashboards powered by Google Sheets and Apps Script. It helps teams optimize cost planning, improve transparency, and make faster, more informed procurement decisions while reducing manual effort and errors.",
            tags: ["JavaScript", "Google Sheets", "Apps Script", "Bootstrap", "jQuery", "RestAPI", "HTML,CSS"],
            filterTags: ["management"],
            featured: true,
            image: "images/infrasphere1.png",      // ← put your screenshot here
            icon: "fa-building",
            accent: "#64748b",
            // gradient: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
            stats: [{ label: "Users", value: "50+" }, { label: "Reports", value: "20+" }],
            github: "https://script.google.com/macros/s/AKfycbyHjIqUW55us4I_CaTgPVA3s_kio7KmjvWCQzfnFPRR3JxJIug6X2EAxZFnhcdIuvjJTw/exec",
            liveDemo: ""
        },
        {
            title: "Infrabid Web v1.1",
            description: "An advanced bidding management platform built to streamline contractor quotation analysis and optimize project selection. The system enables real-time comparison of vendor pricing, automated bid evaluation, and centralized data tracking using Google Sheets and Apps Script. Integrated REST APIs and dynamic UI components enhance workflow efficiency, reduce manual intervention, and ensure transparent decision-making.",
            tags: ["Appscript", "Google Sheets", "API", "Bootstrap", "jQuery", "RestAPI", "HTML,CSS"],
            filterTags: ["management", "api"],
            featured: true,
            image: "images/infraBid.png",         // ← put your screenshot here
            icon: "fa-gavel",
            accent: "#14b8a6",
            // gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
            stats: [{ label: "Users", value: "120+" }, { label: "Reports", value: "15+" }],
            github: "https://script.google.com/a/macros/thepuneet.com/s/AKfycbxTK3eZau9-63s-sgRB3DrcqldEG3eAYDpCYNmMTPUEXAQkqhEp1ld_aCsCurrFkfkUdQ/exec",
            liveDemo: ""
        },
        {
            title: "AI Call Analysis V2.0",
            description: "AI-driven system that analyzes sales calls to evaluate performance. Identifies strengths, knowledge gaps, and generates actionable insights for training and improvement across the entire sales team.",
            tags: ["JavaScript", "Google Sheets", "Apps Script", "AI", "Chat Integration"],
            filterTags: ["ai", "analytics"],
            featured: true,
            image: "images/sales1.png",          // ← put your screenshot here
            icon: "fa-microphone-lines",
            accent: "#a855f7",
            // gradient: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
            stats: [{ label: "Accuracy", value: "88%" }, { label: "Calls/mo", value: "500+" }],
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },

        // ── NOTEWORTHY (horizontal scroll row) ───────────────────────
        {
            title: "Rewards-Based API",
            description: "Scalable RESTful API for an e-commerce rewards platform. Implemented secure JWT-based authentication, user reward management, and seamless payment gateway integration.",
            tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
            filterTags: ["api"],
            featured: false,
            icon: "fa-trophy",
            accent: "#f59e0b",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            github: "https://github.com/San3222/ecommerce-api",
            liveDemo: ""
        },
        {
            title: "Sales Metrics Analysis V2.0",
            description: "Advanced analytics dashboard tracking real estate sales performance — unit-wise BHK sales, revenue trends, and customer insights for data-driven decision-making.",
            tags: ["JavaScript", "MySQL", "HTML", "CSS", "API"],
            filterTags: ["analytics"],
            featured: false,
            icon: "fa-chart-line",
            accent: "#3b82f6",
            gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "Non-Conformity Management",
            description: "Quality management system for site and quality engineers to track non-conformities, assign tasks, and monitor resolution with real-time updates.",
            tags: ["Apps Script", "Google Sheets", "BigQuery", "Bootstrap"],
            filterTags: ["management", "automation"],
            featured: false,
            icon: "fa-clipboard-check",
            accent: "#10b981",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            github: "https://github.com/San3222/task-dashboard",
            liveDemo: ""
        },
        {
            title: "Meeting Room Booking",
            description: "Automated booking system managing meeting room reservations with scheduling, availability tracking, and conflict prevention.",
            tags: ["Apps Script", "Google Sheets", "HTML", "CSS"],
            filterTags: ["automation", "management"],
            featured: false,
            icon: "fa-calendar-check",
            accent: "#8b5cf6",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "Material Requisition & Billing",
            description: "Centralized system to track material requests, approvals, and billing — ensures transparency in procurement and real-time payment monitoring.",
            tags: ["JavaScript", "Google Sheets", "Apps Script"],
            filterTags: ["management", "automation"],
            featured: false,
            icon: "fa-boxes-stacked",
            accent: "#ef4444",
            gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "Drip Marketing Analysis",
            description: "Marketing analytics platform tracking campaign performance across WhatsApp, email, and social media with delivery, engagement, and conversion metrics.",
            tags: ["JavaScript", "Google Sheets", "WhatsApp API"],
            filterTags: ["analytics", "automation"],
            featured: false,
            icon: "fa-bullhorn",
            accent: "#06b6d4",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "Scout Sheet Beta V2.0",
            description: "Real-time lead tracking system capturing incoming leads instantly with automated demand tracking and conversion analytics.",
            tags: ["Apps Script", "Google Sheets", "Meta API"],
            filterTags: ["automation", "analytics"],
            featured: false,
            icon: "fa-crosshairs",
            accent: "#f97316",
            gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "Inventory Management System",
            description: "Centralized inventory tracking across projects with search, stock updates, and consumption tracking for smarter resource planning.",
            tags: ["JavaScript", "Google Sheets", "Tracking"],
            filterTags: ["management"],
            featured: false,
            icon: "fa-warehouse",
            accent: "#84cc16",
            gradient: "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "Whistleblower System",
            description: "Secure reporting platform for misconduct and policy violations with confidentiality guarantees, structured case tracking, and transparent resolution.",
            tags: ["JavaScript", "Google Sheets", "SQL"],
            filterTags: ["management"],
            featured: false,
            icon: "fa-shield-halved",
            accent: "#0ea5e9",
            gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "Keeper Test Tracker",
            description: "Performance evaluation system categorizing employees by defined KPIs to help management make data-driven HR decisions.",
            tags: ["JavaScript", "Google Sheets", "Analytics"],
            filterTags: ["analytics", "management"],
            featured: false,
            icon: "fa-users-gear",
            accent: "#f43f5e",
            gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        },
        {
            title: "DelegatedHub",
            description: "Task delegation and tracking system to assign responsibilities, monitor progress, and evaluate performance with real-time accountability.",
            tags: ["JavaScript", "Google Sheets", "Task Management"],
            filterTags: ["management", "automation"],
            featured: false,
            icon: "fa-diagram-project",
            accent: "#fb923c",
            gradient: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
            github: "https://github.com/San3222/data-viz-dashboard",
            liveDemo: ""
        }
    ],

    blogPosts: [
        {
            title: "Building Scalable Node.js APIs",
            excerpt: "Best practices and patterns for creating scalable RESTful APIs with Node.js and Express.",
            date: "Mar 15, 2024",
            category: "Backend",
            readTime: "5 min",
            link: "#"
        },
        {
            title: "React Performance Optimization",
            excerpt: "Techniques to optimize React applications for better performance and user experience.",
            date: "Feb 28, 2024",
            category: "Frontend",
            readTime: "6 min",
            link: "#"
        },
        {
            title: "Database Design Patterns",
            excerpt: "Common database design patterns and when to use them in different scenarios.",
            date: "Jan 20, 2024",
            category: "Database",
            readTime: "7 min",
            link: "#"
        }
    ]
};