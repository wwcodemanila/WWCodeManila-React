import React from "react";

const tools = [
  {
    label: "VSCode",
    link: "https://code.visualstudio.com/",
    description: "Text editor. Other options include: Sublime Text, Atom, Vim"
  },
  {
    label: "Node.js",
    link: "https://nodejs.org/en/",
    description: "Runs our react app"
  },
  {
    label: "Yarn",
    link: "https://yarnpkg.com/en/",
    description: "Manages our app dependecies"
  },
  {
    label: "React Dev Tools",
    link:
      "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
    description:
      "Chroms/Firefox extension for checking states and props of your react app"
  }
];

const ReactTools = () => (
  <section className="container">
    <h3 className="subtitle">Tools</h3>
    <span>
      Please make sure to install the following before attending the study
      groups. Click on the links for installation instructions.
    </span>
    <ul>
      {tools.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.label}</a>: {item.description}
        </li>
      ))}
    </ul>
  </section>
);

export default ReactTools;
