import React from "react";
import "./ComingSoonProjects.css"; // Optional: Add custom styles

const ComingSoonProjects = () => {
  const comingSoonProjects = [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      description:
        "A smart chatbot built using NLP and machine learning to enhance user interactions.",
      status: "In Progress",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with advanced filtering and payment integration.",
      status: "Planning Phase",
    },
    {
        id: 3,
        title: "Collaborative Task Manager",
        description:
          "A web-based task management tool that allows teams to collaborate, assign tasks, track progress, and set deadlines in real-time.",
        status: "Design Phase",
      },
    {
  id: 4,
  title: "Realtime Chat App",
  description:
    "A web-based chat application that enables users to communicate in real-time, create group chats, share files, and receive notifications for new messages.",
  status: "Design Phase",
}
  ];

  return (
    <div className="coming-soon-container ${theme}">
      <h2 className="title">Projects Coming Soon</h2>
      <p className="sub-title">Stay tuned for updates on my upcoming projects!</p>
      <div className="projects-grid">
        {comingSoonProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-status">
              <strong>Status:</strong> {project.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoonProjects;