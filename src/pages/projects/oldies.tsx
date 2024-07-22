import Layout from "@theme/Layout";

import Project from "@site/src/components/Project";

import caninEducV1 from "./images/canin-educ-v1.webp";
import creaftersAwuikaz from "./images/creafters-awuikaz.webp";
import ermetik from "./images/ermetik.webp";
import fantasticFigurinesV1 from "./images/fantastic-figurines-v1.webp";
import fantasticFigurinesV2 from "./images/fantastic-figurines-v2.webp";
import jFacq from "./images/j-facq.webp";
import logibox from "./images/logibox.webp";
import pluginsV1 from "./images/plugins-v1.webp";
import pluginsV2 from "./images/plugins-v2.webp";
import tousUnisContreLeSida from "./images/tousuniscontrelesida.webp";
import yechteam from "./images/yechteam.webp";

export default function Oldies(): JSX.Element {
  return (
    <Layout
      title={`Oldies`}
      description="Oldies projects of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <div className="container margin-vert--lg">
        <h1>Oldies</h1>
        <Project
          date="June 2010"
          image={pluginsV2}
          links={[
            {
              link: "https://github.com/tonai/plugins-v2",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Plugins V2"
        >
          Rebranding of the "Plugins" website with enhancements.
        </Project>
        <Project
          date="June 2009"
          image={creaftersAwuikaz}
          links={[
            {
              link: "https://github.com/tonai/creafters-awuikaz",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Creafters Awuikaz"
        >
          My Dofus guild forum.
        </Project>
        <Project
          date="April 2009"
          image={tousUnisContreLeSida}
          links={[
            {
              link: "https://github.com/tonai/tous-unis-contre-le-sida",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Tous unis contre le sida"
        >
          Website for the "Tous uni contre le sida" association as a school
          project.
        </Project>
        <Project
          date="February 2009"
          image={ermetik}
          links={[
            {
              link: "https://github.com/tonai/ermetik",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Ermetik"
        >
          Website that was designed for a student office list.
        </Project>
        <Project
          date="October 2008"
          image={fantasticFigurinesV2}
          links={[
            {
              link: "https://github.com/tonai/fantastic-figurines-v2",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Fantastic Figurines V2"
        >
          Unfinished rebranding of my Fantastic Figurines website.
        </Project>
        <Project
          date="August 2008"
          image={jFacq}
          links={[
            {
              link: "https://github.com/tonai/j-facq",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Joanne FACQ"
        >
          Website for a painter named Joanne FACQ.
        </Project>
        <Project
          date="February 2008"
          image={pluginsV1}
          links={[
            {
              link: "https://github.com/tonai/plugins",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Plugins"
        >
          Website for the "Plugins" music band.
        </Project>
        <Project
          date="June 2007"
          image={logibox}
          links={[
            {
              link: "https://github.com/tonai/logibox",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Logibox"
        >
          School project of a carpooling portal.
        </Project>
        <Project
          date="March 2007"
          image={yechteam}
          links={[
            {
              link: "https://github.com/tonai/yechteam",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Yeachteam"
        >
          Website that was designed for a sport student office list.
        </Project>
        <Project
          date="January 2007"
          image={fantasticFigurinesV1}
          links={[
            {
              link: "http://fantasticfigurines.free.fr/",
            },
            {
              link: "https://github.com/tonai/fantastic-figurines",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Fantastic Figurines"
        >
          Personal website showcasing the minis I painted.
        </Project>
        <Project
          date="June 2006"
          image={caninEducV1}
          links={[
            {
              link: "https://github.com/tonai/canin-educ",
              type: "github",
            },
          ]}
          techs={["PHP", "Javascript", "Photoshop"]}
          title="Dog Trainer"
        >
          Website for a friend of my parents who converted to dog training.
          <br />
          Updated later in 2009 to add new pages and features.
        </Project>
      </div>
    </Layout>
  );
}
