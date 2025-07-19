import { link } from "fs";
import React from "react";

const aboutData = {
    name: "Hi there, I'm Anil Kumar.",
    intro:
        "I'm a passionate and detail-oriented Computer Science student with a strong foundation in software engineering and artificial intelligence. I thrive on building high-performance applications and contributing to collaborative development environments.",
    education: {
        degree: "B.Tech in Computer Science",
        institute: "National Institute of Technology, Kurukshetra",
        graduation: "June 2026",
        coursework:
            "Java, Python, C, JavaScript, DBMS, Software Engineering, Artificial Intelligence, Data Structures and Algorithms, Operating Systems, Distributed Systems",
    },
    experience: [
        {
            role: "Front-end Developer",
            company: "LinkD",
            period: "Feb 2024 - Apr 2024",
            highlights: [
                "Built UI for an AI-generated content platform using React and GPT-4 APIs, reducing post creation time by 30%.",
                "Contributed to component development, bug fixes, and UI polish under direct mentorship of the founder.",
                "Gained exposure to startup product cycles and fast-paced, collaborative development.",
            ],
        },
    ],
    projects: [
        {
            name: "Pcom-Go",
            link: "https://github.com/BlackBuck/pcom-go",
            desc: "Engineered a high-performance parser combinator library in Go (10+ GitHub stars). Architected checkpoint/rollback for complex parsing, improved nested parser performance 3x, and added color-coded error messages with full backtracking.",
        },
        {
            name: "Open-Source Contribution",
            link: "https://github.com/sourcegraph/zoekt/pull/966",
            desc: "Contributed to Sourcegraph and Zoekt by fixing a bug in the query parser's handling of nested parentheses, collaborating with maintainers and supporting a simpler, effective solution.",
        },
        {
            name: "AI vs Human Audio Recognizer",
            link: "https://github.com/BlackBuck/Deepfake-Audio-Recognition",
            desc: "Developed a classifier using Python, PyTorch, and Librosa to distinguish real vs AI-generated audio. Achieved 99.7% accuracy using MEL Spectrograms, AlexNet/MobileNet/ResNet, early stopping, and 5-fold cross-validation.",
        },
    ],
    skills: {
        languages: [
            "Java",
            "Golang",
            "Rust",
            "Python",
            "C/C++",
            "SQL",
            "JavaScript",
            "HTML/CSS",
            "Bash",
        ],
        frameworks: [
            "Next.JS",
            "React.JS",
            "Node.js",
            "TensorFlow",
            "PyTorch",
            "pandas",
            "NumPy",
            "Matplotlib",
        ],
        databases: ["PostgreSQL", "MySQL", "MongoDB"],
        tools: [
            "Git",
            "VS Code",
            "Visual Studio",
            "PyCharm",
            "IntelliJ",
            "Eclipse",
        ],
    },
    socials: {
        "github": "https://github.com/BlackBuck",
        "linkedin": "https://www.linkedin.com/in/uneel/",
        "twitter": "https://twitter.com/AnilBishno57549",
    }
};

const sectionStyle: React.CSSProperties = {
    background: "#fff",
    border: "4px solid #000",
    borderRadius: "0.5rem",
    margin: "2rem 0",
    padding: "2rem",
    boxShadow: "8px 8px 0 #000",
    fontFamily: "monospace",
};

const headingStyle: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    background: "#ffeb3b",
    display: "inline-block",
    padding: "0.25rem 1rem",
    border: "2px solid #000",
    boxShadow: "4px 4px 0 #000",
};

const listStyle: React.CSSProperties = {
    listStyle: "square",
    marginLeft: "1.5rem",
    marginBottom: "1rem",
};

const AboutSection = () => (
    <section style={sectionStyle}>
        <h1 style={headingStyle}>About Me</h1>
        <p>
            <b>{aboutData.name}</b> {aboutData.intro}
        </p>

        <div style={{ margin: "2rem 0" }}>
            <h2 style={headingStyle}>My Journey</h2>
            <p>
                <b>Education:</b> {aboutData.education.degree}, {aboutData.education.institute} (Graduating {aboutData.education.graduation})
                <br />
                <b>Relevant Coursework:</b> {aboutData.education.coursework}
            </p>
        </div>

        <div style={{ margin: "2rem 0" }}>
            <h2 style={headingStyle}>Experience</h2>
            {aboutData.experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: "1.5rem" }}>
                    <b>{exp.role}</b> @ {exp.company} <span style={{ color: "#888" }}>({exp.period})</span>
                    <ul style={listStyle}>
                        {exp.highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div style={{ margin: "2rem 0" }}>
            <h2 style={headingStyle}>Projects</h2>
            <ul style={listStyle}>
                {aboutData.projects.map((proj, i) => (
                    <li key={i}>
                        <b><a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.name}</a></b> - {proj.desc}
                    </li>
                ))}
            </ul>
        </div>

        <div style={{ margin: "2rem 0" }}>
            <h2 style={headingStyle}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                <div>
                    <b>Languages</b>
                    <ul style={listStyle}>
                        {aboutData.skills.languages.map((lang) => (
                            <li key={lang}>{lang}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <b>Frameworks & Libraries</b>
                    <ul style={listStyle}>
                        {aboutData.skills.frameworks.map((fw) => (
                            <li key={fw}>{fw}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <b>Databases</b>
                    <ul style={listStyle}>
                        {aboutData.skills.databases.map((db) => (
                            <li key={db}>{db}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <b>Developer Tools</b>
                    <ul style={listStyle}>
                        {aboutData.skills.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
        <div style={{margin: "2rem 0"}}>
            <h2 style={headingStyle}>Socials</h2>
            <ul style={listStyle}>
                <li>
                    <a href={aboutData.socials.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href={aboutData.socials.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href={aboutData.socials.twitter} target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    </section>
);

export default AboutSection;