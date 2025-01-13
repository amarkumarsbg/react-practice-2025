import { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className=" max-w-full flex flex-col items-center py-8">
      <h1 className="text-5xl font-semibold">Stopwatch</h1>
      <div className="text-3xl font-semibold mt-8">
        <span>{"0" + Math.floor((time / 6000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 1000) % 60)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="w-1/3 max-w-sm flex flex-row justify-evenly mt-7">
        {running ? (
          <button
            className="border rounded-lg py-1 px-3.5"
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            className="border rounded-lg py-1 px-3"
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
        )}

        <button
          className="border rounded-lg py-1 px-2.5"
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
