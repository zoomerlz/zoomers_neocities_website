import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = [
    "This website is gonna be poggers 👽",
    "For silly IT people only 😤",
    "Jk everyone can join 😳",
  ];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Super Cool Website With Next.js And React 💚" />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
