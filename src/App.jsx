import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCounter((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message counter={counter} />
    </div>
  );
}

function Message(props) {
  return <p>used {props.counter} already</p>;
}
