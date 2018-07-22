import React from "react";

const slideHeaders = ["Study Group No.", "Topic", "Description", "Resource"];
const slidesList = [
  {
    topic: "Intro to React",
    link:
      "https://docs.google.com/presentation/d/1g5f2pA3n7TLCqkNVHvNtidu13-bWzil97EV6M8bDG2c/edit#slide=id.g3489b4a6e0_0_18",
    description: "Creating your first react app",
    resource: null
  },
  {
    topic: "Props and States",
    link:
      "https://docs.google.com/presentation/d/1xqgtoMBnRSHv6Wlj6ISNzk4t0qUp6JZ42oWv5ZOzGcc/edit#slide=id.g2074b11500_0_0",
    description: "Passing props and managing states",
    resource: null
  },
  {
    topic: "Routes",
    link:
      "https://docs.google.com/presentation/d/1YFGA4WgLU8yikdsIZZPtBg9-0BVTG8EMJToMXDhhFC8/edit?usp=drive_web&ouid=100552747360855322984",
    description: "Manage URLs of your react app",
    resource: null
  }
];

const Slides = () => (
  <section className="container">
    <h3 className="subtitle">Slides</h3>
    <p>
      Here are the list of slides prepared for study groups. If it's your first
      time joining the ReactJS Study Group, you may be interested in reading the
      first set of slides
    </p>
    <table className="table is-hoverable">
      <thead>
        <tr>
          {slideHeaders.map((header, index) => (
            <th key={index} className="has-text-centered">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {slidesList.map((slide, index) => (
          <tr key={index}>
            <td className="has-text-centered">{index + 1}</td>
            <td className="has-text-centered">
              <a href={slide.link}>{slide.topic}</a>
            </td>
            <td>{slide.description}</td>
            <td>{slide.resource}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default Slides;
