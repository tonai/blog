import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Project from "../components/Project";

import chineseEvents from "./projects/chinese-events.png";
import faceliftSaloon from "./projects/facelift-saloon.png";
import gally from "./projects/gally.png";
import haring from "./projects/haring.png";
import jumperRace from "./projects/jumper-race.png";
import lasertank from "./projects/lasertank.png";
import lasertank3 from "./projects/lasertank3.png";
import lasertankJava from "./projects/lasertank-java.png";
import lasertankUnity from "./projects/lasertank-unity.png";
import minersAndTraitors from "./projects/miners-and-traitors.png";
import MusicMaker from "./projects/music-maker.png";
import neuralNetwork from "./projects/neural-network.png";
import nhexReact from "./projects/nhex-react.png";
import ninthKind from "./projects/ninth-kind.png";
import react2048 from "./projects/react-2048.png";
import reactConnect4 from "./projects/react-connect4.png";
import reactFarlanders from "./projects/react-farlanders.png";
import reactLasertank from "./projects/react-lasertank.png";
import reactMinesweeper from "./projects/react-minesweeper.png";
import reactNonogram from "./projects/react-nonogram.png";
import reactPerForm from "./projects/react-per-form.png";
import reactPong from "./projects/react-pong.png";
import reactTicTacToe from "./projects/react-tictactoe.png";
import slidev from "./projects/slidev.png";
import storybookAddonTheme from "./projects/storybook-addon-theme.png";
import zombieGame from "./projects/zombie-game.png";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`My projects`}
      description="Projects of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <div className="container">
        <h1>My projects</h1>
        <h2>Open Source Projects</h2>
        <Project
          date="February 2024"
          image={reactPerForm}
          links={[
            { link: "https://tonai.github.io/react-per-form/" },
            { link: "https://github.com/tonai/react-per-form", type: "github" },
          ]}
          title="@per-form/react"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="June 2023"
          image={haring}
          links={[
            { link: "https://smile-sa.github.io/haring-doc/" },
            { link: "https://github.com/Smile-SA/haring", type: "github" },
            { link: "https://github.com/Smile-SA/haring-doc/", type: "github" },
          ]}
          title="Haring"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="December 2022"
          image={gally}
          links={[
            { link: "https://github.com/Elastic-Suite/gally", type: "github" },
            {
              link: "https://github.com/Elastic-Suite/gally-admin",
              type: "github",
            },
          ]}
          title="Gally"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="April 2021"
          image={slidev}
          links={[
            { link: "https://sli.dev/" },
            { link: "https://github.com/slidevjs/slidev", type: "github" },
          ]}
          title="Slidev"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
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
          title="Storybook Addon Themes"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <h2>Slides</h2>
        https://tonai.github.io/slides/frontend-architecture
        <br />
        https://tonai.github.io/slides/frontend-library
        <br />
        https://tonai.github.io/slides/hydration
        <br />
        https://tonai.github.io/slides/tnt-headless
        <h2>Games</h2>
        <Project
          date="Mai 2024"
          image={jumperRace}
          links={[
            { link: "https://github.com/tonai/jumper-race", type: "github" },
          ]}
          title="Dusk - Jumper Race"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="January 2024"
          image={minersAndTraitors}
          links={[
            {
              link: "https://github.com/tonai/miners-and-traitors",
              type: "github",
            },
          ]}
          title="Dusk - Minors and Traitors"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="April 2023"
          image={reactFarlanders}
          links={[
            { link: "https://tonai.github.io/react-farlanders/" },
            {
              link: "https://github.com/tonai/react-farlanders",
              type: "github",
            },
          ]}
          title="React Farlanders"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="September 2022"
          image={reactNonogram}
          links={[
            { link: "https://tonai.github.io/react-nonogram/" },
            { link: "https://github.com/tonai/react-nonogram", type: "github" },
          ]}
          title="React Nonogram"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="October 2021"
          image={lasertankUnity}
          links={[
            {
              link: "https://github.com/tonai/lasertank-unity",
              type: "github",
            },
          ]}
          title="Lasertank Unity"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="June 2021"
          image={zombieGame}
          links={[
            { link: "https://github.com/tonai/zombie-game", type: "github" },
          ]}
          title="Zombie Game"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="July 2019"
          image={nhexReact}
          links={[
            { link: "https://tonai.github.io/nhex-react/" },
            { link: "https://github.com/tonai/nhex-react", type: "github" },
          ]}
          title="Nhex React"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          black
          date="September 2018"
          image={reactPong}
          links={[
            { link: "https://tonai.github.io/react-pong/" },
            { link: "https://github.com/tonai/react-pong", type: "github" },
          ]}
          title="React Pong"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="July 2018"
          image={faceliftSaloon}
          links={[
            { link: "https://tonai.github.io/facelift-saloon/" },
            {
              link: "https://github.com/tonai/facelift-saloon",
              type: "github",
            },
          ]}
          title="Facelift Saloon"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="Mars 2018"
          image={lasertank3}
          links={[
            { link: "https://tonai.github.io/lasertank3/html/game.html" },
            { link: "https://tonai.github.io/lasertank3/html/editor.html" },
            { link: "https://github.com/tonai/lasertank3", type: "github" },
          ]}
          title="Lasertank 3"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="January 2018"
          image={reactLasertank}
          links={[
            { link: "https://tonai.github.io/react-lasertank/" },
            {
              link: "https://github.com/tonai/react-lasertank",
              type: "github",
            },
          ]}
          title="React Lasertank"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="August 2017"
          image={react2048}
          links={[
            { link: "https://tonai.github.io/react-2048/" },
            { link: "https://github.com/tonai/react-2048", type: "github" },
          ]}
          title="React 2048"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="August 2017"
          image={reactMinesweeper}
          links={[
            { link: "https://tonai.github.io/react-minesweeper/" },
            {
              link: "https://github.com/tonai/react-minesweeper",
              type: "github",
            },
          ]}
          title="React Minesweeper"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="August 2017"
          image={reactConnect4}
          links={[
            { link: "https://tonai.github.io/react-connect4/" },
            { link: "https://github.com/tonai/react-connect4", type: "github" },
          ]}
          title="React Connect 4"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="August 2017"
          image={reactTicTacToe}
          links={[
            { link: "https://tonai.github.io/react-tictactoe/" },
            {
              link: "https://github.com/tonai/react-tictactoe",
              type: "github",
            },
          ]}
          title="React Tic Tac Toe"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="September 2016"
          image={lasertank}
          links={[
            { link: "https://github.com/tonai/lasertank", type: "github" },
          ]}
          title="Lasertank 2"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="April 2011"
          image={ninthKind}
          links={[
            { link: "https://github.com/tonai/ninth-kind", type: "github" },
          ]}
          title="Ninth Kind"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="December 2008"
          image={lasertankJava}
          links={[
            { link: "https://github.com/tonai/lasertank-java", type: "github" },
          ]}
          title="Lasertank Java"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <h2>Other side projects</h2>
        <Project
          date="April 2024"
          image={chineseEvents}
          links={[
            { link: "https://tonai.github.io/chinese-events/" },
            { link: "https://github.com/tonai/chinese-events", type: "github" },
            {
              link: "https://github.com/tonai/chinese-events-native",
              type: "github",
            },
          ]}
          title="Chinese events"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="January 2022"
          image={neuralNetwork}
          links={[
            { link: "https://tonai.github.io/neural-network/" },
            { link: "https://github.com/tonai/neural-network", type: "github" },
          ]}
          title="Neural network"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <Project
          date="July 2018"
          image={MusicMaker}
          links={[
            { link: "https://tonai.github.io/music-maker/" },
            { link: "https://github.com/tonai/music-maker", type: "github" },
          ]}
          title="Music maker"
        >
          @per-form/react is a fast and easy solution for managing forms in
          React.
        </Project>
        <h2>Office Projects</h2>
      </div>
    </Layout>
  );
}
