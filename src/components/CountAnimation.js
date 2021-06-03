// import CountUp, { useCountUp } from "react-countup";
import CountUp, { useCountUp } from "react-countup";

// https://github.com/glennreyes/react-countup

function CountAnimation() {
  // duration in seconds
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 50,
    end: 200,
    duration: 150,
    prefix: "$",
    suffix: " USD",
    decimals: 2,
    startOnMount: false,
  });

  return (
    <>
      <CountUp
        start={50}
        end={200}
        duration={150}
        prefix="$"
        suffix=" USD"
        decimals={2}
      />
      <br />
      <br />
      {countUp}
      <br />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause / Resume</button>
      <button onClick={() => update(100)}>Count to 100</button>
    </>
  );
}

export default CountAnimation;
