import Layout from "@theme/Layout";
import Project from "@site/src/components/Project";

import coloryage from "./images/coloryage/coloryage7.webp";
import drawPhone from "./images/draw-phone.webp";
import faceliftSaloon from "./images/facelift-saloon.webp";
import jumperRace from "./images/jumper-race-2.webp";
import lasertank from "./images/lasertank.webp";
import lasertank3 from "./images/lasertank3.webp";
import lasertankJava from "./images/lasertank-java.webp";
import lasertankUnity from "./images/lasertank-unity.webp";
import minersAndTraitors from "./images/miners-and-traitors-2.webp";
import nhexReact from "./images/nhex-react.webp";
import ninthKind from "./images/ninth-kind.webp";
import react2048 from "./images/react-2048.webp";
import reactConnect4 from "./images/react-connect4.webp";
import reactFarlanders from "./images/react-farlanders.webp";
import reactLasertank from "./images/react-lasertank.webp";
import reactMinesweeper from "./images/react-minesweeper.webp";
import reactNonogram from "./images/react-nonogram.webp";
import reactPong from "./images/react-pong.webp";
import reactTicTacToe from "./images/react-tictactoe.webp";
import scribble from "./images/scribble-2.webp";
import zombieGame from "./images/zombie-game.webp";

export default function Games(): JSX.Element {
  return (
    <Layout
      title={`Games`}
      description="Games projects of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <div className="container margin-vert--lg">
        <h1>Games</h1>
        <Project
          date="August 2024"
          image={drawPhone}
          links={[
            {
              link: "https://github.com/tonai/draw-phone",
              type: "github",
            },
          ]}
          techs={["Typescript", "Vue", "dusk", "Vite"]}
          title="Draw Phone - dusk"
        >
          Multiplayer game developed with Dusk.
          <br />
          Alternate between drawing sentences and describing drawings, and
          discover all the sequences with everyone at the end and have fun
          together!
          <br />
          The game is playable on the{" "}
          <a href="https://join.rune.ai/game/xLgFE6t7-RQE">dusk</a> app.
        </Project>
        <Project
          date="August 2024"
          image={scribble}
          links={[
            {
              link: "https://github.com/tonai/scribble",
              type: "github",
            },
          ]}
          techs={["Typescript", "Vue", "dusk", "Vite"]}
          title="Scribble - dusk"
        >
          Multiplayer game developed with Dusk during the{" "}
          <a href="https://developers.dusk.gg/blog/dusk-jam/">Dusk 1st Jam</a>{" "}
          (ranked 1st).
          <br />
          Choose a word and make other players guess it by only using your
          drawing skills.
          <br />
          The game is playable on the{" "}
          <a href="https://join.rune.ai/game/x0lXLIxo-MgE">dusk</a> app.
        </Project>
        <Project
          date="Mai 2024"
          image={jumperRace}
          links={[
            {
              link: "https://github.com/tonai/jumper-race",
              type: "github",
            },
          ]}
          techs={["Typescript", "React", "Rapier", "dusk", "Vite"]}
          title="Jumper Race - dusk"
        >
          Multiplayer game developed with Dusk during the{" "}
          <a href="https://spring-2024.reactjam.com/">Spring 2024 React Jam</a>{" "}
          (ranked 3rd).
          <br />
          Control a little jumping blob and be the fastest to reach the end of
          each level.
          <br />
          The game is playable on the{" "}
          <a href="https://join.rune.ai/game/C928F89n-GAE">dusk</a> app.
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
          techs={["Typescript", "React", "dusk", "Vite"]}
          title="Minors and Traitors - dusk"
        >
          Multiplayer game developed with Dusk during the{" "}
          <a href="https://winter-2023.reactjam.com/">Winter 2023 React Jam</a>{" "}
          (ranked 3rd).
          <br />
          A cooperative board game. Build a path to the gold, try to be the
          first one for more points, but beware, one of you may be a traitor.
          <br />
          The game is playable on the{" "}
          <a href="https://join.rune.ai/game/mSKFtSCC-1">dusk</a> app.
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
          techs={["Typescript", "React", "Vite"]}
          title="React Farlanders"
        >
          A React port of the{" "}
          <a href="https://store.steampowered.com/app/1318740/Farlanders/">
            Farlanders
          </a>{" "}
          game, a turn-based strategy game about creating a colony on mars.
          <br />
          The goal is purely educational, demonstrating that it is possible to
          develop a real game with React.
        </Project>
        <Project
          date="September 2022"
          image={reactNonogram}
          links={[
            { link: "https://tonai.github.io/react-nonogram/" },
            {
              link: "https://github.com/tonai/react-nonogram",
              type: "github",
            },
          ]}
          techs={["Typescript", "React", "Webpack"]}
          title="React Nonogram"
        >
          Nonogram game made with React.
          <br />
          It's playable (you need to upload a small transparent PNG image to
          test it) but still needs some polishing.
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
          techs={["Unity"]}
          title="Lasertank Unity"
        >
          Porting of my lasertank game on unity.
        </Project>
        <Project
          date="June 2021"
          image={zombieGame}
          links={[
            {
              link: "https://github.com/tonai/zombie-game",
              type: "github",
            },
          ]}
          techs={["Unity"]}
          title="Zombie Game"
        >
          Little Unity game.
          <br />
          The goal was to understand the basics of the Unity game engine.
        </Project>
        <Project
          date="July 2019"
          image={nhexReact}
          links={[
            { link: "https://tonai.github.io/nhex-react/" },
            { link: "https://github.com/tonai/nhex-react", type: "github" },
          ]}
          techs={["Typescript", "React", "Redux", "Webpack"]}
          title="Nhex React"
        >
          Unfinished porting of the Neuroshima Hex game with React.
          <br />
          Neuroshima Hex is a turn-based strategy board game in which several
          armies face each other.
        </Project>
        <Project
          date="September 2018"
          image={reactPong}
          links={[
            { link: "https://tonai.github.io/react-pong/" },
            { link: "https://github.com/tonai/react-pong", type: "github" },
          ]}
          techs={["Javascript", "React", "Webpack"]}
          title="React Pong"
        >
          Personal version of the pong game.
          <br />
          The goal was to try to develop a real time game with some physics from
          scratch.
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
          techs={["Javascript", "React", "Webpack"]}
          title="Facelift Saloon"
        >
          Game developed during the{" "}
          <a href="https://itch.io/jam/pot-au-jeu">POT-AU-JEU Game Jam</a>.
          <br />
          Rhythm game where you have to press the right keys at the right pace.
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
          techs={["Javascript", "React", "Redux", "Webpack"]}
          title="React Lasertank"
        >
          Fifth porting of my Lasertank game.
          <br />
          The goal was to use React and to play with the native 3d transforms
          available in the browsers.
        </Project>
        <Project
          date="August 2017"
          image={react2048}
          links={[
            { link: "https://tonai.github.io/react-2048/" },
            { link: "https://github.com/tonai/react-2048", type: "github" },
          ]}
          techs={["Javascript", "React", "Webpack"]}
          title="React 2048"
        >
          2048 game made with React.
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
          techs={["Javascript", "React", "Webpack"]}
          title="React Minesweeper"
        >
          Minesweeper game made with React.
        </Project>
        <Project
          date="August 2017"
          image={reactConnect4}
          links={[
            { link: "https://tonai.github.io/react-connect4/" },
            {
              link: "https://github.com/tonai/react-connect4",
              type: "github",
            },
          ]}
          techs={["Javascript", "React", "Webpack"]}
          title="React Connect 4"
        >
          Connect 4 game made with React.
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
          techs={["Javascript", "React", "Webpack"]}
          title="React Tic Tac Toe"
        >
          Tic Tac Toe game made with React.
        </Project>
        <Project
          date="September 2016"
          image={lasertank}
          links={[
            { link: "https://github.com/tonai/lasertank", type: "github" },
          ]}
          techs={["Javascript", "Karma", "Jasmine", "Gulp", "Webpack"]}
          title="Lasertank 4"
        >
          Fourth porting of my Lasertank game.
          <br />
          The goal here was to use composition over inheritance in pure
          Javascript.
        </Project>
        <Project
          date="July 2013"
          image={lasertank3}
          links={[
            { link: "https://tonai.github.io/lasertank3/html/game.html" },
            { link: "https://tonai.github.io/lasertank3/html/editor.html" },
            { link: "https://github.com/tonai/lasertank3", type: "github" },
          ]}
          techs={["Javascript", "AWS", "Grunt"]}
          title="Lasertank 3"
        >
          Third and most advanced version of my Lasertank game which includes a
          level editor.
          <br />
          Pure Javascript implementation using an homemade multiple inheritance
          system.
          <br />I updated the game in 2018 to deploy the backend on AWS.
        </Project>
        <Project
          date="June 2013"
          image={coloryage}
          techs={["Javascript", "Jquery", "PHP"]}
          title="Colory Age"
        >
          RPG game with color theme.
          <br />I was in charge of the frontend development.
        </Project>
        <Project
          date="April 2011"
          image={ninthKind}
          links={[
            { link: "https://github.com/tonai/ninth-kind", type: "github" },
          ]}
          techs={["Python", "Photoshop"]}
          title="Ninth Kind"
        >
          Game developed during the{" "}
          <a href="http://www.pyweek.org/12/">Pyweek Game Jam #12</a>.<br />I
          was mainly in charge of the graphics.
        </Project>
        <Project
          date="December 2008"
          image={lasertankJava}
          links={[
            {
              link: "https://github.com/tonai/lasertank-java",
              type: "github",
            },
          ]}
          techs={["Java", "Photoshop"]}
          title="Lasertank Java"
        >
          Second version of my Lasertank game made using Java.
          <br />
          The first version was developed on my Texas Instruments 89 calculator
          using the TI-Basic language.
          <br />
          Lasertank is a puzzle game where you have to reach the end of the
          level using your little army tank firing lasers that can move blocks.
        </Project>
      </div>
    </Layout>
  );
}
