import "./App.css";
import Icons from "./components/Icons";
import ToastNotifications from "./components/ToastNotifications";
import SampleModal from "./components/SampleModal";
import SampleTooltips from "./components/SampleTooltips";
import CountAnimation from "./components/CountAnimation";
import IdleTimerContainer from "./components/IdleTimerContainer";
function App() {
  return (
    <div className="App">
      <Icons />
      <br/>
      <ToastNotifications />
      <br/>
      <SampleModal />
      <br/>
      <SampleTooltips />
      <br/>
      <CountAnimation />
      <br/>
      <IdleTimerContainer />
      <br/>
    </div>
  );
}

export default App;
