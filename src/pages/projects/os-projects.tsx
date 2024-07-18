import Layout from "@theme/Layout";

import Project from "@site/src/components/Project";

import gally from "./images/gally.webp";
import haring from "./images/haring.webp";
import reactPerForm from "./images/react-per-form.webp";
import slidev from "./images/slidev.webp";
import slidevThemeSmile from "./images/slidev-theme-smile.webp";
import storybookAddonTheme from "./images/storybook-addon-theme.webp";

export default function OsProjects(): JSX.Element {
  return (
    <Layout
      title={`Open Source Projects`}
      description="Open Source Projects of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <div className="container margin-vert--lg">
        <h1>Open Source Projects</h1>
        <Project
          date="February 2024"
          image={reactPerForm}
          links={[
            { link: "https://tonai.github.io/react-per-form/" },
            {
              link: "https://github.com/tonai/react-per-form",
              type: "github",
            },
          ]}
          techs={["Typescript", "React", "Jest", "Playwright", "Vite"]}
          title="@per-form/react"
        >
          Library I created to easily manage form on React projects.
          <br />
          It is based on native HTML capabilities with high performances and
          customization in mind.
        </Project>
        <Project
          date="June 2023"
          image={haring}
          links={[
            { link: "https://smile-sa.github.io/haring-doc/" },
            { link: "https://github.com/Smile-SA/haring", type: "github" },
            {
              link: "https://github.com/Smile-SA/haring-doc/",
              type: "github",
            },
          ]}
          techs={[
            "Typescript",
            "Next",
            "React",
            "Mantine",
            "Storybook",
            "Jest",
            "Vite",
          ]}
          title="Haring"
        >
          High level component library I created at my company (Smile).
          <br />
          The goal was to be more efficient on certain types of projects.
        </Project>
        <Project
          date="December 2022"
          image={gally}
          links={[
            {
              link: "https://github.com/Elastic-Suite/gally",
              type: "github",
            },
            {
              link: "https://github.com/Elastic-Suite/gally-admin",
              type: "github",
            },
          ]}
          techs={[
            "Typescript",
            "Next",
            "React",
            "Redux",
            "Material UI",
            "Storybook",
            "Jest",
          ]}
          title="Gally"
        >
          Searchandising (search + merchandising) engine for e-commerce web
          site.
          <br />I initiated the admin app for managing and configuring the tool.
        </Project>
        <Project
          date="January 2022"
          image={slidevThemeSmile}
          links={[
            {
              link: "https://github.com/Smile-SA/slidev-theme-smile",
              type: "github",
            },
            {
              link: "https://github.com/Smile-SA/slidev-component-poll",
              type: "github",
            },
            {
              link: "https://github.com/Smile-SA/slidev-component-pager",
              type: "github",
            },
            {
              link: "https://github.com/Smile-SA/slidev-component-zoom",
              type: "github",
            },
            {
              link: "https://github.com/Smile-SA/slidev-component-scroll",
              type: "github",
            },
            {
              link: "https://github.com/Smile-SA/slidev-component-progress",
              type: "github",
            },
            {
              link: "https://github.com/Smile-SA/slidev-component-spotlight",
              type: "github",
            },
            {
              link: "https://github.com/Smile-SA/spotlight-vue",
              type: "github",
            },
          ]}
          techs={["Typescript", "Vue", "Vite"]}
          title="Slidev addons and themes"
        >
          Collection of addons and themes for Slidev.
        </Project>
        <Project
          date="April 2021"
          image={slidev}
          links={[
            { link: "https://sli.dev/" },
            { link: "https://github.com/slidevjs/slidev", type: "github" },
          ]}
          techs={["Typescript", "Vue", "Vitest", "Vite"]}
          title="Slidev"
        >
          Member of the team of the Slidev project created by{" "}
          <a href="https://github.com/antfu">Anthony Fu</a>.
          <br />
          Slidev is a tool for developers for creating slides.
        </Project>
        <Project
          date="January 2018"
          image={storybookAddonTheme}
          links={[
            {
              link: "https://github.com/tonai/storybook-addon-themes",
              type: "github",
            },
          ]}
          techs={[
            "Typescript",
            "React",
            "Vue",
            "Angular",
            "Svelte",
            "HTML",
            "Storybook",
          ]}
          title="Storybook Addon Themes"
        >
          Library I created for managing different themes in Storybook.
          <br />
          Custom implementations for React, Vue, Angular, Svelte and native
          HTML.
        </Project>
      </div>
    </Layout>
  );
}
