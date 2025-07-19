import React from "react";

// Neo-brutalist card style
const cardStyle: React.CSSProperties = {
    background: "#fff",
    border: "4px solid #000",
    borderRadius: "12px",
    boxShadow: "8px 8px 0 #000",
    padding: "2rem",
    margin: "1rem 0",
    maxWidth: "600px",
};

const sectionTitleStyle: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    letterSpacing: "1px",
    color: "#000",
};

const ProjectsSection: React.FC = () => (
    <section style={cardStyle}>
        <h2 style={sectionTitleStyle}>Projects</h2>
        <ul>
            <li>
                <strong>Project One</strong> – Description of your first project.
            </li>
            <li>
                <strong>Project Two</strong> – Description of your second project.
            </li>
            {/* Add more projects as needed */}
        </ul>
    </section>
);

const BlogsSection: React.FC = () => (
    <section style={cardStyle}>
        <h2 style={sectionTitleStyle}>Blogs</h2>
        <ul>
            <li>
                <strong>Blog Post One</strong> – Short summary of your first blog post.
            </li>
            <li>
                <strong>Blog Post Two</strong> – Short summary of your second blog post.
            </li>
            {/* Add more blog posts as needed */}
        </ul>
    </section>
);

const ProjectsAndBlogsSection: React.FC = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ProjectsSection />
        <BlogsSection />
    </div>
);

export default ProjectsAndBlogsSection;