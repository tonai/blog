import Layout from "@theme/Layout";

import Project from "@site/src/components/Project";

import afibel from "./images/afibel.webp";
import ahp from "./images/ahp.webp";
import airbus from "./images/airbus.webp";
import bm from "./images/bm.svg";
import bricoman from "./images/bricoman.webp";
import consolis from "./images/consolis.webp";
import crf from "./images/crf.webp";
import darjeeling from "./images/darjeeling.webp";
import dior from "./images/dior.webp";
import diplopia from "./images/diplopia.webp";
import ehs from "./images/ehs.webp";
import el from "./images/el.webp";
import fdf from "./images/fdf.webp";
import gobelins from "./images/gobelins.webp";
import hec from "./images/hec.webp";
import hutchinson from "./images/hutchinson.webp";
import kering from "./images/kering.webp";
import lhg from "./images/lhg.webp";
import passionata from "./images/passionata.webp";
import pcv from "./images/pcv.webp";
import rac from "./images/rac.webp";
import rgaa from "./images/rgaa.webp";
import reactPerForm from "./images/react-per-form.webp";
import renault from "./images/renault.webp";
import safran from "./images/safran.webp";
import sepro from "./images/sepro.webp";
import sixense from "./images/sixense.webp";
import socialStories from "./images/social-stories.webp";
import toutsurmoneau from "./images/toutsurmoneau.webp";
import uja from "./images/uja.webp";
import unomui from "./images/unomui.webp";
import vinci from "./images/vinci.webp";

