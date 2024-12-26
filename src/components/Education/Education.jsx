import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const EducationCard = ({ educationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0, 0, 0, 0.8)",
        border: "5px solid transparent", 
        borderRadius: "25px", 
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 20px rgba(147, 51, 234, 0.5), 0 0 20px rgba(236, 72, 153, 0.5)", 
        overflow: "hidden", 
        padding: "20px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(0, 0, 0, 0.8)", 
      }}
      date={educationItem.date}
      iconStyle={{
        background: "linear-gradient(90deg, #3b82f6, #9333ea, #ec4899)", 
        width: "20px", 
        height: "20px", 
        marginLeft: "-10px",
        borderRadius: "50%", 
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.6), 0 0 15px rgba(147, 51, 234, 0.6), 0 0 15px rgba(236, 72, 153, 0.6)", 
      }}
    >
      <div>
        <h3 className="education-title">{educationItem.degree}</h3>
        <p className="education-institution">{educationItem.institution}</p>
        {educationItem.cgpa && (
          <p className="education-cgpa">Grade: {educationItem.cgpa}</p>
        )}
        <p className="education-description">{educationItem.description}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const educationData = [
    {
      date: "Oct 2021 - Sep 2025",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
      institution: "Universal College of Engineering, Kaman",
      cgpa: "8.0 CGPA",
      description:
        "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Universal College of Engineering, Kaman.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfJYZczwZZkV20hnN53dXKI8E5lt2uoiaBQ&s",
    },
    {
      date: "Apr 2019 - Apr 2021",
      degree: "HSC(XII), Science(PCMB)",
      institution: "Nirmala College of Arts, Commerce and Science, Kandivali",
      cgpa: "89.4%",
      description:
        "I completed my HSC education at Nirmala College of Arts, Commerce and Science, Kandivali.",
      logo: "https://www.nirmalacollege.edu.in",
    },
    {
      date: "Apr 2017 - Apr 2019",
      degree: "SSC(X)",
      institution: "Adarsh Vidya Niketan, Thane",
      cgpa: "78.9%",
      description:
        "I completed my class 10 education at Adarsh Vidya Niketan, Thane.",
      logo: "https://www.adarshvidyaniketan.com",
    },
  ];

  return (
    <div className="education-container">
      <div className="section-header">
        <p className="section-subtitle">My Journey So Far</p>
        <h2 className="section-title">Education</h2>
      </div>

      <VerticalTimeline>
        {educationData.map((educationItem, index) => (
          <EducationCard key={index} educationItem={educationItem} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
