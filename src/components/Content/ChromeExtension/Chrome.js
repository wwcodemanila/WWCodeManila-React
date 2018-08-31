import React from "react";
import PageContent from "components/Elements/PageContent";
import Code from "react-code-prettify";

const steps = [
  {
    step: 1,
    description: "Create a new react project using the create-react-app: ",
    code: `yarn create react-app extension \ncd extension \nyarn start`,
    language: "text"
  },
  {
    step: 2,
    description: "Update public/manifest.json. Copy paste the following:",
    code: `{
        "manifest_version": 2,
        "name": "moment",
        "description": "replica extension",
        "version": "0.0.1",
        "browser_action": {
          "default_popup": "index.html",
          "default_title": "Open the popup"
        },
        "chrome_url_overrides": {
          "newtab": "index.html"
        },
        "icons": {
          "16": "favicon.ico",
          "48": "favicon.ico",
          "128": "favicon.ico"
        },
        "permissions": ["activeTab"]
      }`,
    language: "text"
  },
  {
    step: 3,
    description: "Build app",
    code: `yarn build`
  },
  {
    step: 4,
    description: "Load unpacked package on Chrome extensions",
    code: ""
  }
];

const Chrome = () => (
  <PageContent
    title="Chrome Extension"
    description="Create a chrome extension using the create-react-app!"
  >
    <p className="subtitle">
      Let's start coding! <hr />
    </p>

    <ol>
      {steps.map((step, index) => (
        <li key={index}>
          {step.description} <br />{" "}
          {step.code ? (
            <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <Code codeString={step.code} language={step.language} />
            </div>
          ) : (
            ""
          )}
        </li>
      ))}
    </ol>
  </PageContent>
);

export default Chrome;
