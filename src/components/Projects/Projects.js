import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import realEstate from "src/Assets/PROJECTS/03b4affe-af22-4424-b843-22bb9f5cced9.jpg";
import airlineSentiment from "src/Assets/PROJECTS/49d86244-b765-4d67-b291-2242569a3946.jpg";
import loanApproval from "src/Assets/PROJECTS/loan-process-1280x645.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="This project Linear Regression , XGBoost and Random Forest to predict real estate prices based on location, size, and market trends. It helps buyers, sellers, and investors make data-driven decisions."
              ghLink="https://github.com/shivolen/MLProjects/blob/main/Real%20Estate%20PrIce%20Prediction.ipynb"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real Estate Price Prediction"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Airline Sentiment Analysis"
              description="A natural language processing (NLP) project that analyzes customer reviews and feedback to determine sentiment trends in the airline industry. It helps airlines improve services and enhance customer satisfaction."
              ghLink="https://github.com/shivolen/MLProjects/blob/main/Airline.ipynb"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Loan Approval Model"
              description="An AI-powered system that evaluates loan applications based on financial history, credit scores, and risk factors. It automates approval decisions, reducing manual effort and improving accuracy."
              ghLink="https://github.com/shivolen/MLProjects/blob/main/loanapproval.ipynb"
              
            />
          </Col>

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
