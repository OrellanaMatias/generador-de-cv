// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Matias Orellana",
    jobTitle: "Desarrollador",
    location: "Argentina",
    email: "meorellanaramirez@gmail.com",
    linkedin: "",
    twitter: "",
    github: "",
    website: "",
    aboutme:
      "",

    toolsAndTechSkills: [""],
    industryKnowledge: [""],
    languages: [""],
    projects: [
      {
        title: "",
        summary: ``,
      },
    ],
    experience: [
      {
        title: "",
        company: " ",
        from: new Date(2009, 1, 1),
        to: new Date(2012, 1, 1),
        current: true,
        summary: ``,
      },
    ],

    displayEducation: true,
    displayProjects: true,
    activeColor: "#5B21B6",
  });
}
