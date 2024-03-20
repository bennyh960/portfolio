import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Projects = {
  label: "Real Professional Projects",
  data: [
    {
      name: "People Connections Net",
      lvl: "Scrapping and developing algorithm to find social networks between users , their friends and people who they might know",
    },
    { name: "Workforce Allocation", lvl: "Advanced Outlook app with products managements system" },
    { name: "Survey Analysis", lvl: "Utilize gpt LLM to analyze raw data from survey" },
    {
      name: "Online Store",
      lvl: "Owner of online store that perform ETL between many stores to perform price comparison , similar but advanced to Zap.",
    },
    { name: "Data Management", lvl: "Proposal of Golden Record and matching component" },
    { name: "Banking research", lvl: "Project manager and consultant of Developing API for CBDC for Central Bank" },
  ],
};
const FE = {
  label: "Frontend Development",
  data: [
    { name: "HTML", lvl: "Experienced" },
    { name: "CSS", lvl: "Experienced" },
    { name: "Antd/MUI/Bootstrap", lvl: "Experienced" },
    { name: "React", lvl: "Experienced" },
    { name: "Type Script", lvl: "Experienced" },
    { name: "Angular", lvl: "Beginner" },
    { name: "Dash", lvl: "Beginner" },
    { name: "Redux", lvl: "Intermediate" },
  ],
};
const BE = {
  label: "Backend Development",
  data: [
    { name: "NodeJS", lvl: "Experienced" },
    { name: "Python", lvl: "Experienced" },
    { name: "C# - .Net", lvl: "Beginner" },
    { name: "Scrapping", lvl: "Experienced" },
    { name: "ETL", lvl: "Experienced" },
    { name: "Microservices", lvl: "Experienced" },
    { name: "Web Socket", lvl: "Intermediate" },
  ],
};

const DB = {
  label: "Data Base",
  data: [
    { name: "Postgres Sql", lvl: "Experienced" },
    { name: "Microsoft Sql Server", lvl: "Intermediate" },
    { name: "MongoDB", lvl: "Intermediate" },
  ],
};
const devOps_azure = {
  label: "Azure Experienced Services",
  data: [
    { name: "Azure devops", lvl: "Experienced" },
    { name: "Azure Functions", lvl: "Intermediate" },
    { name: "Data Factory", lvl: "Beginner" },
    { name: "Azure Blob Storage And Data lake gen 2", lvl: "Intermediate" },
    { name: "Azure OpenAI", lvl: "Intermediate" },
  ],
};

const devOps_aws = {
  label: "AWS Experienced Services",
  data: [
    { name: "Lambda Functions", lvl: "Experienced" },
    { name: "EC2", lvl: "Intermediate" },
    { name: "ECS", lvl: "Beginner" },
    { name: "Cognito", lvl: "Beginner" },
    { name: "S3", lvl: "Experienced" },
    { name: "Cloud Front", lvl: "Intermediate" },
    { name: "Route53", lvl: "Intermediate" },
    { name: "RDS", lvl: "Intermediate" },
  ],
};

const ExpDataDrawer = ({ experienceType }) => {
  const draw = (data) => {
    return data.map((ex) => {
      return (
        <article key={ex.name} className="experience_detailes">
          <BsPatchCheckFill className="experience_detailes-icons" />
          <div>
            <h4>{ex.name}</h4>
            <small className="text-light">{ex.lvl}</small>
          </div>
        </article>
      );
    });
  };
  return (
    <>
      <h3>{experienceType.label}</h3>
      <div className="experience__content">{draw(experienceType.data)}</div>
    </>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <ExpDataDrawer experienceType={FE} />
        </div>
        <div className="experience__backend">
          <ExpDataDrawer experienceType={BE} />
        </div>
        <div className="experience__backend">
          <ExpDataDrawer experienceType={devOps_aws} />
        </div>
        <div className="experience__backend">
          <ExpDataDrawer experienceType={devOps_azure} />
        </div>
        <div className="experience__backend">
          <ExpDataDrawer experienceType={DB} />
        </div>
        <div className="experience__backend">
          <ExpDataDrawer experienceType={Projects} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
