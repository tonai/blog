import Layout from "@theme/Layout";
import Project from "@site/src/components/Project";

import archi from "./images/archi.webp";
import lib from "./images/lib.webp";
import tntHeadless from "./images/tnt-headless.webp";

export default function Games(): JSX.Element {
  return (
    <Layout
      title={`Presentation Slides`}
      description="Slides of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <div className="container margin-vert--lg">
        <h1>Presentation Slides</h1>
        <Project
          date="December 2023"
          image={lib}
          language="en"
          links={[{ link: "https://tonai.github.io/slides/frontend-library" }]}
          title="Creating a frontend library"
        >
          Presentation slides about what creating a frontend library.
        </Project>
        <Project
          date="November 2023"
          image={tntHeadless}
          language="fr"
          links={[{ link: "https://tonai.github.io/slides/tnt-headless" }]}
          title="Tech' Non Tech' - What is headless ?"
        >
          Presentation slides about what is headless for non technical peoples.
          <br />
          Presentation given at Smile on November 21, 2023.
        </Project>
        <Project
          date="October 2023"
          image={archi}
          language="fr"
          links={[
            { link: "https://tonai.github.io/slides/frontend-architecture" },
          ]}
          title="Frontend architectures"
        >
          Presentation slides about frontend architecture.
          <br />
          Presentation given at Meetup Paris.js on October 25, 2023.
        </Project>
      </div>
    </Layout>
  );
}
