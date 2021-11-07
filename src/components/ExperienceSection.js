import React from "react";
import Section from "./Section";

function ExperienceSection() {
  const jobs = [
    {
      heading: "Accenture",
      description: "Development Associate (June 2021 - Present)",
      details: [
        "Front-End Development for National Australia Bank",
        "Assisted Business Transaction Accounts creation, adhereing to AML-CDD standards",
        "AWS Certified",
        "React, Python, Jest, Jenkins",
      ],
    },
    {
      heading: "Mercantile Rowing Club",
      description:
        "Vice-Captain (Feb 2021 - Oct 2021), U21 Coxswain (2019-2021)",
      details: [
        "Liasion between the coaching team, committee and athletes",
        "Worked closely with coaching team to coordinate on-water and off-water training, transportation of boats intrastate and interstate",
      ],
    },
    {
      heading: "Monash University Rowing Club",
      description: "Treasurer (Jan 2021 - Present)",
      details: [
        "Managed finances and introduced new income streams",
        "Coordinated trials and athlete selection for Division 1 Nationals",
        "Lead the uplift of our rowing uniform, working closely with both Monash University and our suppliers ",
      ],
    },
    {
      heading: "Deloitte",
      description: "Insider Program - 1 Week",
      details: ["Insider Program", " not AWS Certified"],
    },
  ];

  const a = jobs.map((item) => (
    <Section
      heading={item.heading}
      description={item.description}
      details={item.details}
    />
  ));

  return <>{a}</>;
}

export default ExperienceSection;
