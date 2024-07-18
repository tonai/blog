import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Project from "@site/src/components/Project";

import chineseEvents from "./images/chinese-events.png";
import blog from "./images/blog.png";
import MusicMaker from "./images/music-maker.png";
import neuralNetwork from "./images/neural-network.png";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`My projects`}
      description="Projects of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <div className="container margin-vert--lg">
        <h1>Side Projects</h1>
        <Project
          date="April 2024"
          image={chineseEvents}
          links={[
            { link: "https://tonai.github.io/chinese-events/" },
            {
              link: "https://github.com/tonai/chinese-events",
              type: "github",
            },
            {
              link: "https://github.com/tonai/chinese-events-native",
              type: "github",
            },
          ]}
          techs={["Typescript", "React", "Capacitor", "PWA", "Vite"]}
          title="Chinese events"
        >
          App that gives you the Gregorian dates of the main chinese events that
          are based on the lunar calendar.
          <br />
          This app was primarily built to compare the capabilities of a PWA app,
          versus a capacitor app, versus a React native app.
        </Project>
        <Project
          date="January 2024"
          image={blog}
          links={[
            { link: "https://tonai.github.io/blog/" },
            {
              link: "https://github.com/tonai/blog",
              type: "github",
            },
          ]}
          techs={["Typescript", "React", "Docusaurus"]}
          title="Blog"
        >
          My personal website and blog (the website you are currently on).
        </Project>
        <Project
          date="January 2022"
          image={neuralNetwork}
          links={[
            { link: "https://tonai.github.io/neural-network/" },
            {
              link: "https://github.com/tonai/neural-network",
              type: "github",
            },
          ]}
          techs={["Typescript", "P5", "Vite"]}
          title="Neural network"
        >
          Typescript manual implementation of a neural network with training.
          <br />
          The goal of this project was to have a better comprehension of neural
          networks by developing one from scratch.
        </Project>
        <Project
          date="July 2018"
          image={MusicMaker}
          links={[
            { link: "https://tonai.github.io/music-maker/" },
            {
              link: "https://github.com/tonai/music-maker",
              type: "github",
            },
          ]}
          techs={["Javascript", "React", "Webpack"]}
          title="Music maker"
        >
          Unfinished project of a music maker tool.
          <br />
          The goal was to have some fun using the browser{" "}
          <code>AudioContext</code> API.
        </Project>
      </div>
    </Layout>
  );
}
