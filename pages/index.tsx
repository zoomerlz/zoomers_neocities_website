import { useState } from "react";
import { type CSSObject, Global } from '@emotion/react';
import {
  createAppTheme,
  createAppStylesBaseline,
  Animator,
  Animated,
  aaVisibility,
  aa,
  FrameSVGCorners,
  GridLines,
  Dots,
  MovingLines,
  Text,
} from "@arwes/react";

const theme = createAppTheme({
  settings: {
    hues: {
      primary: 80,
      secondary: 30
    },
    fontFamilies: {
      title: 'Monospace',
      body: 'Monospace'
    }
  }
});

const stylesBaseline = createAppStylesBaseline(theme);

function Card({ title, content }) {
  return (
    <Animator merge combine manager="stagger">
      <Animated
        className="card"
        style={{
          position: "relative",
          display: "block",
          maxWidth: "500px",
          margin: theme.space([4, "auto"]),
          padding: theme.space(8),
          textAlign: "center",
        }
      }
      
        // Effects for entering and exiting animation transitions.
        animated={[aaVisibility(), aa("y", "2rem", 0)]}
      >
        {/* Frame decoration and shape colors defined by CSS. */}
        <style>{`
          .card .arwes-react-frames-framesvg [data-name=bg] {
            color: ${theme.colors.primary.deco(1)};
          }
          .card .arwes-react-frames-framesvg [data-name=line] {
            color: ${theme.colors.primary.main(4)};
          }
        `}</style>

        <Animator>
          <FrameSVGCorners strokeWidth={2} />
        </Animator>

        <Animator>
          <Text as="h1">{title}</Text>
        </Animator>

        <Animator>
          <Text as="ul" style={{textAlign: "left" }}
                  manager='decipher'
                  easing='outSine'
                  fixed>
              {content.map((name) => (
                <li key="{name}">{name}</li>
              ))}
          </Text>
        </Animator>
      </Animated>
    </Animator>
  );
}
function Background() {
  return (
    <Animator duration={{ interval: 10 }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#000906",
          backgroundImage:
            "radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)",
        }}
      >
        <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <MovingLines
          lineColor="hsla(180, 100%, 75%, 0.07)"
          distance={30}
          sets={20}
        />
      </div>
    </Animator>
  );
}

export default function HomePage() {
  const names = [
    "This website is gonna be poggers 👽",
    "For silly IT people only 😤",
    "Jk everyone can join 😳",
    "Don't look at my spagetti code I'm learning 🙈",
  ];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
    <Global styles={stylesBaseline as Record<string, CSSObject>} />
      <Animator>
        <Background />
      </Animator>
      <Animator>
        <Card title="Super Cool Website With Next.js And React 💚" content={names} ></Card >
      </Animator>
    </>
  );
}