export default function OsProjects(): JSX.Element {
  return (
    <Layout
      title={`Office Projects`}
      description="Office Projects of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <div className="container margin-vert--lg">
        <h1>Office Projects</h1>
        <Project
          date="February 2024"
          image={airbus}
          techs={["Typescript", "React"]}
          title="Airbus"
        >
          Training of Airbus teams in TypeScript and React.
        </Project>
        <Project
          date="June 2022"
          image={afibel}
          links={[{ link: "https://www.afibel.com/" }]}
          techs={["Typescript", "React"]}
          title="Afibel"
        >
          Training of Afibel teams in TypeScript and React.
        </Project>
        <Project
          date="Mai 2022"
          image={bricoman}
          links={[{ link: "https://www.bricoman.fr/" }]}
          techs={["Typescript", "Vue", "Quasar"]}
          title="Bricoman"
        >
          Expert support on the Quasar framework migration for Bricoman.
        </Project>
        <Project
          date="October 2021"
          image={sepro}
          techs={["Typescript", "React"]}
          title="Sepro Group"
        >
          Expert support to improve the performance of the real-time application
          connected to a robot.
        </Project>
        <Project
          date="October 2021"
          image={reactPerForm}
          techs={["Unity"]}
          title="Industry 4.0"
        >
          Technical expert on the development of a mixed reality app showcasing
          real time data of various sensors from a Lego model.
        </Project>
        <Project
          date="January 2020"
          image={sixense}
          techs={["Typescript", "Angular", "D3", "Karma", "NestJS"]}
          title="Sixense - Beyond Monitoring"
        >
          Technical expert and lead tech for the development of the Beyond
          Monitoring platform.
          <br />
          The purpose of the platform is to collect data from various sensors
          and display them correctly (on a map, via graphs...etc.)
        </Project>
        <Project
          date="January 2020"
          image={toutsurmoneau}
          links={[{ link: "https://www.toutsurmoneau.fr/" }]}
          techs={["Typescript", "React", "Symfony"]}
          title="Suez - TSME"
        >
          Support, initialization of the TSME project and training of teams in
          React.
        </Project>
        <Project
          date="April 2019"
          image={diplopia}
          techs={["Typescript", "React", "Redux", "Material UI", "Express"]}
          title="Diplopia"
        >
          Development of an internal platform for checking and validating visual
          regressions.
        </Project>
        <Project
          date="March 2019"
          image={vinci}
          links={[{ link: "https://www.vinci-immobilier.com/" }]}
          techs={[
            "Typescript",
            "Next",
            "React",
            "Redux",
            "GraphQL",
            "Storybook",
            "Jest",
            "Drupal",
          ]}
          title="Vinci immobilier"
        >
          Technical expert and lead tech on the development of the VI3P and
          Vinci immobilier websites.
          <br />
          Vinci immobilier is the institutional and B2C website while VI3P is
          the B2C counterpart.
        </Project>
        <Project
          date="April 2018"
          image={safran}
          techs={["Typescript", "React", "Redux", "Storybook", "Jest"]}
          title="Safran"
        >
          Technical expert and lead tech on the development of multiple apps for
          the french army.
        </Project>
        <Project
          date="March 2018"
          image={consolis}
          techs={[
            "Javascript",
            "React",
            "Redux",
            "Storybook",
            "Sails",
            "Webpack",
          ]}
          title="Consolis - Morpholis"
        >
          Technical expert and lead tech on the development of an app displaying
          connected sensor data for Consolis.
        </Project>
        <Project
          date="January 2018"
          image={hec}
          links={[{ link: "https://www.hec.edu/" }]}
          techs={[
            "Javascript",
            "React",
            "Redux",
            "Bootstrap",
            "Web components",
            "Storybook",
            "Drupal",
          ]}
          title="HEC"
        >
          Technical expert and lead tech on the development of the HEC
          institutional website.
          <br />
          React components are wrapped into Web Components to be directly
          integrated in Drupal.
        </Project>
        <Project
          date="August 2017"
          image={socialStories}
          techs={[
            "Typescript",
            "Angular",
            "D3",
            "Express",
            "AWS",
            "Karma",
            "Jasmine",
          ]}
          title="Social & Stories"
        >
          Technical expert and lead tech on the development of the "Thérèse" app
          for Social & Stories.
          <br />
          The goal was to scrap public data on some social networks, transform
          and display them in dashboards.
        </Project>
        <Project
          date="April 2017"
          image={dior}
          links={[{ link: "https://www.dior.com/fashion/stores/fr_fr/search" }]}
          techs={[
            "Javascript",
            "React",
            "Redux",
            "Bootstrap",
            "Storybook",
            "Symfony",
            "AWS",
          ]}
          title="Dior - Store Locator"
        >
          Technical expert and lead tech on the development of the Dior store
          locator.
          <br />
          Symfony is used for the back-office.
          <br />
          Data is made available to the application frontend via APIs developed
          in NodeJS on AWS Lambda.
        </Project>
        <Project
          date="January 2017"
          image={unomui}
          techs={[
            "Typescript",
            "Angular",
            "Bootstrap",
            "Karma",
            "Jasmine",
            "Grunt",
          ]}
          title="UnomUI"
        >
          Development of an internal dashboard for Apache Unomi tool.
        </Project>
        <Project
          date="August 2016"
          image={fdf}
          techs={[
            "Javascript",
            "AngularJS",
            "Express",
            "PouchDB",
            "Socket.IO",
            "Karma",
            "Jasmine",
            "Gulp",
            "Webpack",
          ]}
          title="Fondation de France - Patrimoine Mobilier"
        >
          Technical expert and lead tech on the development of the "Patrimoine
          Mobilier" app.
          <br />
          The app works offline and synchronize itself when the network is back.
        </Project>
        <Project
          date="June 2016"
          image={ehs}
          links={[{ link: "https://www.engie-homeservices.fr/" }]}
          techs={["PHP", "Javascript", "Jquery", "Drupal"]}
          title="Engie Home Services"
        >
          Technical expert and lead tech on the development of the institutional
          website of Engie Home Services.
        </Project>
        <Project
          date="April 2016"
          image={hutchinson}
          links={[{ link: "https://www.hutchinson.com/" }]}
          techs={["PHP", "Javascript", "Jquery", "Drupal"]}
          title="Hutchinson"
        >
          Frontend expert on the development of the institutional website of
          Hutchinson.
        </Project>
        <Project
          date="December 2015"
          image={rac}
          links={[{ link: "https://www.regletteazotecolza.fr/" }]}
          techs={["Javascript", "AngularJS", "Cordova", "Grunt"]}
          title="Terres Inovia - Réglette Azote Colza"
        >
          Development of new features in the hybrid mobile application “Réglette
          Azote Colza”.
        </Project>
        <Project
          date="September 2015"
          image={bm}
          techs={["PHP", "Javascript", "Jquery", "Magento"]}
          title="Bergerat Monnoyeur - Match Machines"
        >
          Project Manager and lead tech on the development of the "Match
          Machines" website of Bergerat Monnoyeur.
        </Project>
        <Project
          date="July 2015"
          image={ahp}
          techs={["PHP", "Javascript", "Jquery", "Drupal"]}
          title="American Hospital of Paris"
        >
          Project Manager and lead tech on the development of an online form for
          American Hospital of Paris.
        </Project>
        <Project
          date="Mai 2015"
          image={renault}
          techs={["PHP", "Javascript", "D3", "Jquery", "Magento"]}
          title="Renault"
        >
          Frontend expert on the development of some B2B pages for the Motrio
          website.
          <br />
          Initialization of an internal project that was displaying multiple KPI
          charts.
        </Project>
        <Project
          date="March 2015"
          image={gobelins}
          links={[{ link: "https://www.gobelins.fr/" }]}
          techs={["PHP", "Javascript", "Jquery", "Drupal"]}
          title="Gobelins"
        >
          Frontend expert on the development of the frontend for the Gobelins
          school.
        </Project>
        <Project
          date="January 2015"
          image={rgaa}
          links={[{ link: "https://accessibilite.numerique.gouv.fr/" }]}
          techs={["PHP", "Javascript", "Jquery", "Drupal"]}
          title="Services du Premier Ministre - RGAA"
        >
          Project Manager and lead tech on the development of the RGAA website.
        </Project>
        <Project
          date="September 2014"
          image={crf}
          links={[{ link: "https://donner.croix-rouge.fr/" }]}
          techs={["PHP", "Javascript", "Jquery", "Magento"]}
          title="Croix-Rouge Française"
        >
          Project Manager and lead tech on the development of the French Red
          Cross donation website.
        </Project>
        <Project
          date="June 2014"
          image={kering}
          links={[{ link: "https://www.keringfoundation.org/" }]}
          techs={["PHP", "Javascript", "Jquery", "Drupal"]}
          title="Kering Foundation"
        >
          Project Manager and lead tech on the development of the institutional
          website of Kering Foundation.
        </Project>
        <Project
          date="February 2013"
          image={passionata}
          links={[{ link: "https://passionata.com/" }]}
          techs={["PHP", "Javascript", "Jquery", "Magento"]}
          title="Passionata"
        >
          Project Manager and lead tech on the development of the Passionata
          e-commerce website.
        </Project>
        <Project
          date="February 2012"
          image={lhg}
          links={[
            { link: "https://www.kyriad.com/" },
            { link: "https://www.campanile.com/" },
            { link: "https://www.premiereclasse.com/" },
            { link: "https://www.louvrehotels.com/" },
            { link: "http://www.hotelforyou.com/" },
          ]}
          techs={["PHP", "Javascript", "Jquery", "Drupal"]}
          title="Louvre Hotel Group"
        >
          Project Manager and lead tech on the development of multiple websites
          for Louvre Hotel Group.
        </Project>
        <Project
          date="September 2011"
          image={pcv}
          links={[{ link: "https://www.pariscityvision.com/" }]}
          techs={["PHP", "Javascript", "Jquery", "Magento"]}
          title="Pariscityvision"
        >
          Project Manager and lead tech on the development of the
          Pariscityvision e-commerce website.
        </Project>
        <Project
          date="February 2011"
          image={uja}
          links={[{ link: "https://www.unjourailleurs.com/" }]}
          techs={["PHP", "Javascript", "Jquery", "Magento"]}
          title="Un Jour Ailleurs"
        >
          Project Manager and lead tech on the development of the "Un Jour
          Ailleurs" e-commerce website.
        </Project>
        <Project
          date="September 2010"
          image={darjeeling}
          links={[{ link: "https://www.darjeeling.fr/" }]}
          techs={["PHP", "Javascript", "Jquery", "Magento"]}
          title="Darjeelng"
        >
          Project Manager and lead tech on the development of the Darjeeling
          e-commerce website.
        </Project>
        <Project
          date="September 2009"
          image={el}
          links={[{ link: "https://www.editions-legislatives.fr/" }]}
          techs={["PHP", "Javascript", "Jquery", "Magento", "Drupal"]}
          title="Editions Legislatives"
        >
          Development of the Editions Legislatives e-commerce and institutional
          website.
        </Project>
      </div>
    </Layout>
  );
}
